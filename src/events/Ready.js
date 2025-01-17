const KongouEvent = require('../abstract/KongouEvent.js');

class Ready extends KongouEvent {
    get name() {
        return 'ready';
    }

    get once() {
        return true;
    }

    async run() {
        this.client.logger.debug(`${this.client.user.username}`, `Ready! Serving ${this.client.guilds.cache.size} guild(s) with ${this.client.users.cache.size} user(s)`);
        const statuses = [
            {type : 'PLAYING', message: 'Admiral! You\'ve got mail! Love Letters aren\'t allowed!'},
            {type: 'LISTENING' , message: 'Always got to make time for tea-time!'},
            {type: 'PLAYING' , message: 'Burning... Love!'},
        ];
        let i = 0;
        this.interval = setInterval(() => {
            if(i > statuses.length -1 ) i = 0;
            this.client.user.setActivity(`${statuses[i].message}`, {type : `${statuses[i].type}`});
            i++;
        }, 300000);
    
    }
}
module.exports = Ready;
