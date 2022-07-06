const {MasterStakingClient} = require('../..');

const dotenv = require('dotenv');
dotenv.config();

(async () => {
  const mnemonic = process.env.MNEMONIC;
  const MASTER_STAKING_ID = process.env.MASTER_STAKING_ID;
  console.log(mnemonic, MASTER_STAKING_ID);

  const stakingContract = new MasterStakingClient(
      {
        mnemonic,
        network: 'LocalHost',
      },
      MASTER_STAKING_ID,
  );

  try {
    console.log(JSON.stringify(await stakingContract.getState()));
  } catch (error) {
    console.error(error);
  }
})();
