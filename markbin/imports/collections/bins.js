import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      // typically the id of the user record in the database
      // docs.meteor.com/#/full/method_userid
      ownerId: this.userId
    });
  }
})

export const Bins = new Mongo.Collection('bins');