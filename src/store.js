import { observable } from 'mobx';

export default class Store {
  @observable domainZonesChecker = [
    {name: '.com', isChecked: false},
    {name: '.ru', isChecked: true},
    {name: '.su', isChecked: true}
  ];

  @observable domainsState = [];

  dispatch(values) {
    this.updateDomains(values);
    this.fetchData();
  }

  updateDomains(data) {
    this.domainsState = [];
    const phrases = data.split(',');
    this.domainZonesChecker.forEach(zone => zone.isChecked ? phrases.forEach(phrase => this.domainsState.push({name: phrase.trim()+zone.name, available: null})) : null);
  }

  fetchData() {
    const myHeaders = new Headers();
    myHeaders.append("X-Mashape-Key", "szMTumFEGbmshkxupM5vr12ennkCp1DGwP9jsnlxJ65UntmCOr");
    
    const init = {
      method: 'GET',
      headers: myHeaders
    };
    
    // const url = `https://whois-v0.p.mashape.com/check?domain=$`
    const urls = this.domainsState.map(domain => `https://whois-v0.p.mashape.com/check?domain=${domain.name}`);
    
    const grabContent = url => fetch(url, init)
      .then(res => res.json())
      .then(data => {
        console.log(url.slice(44), data.available)
      })
      .then(domain => domain)
      .catch((error) => console.log(`Error: ${error}`) )
    
    Promise.all(urls.map(grabContent));
    // grabContent(urls);
  }

  updateZone(ndx) {
    this.domainZonesChecker[ndx].isChecked = !this.domainZonesChecker[ndx].isChecked;
  }

}