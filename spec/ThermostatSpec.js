'use strict';

describe('Thermostat', function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat starts at 20 degrees', function() {
    it ('is equal to 20',function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('thermostat is increased by 1 degree when using up()', function() {
    it ('is equal to 21',function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toBe(21);
    });
  });

  describe('thermostat is decreased by 1 degree when using down()', function() {
    it ('is equal to 19',function() {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toBe(19);
    });
  });

  describe('minimum thermostat is 10 degrees', function() {
    it ('is equal to 10',function() {
      for(let i = 0; i < 11; i++){
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('power saving mode on', function() {
    it ('is on by default',function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  }); 

  describe('power saving mode on can be switched off', function() {
    it ('can be switched off',function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
  });

  describe('power saving mode on can be switched off', function() {
    it ('can be switched on again',function() {
      thermostat.switchPowerSavingModeOff();
      //expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('when power saving mode is on', function(){
    it ('has a maximum temperature of 25 degrees', function() {
      for (let i =0; i < 26; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  //counter test
  describe('when power saving mode is off', function(){
    it('has a maximum temperature of 32', function(){
      thermostat.switchPowerSavingModeOff();
      for (let i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

    it('can be reset to the default temperature', function(){
    for (let i = 0; i < 26; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

  describe('displaying usage levels', function(){
    describe('when the temperature is below 18', function(){
      it('is considered low-usage', function(){
        for (let i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
    describe('when the temperature is between 18 and 25', function(){
      it('is considered medium-usage', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe('when the temperature is above 25', function(){
      it('is considered high-usage', function(){
        for (let i = 0; i < 26; i++) {
          thermostat.up();
        }
      expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});



