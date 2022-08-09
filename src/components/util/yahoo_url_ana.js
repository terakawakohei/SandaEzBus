export default function makeUrlCrrTime(from, to) {
    const url = 'https://transit.yahoo.co.jp/search/result?from=現在地&to=目的地&fromgid=&togid=&flatlon=';
    
    // console.log(to)
//  '34.691829681396484,135.1936492919922' ',&tlatlon=' 34.321829681396484,135.1936492919922'

    return url + from + ",&tlatlon=" + to;
}