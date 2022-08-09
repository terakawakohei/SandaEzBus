export default function makeUrlCrrTime(from, to) {
    const url = 'https://transit.yahoo.co.jp/search/result?from=現在地&to=目的地&fromgid=&togid=&flatlon=';
    return url + from + ",&tlatlon=" + to;
}