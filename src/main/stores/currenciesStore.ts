import { observable, computed, action } from 'mobx';
import { IMoney } from '../../library/common/types/index';
import axios from 'axios';

class CurrenciesStore {
    @observable private items: IMoney[] = [];

    @computed
    get getItems() {
        return this.items;
    }

    @action
    setItems = (items: IMoney[]): void => {
        this.items = items;
    };

    @action
    fetchMoney = () => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({ data }) => {
            const money: IMoney[] = data.Data.map((mon: any) => {
                const obj: IMoney = {
                    name: mon.CoinInfo.Name,
                    fullName: mon.CoinInfo.FullName,
                    imageUrl: `https://www.cryptocompare.com${mon.CoinInfo.ImageUrl}`,
                    price: Math.round(mon.RAW.USD.VOLUME24HOUR),
                    volume24Hour: Math.round(mon.RAW.USD.VOLUME24HOUR),
                }
                return obj;
            })
            this.setItems(money);
        })
    }
}

export default CurrenciesStore;