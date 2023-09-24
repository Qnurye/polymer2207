'use client';

import Card from "@/app/articles/committees/card";
import xz from './images/徐振.jpg';
import czt from './images/曹子腾.jpg';
import whl from './images/武慧琳.jpg';
import lwj from './images/罗文杰.jpg';
import dhr from './images/丁浩然.jpg';
import djf from './images/段建飞.jpg';
import lhw from './images/楼翰文.jpg';
import lzw from './images/李泽文.jpg';

export default function page() {
    return (
        <div className={"pt-16 pl-4 pr-4"}>
            <span>无人爱苦，亦无人寻之欲之，乃因其苦...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper neque sit amet iaculis sagittis. Sed facilisis ipsum vitae rhoncus lacinia. Sed eu magna nulla. Duis ultricies sollicitudin tortor ut bibendum. Proin sit amet enim vitae ligula gravida scelerisque quis ac ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque volutpat odio nunc, sed pulvinar nulla posuere in. Duis lacus libero, fermentum ac scelerisque ac, ultricies nec dolor. Nam ut sodales velit. Donec non molestie libero. Suspendiss</span>
            <Card name={"徐振"}
                  position={"班长"}
                  quotation={"给时光以生命，而不是给生命以时光。"}
                  img={xz}
                  colorHex={"#c30032"}
            />
            <Card name={"曹子腾"}
                  position={"团支部书记"}
                  quotation={"看见世界、面对危险、跨越藩篱、贴近彼此、感受生活，这就是生活的目的。"}
                  img={czt}
                  colorHex={"#a47700"}
            />
            <Card name={"武慧琳"}
                  position={"组织委员"}
                  quotation={"好好学习，天天向上。经典永不过时。"}
                  img={whl}
                  colorHex={"#be0065"}
            />
            <Card name={"罗文杰"}
                  position={"宣传委员"}
                  quotation={"看见世界、面对危险、跨越藩篱、贴近彼此、感受生活，这就是生活的目的。"}
                  img={lwj}
                  colorHex={"#526900"}
            />
            <Card name={"丁浩然"}
                  position={"生活委员"}
                  quotation={"响应时代号召，追求高效节能生活，踢球，coc找我。"}
                  img={dhr}
                  colorHex={"#00702d"}
            />
            <Card name={"段建飞"}
                  position={"心理委员"}
                  quotation={"少年驰骋时的风比黄金都贵，勇敢的人先享受世界。"}
                  img={djf}
                  colorHex={"#0060ba"}
            />
            <Card name={"楼翰文"}
                  position={"学习委员"}
                  quotation={"想要蝴蝶，别去追它，要去种花。"}
                  img={lhw}
                  colorHex={"#8c5300"}
            />
            <Card name={"李泽文"}
                  position={"文体委员"}
                  quotation={"我要有能做我自己的自由，和敢做我自己的胆量。"}
                  img={lzw}
                  colorHex={"#006f50"}
            />
            <span>无人爱苦，亦无人寻之欲之，乃因其苦...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper neque sit amet iaculis sagittis. Sed facilisis ipsum vitae rhoncus lacinia. Sed eu magna nulla. Duis ultricies sollicitudin tortor ut bibendum. Proin sit amet enim vitae ligula gravida scelerisque quis ac ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque volutpat odio nunc, sed pulvinar nulla posuere in. Duis lacus libero, fermentum ac scelerisque ac, ultricies nec dolor. Nam ut sodales velit. Donec non molestie libero. Suspendiss</span>
        </div>
    );
}
