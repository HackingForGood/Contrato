var ProofOfExistence = artifacts.require('./ProofOfExistence1.sol');

module.exports = function(deployer) {
	deployer.deploy(ProofOfExistence);
};