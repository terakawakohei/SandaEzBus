export default function makeUrl(from, to, time) {
    const url = 'https://transit.yahoo.co.jp/search/result?from=現在地&to=目的地&fromgid=&togid=&flatlon=';
    // console.log(time)
    console.log(from, to)
    const yy = time.substring(0, 4)
    const mm = time.substring(5, 7)
    const dd = time.substring(8, 10)
    const hh = time.substring(11, 13)
    const min1 = time.substring(14, 15)
    const min2 = time.substring(15, 16)
    // console.log(yy + "-" + mm + "-" + dd + " " + hh + ":" + min1 + min2)
    return url + from + ",&tlatlon=" + to + "&y=" + yy + "&m=" + mm + "&d=" + dd + "&hh=" + hh + "&m1=" + min1 + "&m2=" + min2;
}