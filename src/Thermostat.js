'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE; //temperature is a property of the object Thermostat
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.powerSavingMode = true;
    this.LOW_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
  }

  getCurrentTemperature(){ //function added to our object to access the temperature property
    return this.temperature;
  }

  up() {
    if(this.isMaximumTemperature()){
      return;
    }
    return this.temperature += 1;
  }

  down() {
    if (this.isMinimumTemperature()) { //guard condition before lowering down the temp
      return;
    }
    return this.temperature -= 1;
  }

  //is ALWAYS return a boolean value
  isMinimumTemperature() { //return a boolean check on whether the temp is currently set to the minmimum
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature(){
    if(this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  isPowerSavingModeOn() { //getter method
    return this.powerSavingMode  === true;
  }

  switchPowerSavingModeOff() {
    return this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    return this.powerSavingMode = true;
  }

  resetTemperature() {
    return this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    console.log('is called')
    console.log(this.temperature)
    //console.log(this)
  
    if (this.temperature < this.LOW_ENERGY_USAGE_LIMIT) {
      console.log(this.temperature)
      return 'low-usage';
    }
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
}
