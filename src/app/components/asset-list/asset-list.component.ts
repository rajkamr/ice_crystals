import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  constructor() { }
  public assetList = [
    {
      "name": "Backhoe Loaders",
      "imageUrl": "backhoe_loaders.jpeg",
      "assetId": 1
    },
    {
      "name": "Compactors",
      "imageUrl": "compactors.jpeg",
      "assetId": 2
    },
    {
      "name": "Excavator",
      "imageUrl": "excavator.jpeg",
      "assetId": 3
    },
    {
      "name": "Forest Machines",
      "imageUrl": "forest_machine.jpeg",
      "assetId": 4
    }
  ];
  ngOnInit() {
  }

}
