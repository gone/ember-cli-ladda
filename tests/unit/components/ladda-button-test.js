import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('ladda-button', 'LaddaButtonComponent', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
});


test('canStart', function() {
    expect(2);
    var component = this.subject();
    this.append();
    equal(component.$().is("[data-loading]"), false);
    component.start();
    equal(component.$().is("[data-loading]"), true);
});

test('canStop', function() {
    expect(3);
    var component = this.subject();
    this.append();
    equal(component.$().is("[data-loading]"), false);
    component.start();
    equal(component.$().is("[data-loading]"), true);
    component.stop();
    equal(component.$().is("[data-loading]"), false);
});
test('spinning toggles on isSpinning', function() {
    expect(3);
    var component = this.subject();
    this.append();
    equal(component.$().is("[data-loading]"), false);
    component.set("isSpinning", true);
    equal(component.$().is("[data-loading]"), true);
    component.set("isSpinning", false);
    equal(component.$().is("[data-loading]"), false);
});

//TODO: This works if you uncomment the debuggers which doesn't make any sense to me.
test('Progress is bound', function() {
    //expect(3);
    var component = this.subject();
    this.append();
    equal(component.$(".ladda-progress").length, 0);
    Ember.run(function(){
        component.set("progress", 0.5);
    });
    //debugger
    //equal(component.$(".ladda-progress").width(), 20);
    Ember.run(function(){
        component.set("progress", 1);
    });
    //debugger
    //equal(component.$(".ladda-progress").width(), 40);
});


test('can be disabled', function() {
    expect(2);
    var component = this.subject();
    this.append();
    equal(component.$().is(":disabled"), false);
    Ember.run(function(){
        component.set("disabled", true);
    });
    equal(component.$().is(":disabled"), true);
});
