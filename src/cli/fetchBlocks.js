const axios = require('axios');
const mongoose = require('mongoose');
const Block = require('../models/Block');
const { Command } = require('commander');
const program = new Command();

program
  .command('fetch-blocks')
  .description('Fetch blockchain blocks from Alephium and save to MongoDB')
  .option('--fromTs <fromTs>', 'Start timestamp for blocks', parseInt)
  .option('--toTs <toTs>', 'End timestamp for blocks', parseInt)
  .action(async (cmdObj) => {
    const { fromTs, toTs } = cmdObj;
    console.log('fromTs',fromTs)
    console.log('toTs',toTs)
    if (!fromTs || !toTs) {
      console.error('Please provide both fromTs and toTs as parameters.');
      return;
    }
    try {
      // Получение блоков с API Alephium
      const {data} = await axios.get('https://node-v20.mainnet.alephium.org/blockflow/blocks-with-events', {
        params: {fromTs, toTs}
      });

      const blocks = data?.blocksAndEvents?.flatMap(blockArray => blockArray.map(blockItem => blockItem.block)) || [];
      // console.log('blocks',blocks)

      console.log(JSON.stringify(blocks[0],null,2))

      if (blocks.length === 0) {
        console.log('No blocks found for the specified time range.');
        return;
      }

      // Подключение к MongoDB
      await mongoose.connect('mongodb://localhost:27017/alephium');

      // Сохранение отфильтрованных блоков в MongoDB
      await Block.insertMany(blocks);
      console.log(`${blocks.length} blocks saved to MongoDB`);

      mongoose.connection.close();
    } catch (error) {
      console.error('Error fetching or saving blocks:', error);
    }
  });

program.parse(process.argv);
