// Copyright (c) 2024, Frappe and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Animal", {
// 	refresh(frm) {

// 	},
// });
//
frappe.listview_settings['Animal'] = {
    onload: function (listview) {
        // Limit multi-select to 30
        listview.multi_select_limit = 30;

        // Add "Rotate Animals" button
        listview.page.add_inner_button(__('Rotate Animals'), function () {
            let selected_items = listview.get_checked_items();
            debugger;
            if (selected_items.length >= 1) {
		debugger;
                // Prompt the user for rotation type and new herd
                frappe.prompt([
                    {
                        fieldname: 'rotation_type',
                        label: 'Rotation Type',
                        fieldtype: 'Select',
                        options: ['Rotate', 'Opening'],
                        reqd: 1
                    },
                    {
                        fieldname: 'new_herd',
                        label: 'New Herd',
                        fieldtype: 'Link',
                        options: 'Herd',
                        reqd: 1
                    }
                ],
                function (values) {
                    // Call the server script to create Animal Herd Rotation docs
			debugger;
				frappe.call({
                        	method: "agriculture.agriculture.doctype.animal.animal.rotate_animals",
                        	args: {
                            		animals: selected_items.map(item => item.name),
                            		rotation_type: values.rotation_type,
                            		new_herd: values.new_herd
                        	},
                        	callback: function (r) {
                            		debugger;
                            		if (!r.exc) {
                                		frappe.show_alert({
                                    			message: __("Animal Herd Rotation documents created successfully."),
                                    			indicator: "green"
                                		});
                                		listview.refresh();
                            		}
					if (r.message) {
						frappe.show_alert({
							message: `The following Animal Herd Rotation records were created:
                                                  		${r.message.created_docs.join(", ")}`,
							indicator: "green"
						})
					}						
                        	}
                    	});
                },
                __('Rotate Animals'),
                __('Submit'));
            } else {
                frappe.show_alert({
                    message: "Please select at least one Animal.",
                    indicator: "orange"
                });
            }
        });
    }
};
