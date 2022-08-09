export default function makeUrlCrrTime(from, to) {
    url = "https://transit.yahoo.co.jp/search/result?from=現在地&to=目的地&fromgid=&togid=";
    fratlon = from //Stringで来てほしい。ex)34.691829681396484,135.1936492919922
    tlatlon = to  // Stringで来てほしい。ex)34.691829681396484,135.1936492919922S
    return url + "&" + fratlon + ",&" + tlatlon;
}