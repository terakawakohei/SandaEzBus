export default function makeUrlCrrTime(from, to) {
    const url = 'https://transit.yahoo.co.jp/search/result?from=現在地&to=目的地&fromgid=&togid=&flatlon=';
    console.log(from, to)
    return url + from + ",&tlatlon=" + to + "&al=0&shin=0&ex=0&hb=1&lb=1&sr=0";
}