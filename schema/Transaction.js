cube(`Transaction`, {
  sql: `SELECT * FROM public."Transaction"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, receiptid]
    },
    
    operationamount: {
      sql: `${CUBE}."operationAmount"`,
      type: `sum`
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    },
    
    balance: {
      sql: `balance`,
      type: `sum`
    },
    
    cashbackamount: {
      sql: `${CUBE}."cashbackAmount"`,
      type: `sum`
    }
  },
  
  dimensions: {
    counteredrpou: {
      sql: `${CUBE}."counterEdrpou"`,
      type: `string`
    },
    
    hold: {
      sql: `hold`,
      type: `string`
    },
    
    comment: {
      sql: `comment`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    counteriban: {
      sql: `${CUBE}."counterIban"`,
      type: `string`
    },
    
    receiptid: {
      sql: `${CUBE}."receiptId"`,
      type: `string`
    },
    
    time: {
      sql: `time`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
