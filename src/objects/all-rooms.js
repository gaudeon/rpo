import WadesTrailerLaundryRoom from './rooms/wades-trailer-laundry-room';
import WadesTrailerOutside from './rooms/wades-trailer-outside';

export default class AllRooms {
    constructor () {
        this._roomMap = {};

        this.roomList.forEach((room) => {
            this._roomMap[room.constructor.name] = room;
        });
    }

    get roomList () {
        return [
            new WadesTrailerLaundryRoom(),
            new WadesTrailerOutside()
        ];
    }

    get roomMap () { return this._roomMap; }
}
