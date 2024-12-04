# Copyright (c) 2024, Frappe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Animal(Document):

    def validate(self):
        frappe.msgprint("Validate")

@frappe.whitelist()
def rotate_animals(animals, rotation_type, new_herd):
    import json
        
    # Parse the list of selected animals
    animals = json.loads(animals)
    created_docs = []

    if not animals:
        frappe.throw("No animals selected.")

    if not rotation_type or not new_herd:
        frappe.throw("Rotation Type and New Herd are required.")

    return_value = ""
    # Create an Animal Herd Rotation doc for each animal
    for animal in animals:
        # Create the rotation document
        rotation_doc = frappe.get_doc({
            "doctype": "Animal Herd Rotation",
            "animal": animal,
            "rotation_type": rotation_type,
            "new_herd": new_herd,
            "date": frappe.utils.nowdate(),
        })

        # Save the document
        rotation_doc.insert(ignore_permissions=True)
        created_docs.append(rotation_doc.name)

        animal_doc = frappe.get_doc("Animal", animal)
        animal_doc.herd = new_herd
        animal_doc.save(ignore_permissions=True)

    frappe.db.commit()
    return {"message": "Animal Herd Rotations created successfully.", "created_docs": created_docs}


