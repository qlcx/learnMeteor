// Only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // Great place to generate data

  // Check to see if data exists in the collection
  // See if the collection has any records
  const numberRecords = Employees.find({}).count();

  if (!numberRecords) {
    // Generate some data..
    _.times(5000, () => {
      const { name, email, phone, } = helpers.createCard();

      Employees.insert({
        name: name,
        email: email,
        phone: phone,
        //or: name, email, phone
        avatar: image.avatar(),  
      });
    });
  }

  //把服务端数据推送到客户端
  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page });
  });
});