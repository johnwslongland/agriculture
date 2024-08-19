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

New doctypes  :   
Animal. Linked to Item; Contains fields : Serial No, Species, Weight, Date PUrchased, PO, Date Sold , SO , Project , Feed , Pedigree  
        Disease child table  
Animal Location Rotation: Child table : Location, Current  
Feed : name , Composition  
Species. Name , scientific name  
Pedigree : Fields TBA

Fixes :
Wrong path  : line 30 crop.js  
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
