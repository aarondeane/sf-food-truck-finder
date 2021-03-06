const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2)); //Exclude interpreter and file arguments
  const cmd = args._[0] || 'now'; //default to pulling the data

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  switch (cmd) {
    case 'now':
      require('./cmds/now')(args);
      break;

    case 'version':
      require('./cmds/version')(args);
      break;
  
    case 'help':
      require('./cmds/help')(args);
      break;

    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
}