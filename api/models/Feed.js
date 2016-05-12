module.exports = {
  attributes: {
    icon: {
      type: 'string'
    },
    title: {
      type: 'text'
    },
    description: {
      type: 'text'
    }
  },

  afterCreate: function(entry, cb) {
    sails.sockets.broadcast('feed', 'new_entry', entry);
    cb();
  }
};
