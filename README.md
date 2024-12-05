## Agriculture

The Agriculture Domain of ERPNext comes with features to record crops and land, track plant, soil, water, weather analytics, and even track diseases and fertilizers. You can check out the following topics after this brief introduction to the agriculture module in ERPNext.

Enhancements made:
Location doctype : User can enter shapes using coordinates. Provision made to have a special 'location' called : weather station.
Location doctype : User can collaborate parent and child locations in one view.
Weather doctype : Automatially upload data from certain weather networks.
Project docype : Agriculture tasks can be accessed via single button from List-view, routed to Kanban-view
Crop-cycle doctype : Linked location can be accessed via custom button in Linked location table.
Disease : add fields : Crop disease , Animal Disease
Agricultural Analysis Criteria : Add 'Feed' to drop-down

New doctypes : ( Livestock ) Herd : a Container for a set of Animals ;
Animal. Linked to Item; Contains fields : Serial No, Species, Weight, Date PUrchased, PO, Date Sold , SO , Pedigree
Animal Herd Rotation : records the rotation of Animals between Herds Herd Pasture Rotation : records the rotation of Herds between Pastures Pasture : a Pieace of land ( Location ) that has a certain species, with a certain carying capacity, that can be used for grazing. Pasture Species : records the data ( carying capacity ) related to a certain species. Animal Analysis : Tests performed on an Animal Pest Analysis : tests related to crop pests. Pedigree : Fields TBA a Document that abstracts the animal control from the ERPNext financial / stock complexities.

Fixes : Wrong path : line 30 crop.js
Crop cycle : optimise Task allocation with progress bar

### Installation

Using bench, [install ERPNext](https://github.com/frappe/bench#installation) as mentioned here.

Once ERPNext is installed, add agriculture app to your bench by running
```sh
$ bench get-app agriculture
```

After that, you can install agriculture app on required site by running

```sh
$ bench --site demo.com install-app agriculture
```


### License

GNU GPL V3. See [license.txt](https://github.com/frappe/agriculture/blob/develop/license.txt) for more information.
