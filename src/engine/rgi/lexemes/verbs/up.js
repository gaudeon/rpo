import Verb from '../verb';
import RunCommandAction from '../../../game-actions/run-command';

export default class UpVerb extends Verb {
    constructor () {
        super();

        this._word = 'up';

        this._aliases = ['u'];
    }

    actions (room, player, lexemePhrase) {
        super.actions(room, player, lexemePhrase);

        try {
            return room.commandUp();
        } catch (error) {
            return new RunCommandAction('error ' + error.message);
        }
    }

    helpText () {
        return super.helpText() + 'Move upward';
    }
}