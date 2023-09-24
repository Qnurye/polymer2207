'use client';
import { argbFromHex, themeFromSourceColor, hexFromArgb } from "@material/material-color-utilities";
import { TbStarFilled, TbQuote } from "react-icons/tb";
import Image, {StaticImageData} from "next/image";


interface CardParams {
    position : string,
    name : string,
    quotation : string,
    img: StaticImageData,
    colorHex ?: string,
    splitMark ?: boolean
}

export default function Card( { position, name, quotation, img, colorHex = "6F5675", splitMark = true } : CardParams ) {
    const theme = themeFromSourceColor(argbFromHex(colorHex), [
        {
            name: "card_theme",
            value: argbFromHex(colorHex),
            blend: true,
        },
    ]);
    return (<>
        <div className={`${splitMark ? "" : "hidden"} pl-16 pr-16 flex justify-center items-end gap-3 self-stretch`}
             style={{color: hexFromArgb(theme.schemes.light.primary)}}>
            <TbStarFilled /><TbStarFilled /><TbStarFilled />
        </div>
        <div className={`rounded-lg p-4 flex gap-3 self-stretch items-center mt-1 z-10`}
             style={{background: hexFromArgb(theme.schemes.light.surface)}}
        >
            <Image src={img} alt={name} className={`w-[7.8125rem] h-[12.125rem] rounded z-20 object-cover`}/>
            <div className="flex p-2 flex-col justify-between items-start flex-1 self-stretch z-20">
                <div className={`flex relative p-1 flex-col overflow-hidden items-start z-30`}>
                    <div className={`w-full h-5 absolute -l-1 bottom-0 z-30`}
                         style={{background: hexFromArgb(theme.schemes.light.primaryContainer)}}></div>
                    <span className="flex h-7 flex-col content-center self-stretch text-3xl font-sans z-40 font-bold"
                          style={{color: hexFromArgb(theme.schemes.light.onPrimaryContainer)}}>{position}</span>
                </div>
                <span className="self-stretch text-2xl z-30"
                      style={{color: hexFromArgb(theme.schemes.light.onSurface)}}>{name}</span>
                <div className="flex relative flex-col self-stretch p-1 pl-2 pr-2 g-8 rounded-lg"
                     style={{
                         background: hexFromArgb(theme.schemes.light.surfaceVariant),
                         color: hexFromArgb(theme.schemes.light.onSurfaceVariant)
                }}>
                    <span className="self-stretch">{quotation}</span>
                    <TbQuote className={"absolute -right-2 -top-4 text-3xl"} style={{color: hexFromArgb(theme.schemes.light.tertiary)}}/>
                </div>
            </div>
        </div>
    </>)
}
