new Vue({
  el: '#app',

  data: {
    items: {},
    statuses: [
      { id: 1, name: '入荷' },
      { id: 2, name: '検品' },
      { id: 3, name: '出荷' },
    ]
  },

  methods: {
    getStatusName(statusId) {
      const status = _.find(this.statuses, {
        id: parseInt(statusId)
      });
      return status.name;
    },

    onChange(e, statusId) {
      if(e.added) {
        console.log('追加情報:', statusId, e.added);

      } else if(e.removed) {
        console.log('削除情報:', statusId, e.removed);
      }
    }
  },

  mounted() {
    let allItems = [];
    const statusIds = _.map(this.statuses, 'id');
    for(let i = 0 ; i < 25 ; i++) {
      allItems.push({
        id: i,
        name: '商品名 - '+ i,
        statusId: _.sample(statusIds)
      });
    }
    this.items = _.groupBy(allItems, 'statusId');
  }
});
