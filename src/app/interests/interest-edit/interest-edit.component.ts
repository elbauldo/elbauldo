import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GuitarStyle } from 'src/app/_models/guitar-style';
import { Manufacturer } from 'src/app/_models/manufacturer';
import { GuitarService } from 'src/app/_services/guitar.service';

@Component({
  selector: 'app-interest-edit',
  templateUrl: './interest-edit.component.html',
  styleUrls: ['./interest-edit.component.css']
})
export class InterestEditComponent implements OnInit {
  id: number;
  editMode = false;
  guitarForm: FormGroup;
  manfak: Manufacturer;
  stylee: GuitarStyle;
  manufs: Manufacturer[];
  styles: GuitarStyle[];

    constructor(
    private route: ActivatedRoute,
    private guitarService: GuitarService,
    private router: Router
  ) {}

  ngOnInit() {
      this.styles = GuitarStyle.Styles;
      this.manufs = this.guitarService.Manufacturers;
      this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    let guitarName = '';
    let guitarYear = '';
    let guitarSeriallNumber = '';
    let guitarImagePath = '';
    let guitarManufacturer = '';
    let guitarStyle = '';

    const guitar = this.guitarService.getGuitar(this.id);

    guitarName = guitar.name;
    guitarYear = guitar.yearOfManufacture;
    guitarSeriallNumber = guitar.serialNumber;
    guitarImagePath = guitar.imagePath;
    guitarManufacturer = guitar.brand.name;
    guitarStyle = guitar.style.name;

    this.guitarForm = new FormGroup({
      name: new FormControl(guitarName, Validators.required),
      imagePath: new FormControl(guitarImagePath, Validators.required),
      serialNumber: new FormControl(guitarSeriallNumber, Validators.required),
      yearOfManufacture: new FormControl(guitarYear, Validators.required),
      guitarStyle: new FormControl(guitarStyle, Validators.required),
      guitarManufacturer: new FormControl(guitarManufacturer, Validators.required)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.guitarService.updateGuitar(this.id, this.guitarForm.value)
    } else {
            this.guitarService.addGuitar(this.guitarForm.value)
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}


