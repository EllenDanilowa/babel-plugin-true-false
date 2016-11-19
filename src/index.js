import 'better-log/install';

module.exports = function ({ types: t }) {
	return {
		visitor: {
		    BooleanLiteral(node) {
				if(node.node.value !== undefined){
					if(node.node.value === true) {
				        node.node.value = false;
			        } else if (node.node.value === false) {
				        node.node.value = true;
			        }
				}
		    }
		}
	};
};
