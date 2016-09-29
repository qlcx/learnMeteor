import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
  // 'links.insert' => a key word
  'links.insert': function(url) {
    //validUrl.isUri(url);  //验证url格式  true: 返回url / false: 返回err
    //验证是否相等来判断url格式
    check(url, Match.Where(url => validUrl.isUri(url)));

    // we're ready to save the url
    const token = Math.random().toString(36).slice(-5);

    Links.insert({url: url, token: token, clicks: 0});
    //or Links.insert({url, token, clicks: 0});
  }
});

export const Links = new Mongo.Collection('links');