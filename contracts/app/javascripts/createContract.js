var ProofOfExistence = artifacts.require("./ProofOfExistence.sol");

module.exports = function(callback) {
	// Get the deployed contract
	var poe = ProofOfExistence.deployed().then(function(instance){
		poe=instance;

		// Check if a document exists
		poe.checkDocument('Hello World').then(console.log);

		// Notarize a document
		poe.notarize('Hello World');
	}).catch(function(e){
		console.log(e);
	});
}
