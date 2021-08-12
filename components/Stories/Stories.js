import StoryCard from "./StoryCard";
import { v4 as uuidv4 } from "uuid";

const stories = [
  {
    name: "Shekh Al Raihan",
    src:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t51.36329-10/p320x320/234492634_3127530884144630_6030941725552311321_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=ad6a45&_nc_eui2=AeH4x_XHBXQnsx035X9HLhvexLvp6jO1N4_Eu-nqM7U3j9Di36LVhX0UEAtGwhM3XgCpS_f2nzrFq9_jWVl2iUrn&_nc_ohc=DRpgX9f3k8kAX-qRzI2&_nc_ht=scontent.fdac41-1.fna&oh=3f62f84c34e69c755772e9276c194cd5&oe=61182142",
    profile: "https://www.facebook.com/rtralrayhan",
    avatar:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/160176167_4455944951099406_4069609551516178372_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=7206a8&_nc_eui2=AeFe3PmDdmPN6qDJDcC8XGZmr4rdqAA5G5uvit2oADkbmwsqhvWTQ2P4HoV_qBMxQulrl7W9JWT61lJe_XAAAH35&_nc_ohc=_PEv9dkaa7UAX8yya8H&_nc_ht=scontent.fdac41-1.fna&oh=e983200c15d99a1c444c72f437cefa88&oe=61364ECA",
  },
  {
    name: "Shafiqur Rahman Ayon",
    src:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-9/p320x320/228404269_10223559697913380_3963183884678147369_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=365331&_nc_eui2=AeHpf2GQRTLV1BjuDCkwTn-T3ow9_ocA5UHejD3-hwDlQUTkd61zavmunCMV2b1ffCkv9GtTU300Mmt6p42-g55X&_nc_ohc=4glzd7PAGiMAX_MOl9j&_nc_ht=scontent.fdac41-1.fna&oh=fffb46787c68543f61f0e186d751bbe6&oe=6139C91E",
    profile: "https://www.facebook.com/shafiqur.ayon",
    avatar:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/186476216_10223094198876195_2775086453362853072_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=7206a8&_nc_eui2=AeFoxPkwsQIJUqOTBe5KvuBzU2CErL2BljVTYISsvYGWNZ8Kc_fuJRbd_TOfQnRPEqM1hPuQvprVcfZuRsChRKve&_nc_ohc=YgZh3HM3EJMAX8y3WvU&_nc_ht=scontent.fdac41-1.fna&oh=33ae8c53ef6a503a73051460bcdc67fe&oe=6139A902",
  },
  {
    name: "Anam Ahmed",
    src:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-9/p320x320/231278383_4627241163954358_4056198691259871146_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=365331&_nc_eui2=AeGxpsQElTbMDl1L8U3RfoEY_8a7j_iSCC7_xruP-JIILsLESzvugEDGQRup73sgdeC_QT4sjXeJjF_Jx6Jj_tL5&_nc_ohc=0LHNPjflO5wAX-It5zs&_nc_ht=scontent.fdac41-1.fna&oh=91fcfad362c92aeecdc4c99904b5696b&oe=61392906",
    profile: "https://www.facebook.com/Theanam",
    avatar:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/87883196_3068348596510297_7131804550901530624_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=7206a8&_nc_eui2=AeH3kVwDgEFnyWcg30rulGYQpeHgWq7SxNyl4eBartLE3DYBA5RZIsw6_AD0jpgllrDBzM42JkpTWIGZ9d1zrqC3&_nc_ohc=SGM92URTwNEAX_vBfBx&_nc_ht=scontent.fdac41-1.fna&oh=63467e8f5bd7300b89bc5950b8724ad6&oe=6139B5F8",
  },
  {
    name: "Shekh Al Raihan",
    src:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t51.36329-10/p320x320/234492634_3127530884144630_6030941725552311321_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=ad6a45&_nc_eui2=AeH4x_XHBXQnsx035X9HLhvexLvp6jO1N4_Eu-nqM7U3j9Di36LVhX0UEAtGwhM3XgCpS_f2nzrFq9_jWVl2iUrn&_nc_ohc=DRpgX9f3k8kAX-qRzI2&_nc_ht=scontent.fdac41-1.fna&oh=3f62f84c34e69c755772e9276c194cd5&oe=61182142",
    profile: "https://www.facebook.com/rtralrayhan",
    avatar:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/160176167_4455944951099406_4069609551516178372_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=7206a8&_nc_eui2=AeFe3PmDdmPN6qDJDcC8XGZmr4rdqAA5G5uvit2oADkbmwsqhvWTQ2P4HoV_qBMxQulrl7W9JWT61lJe_XAAAH35&_nc_ohc=_PEv9dkaa7UAX8yya8H&_nc_ht=scontent.fdac41-1.fna&oh=e983200c15d99a1c444c72f437cefa88&oe=61364ECA",
  },
  {
    name: "Shafiqur Rahman Ayon",
    src:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-9/p320x320/228404269_10223559697913380_3963183884678147369_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=365331&_nc_eui2=AeHpf2GQRTLV1BjuDCkwTn-T3ow9_ocA5UHejD3-hwDlQUTkd61zavmunCMV2b1ffCkv9GtTU300Mmt6p42-g55X&_nc_ohc=4glzd7PAGiMAX_MOl9j&_nc_ht=scontent.fdac41-1.fna&oh=fffb46787c68543f61f0e186d751bbe6&oe=6139C91E",
    profile: "https://www.facebook.com/shafiqur.ayon",
    avatar:
      "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/186476216_10223094198876195_2775086453362853072_n.jpg?_nc_cat=107&ccb=1-4&_nc_sid=7206a8&_nc_eui2=AeFoxPkwsQIJUqOTBe5KvuBzU2CErL2BljVTYISsvYGWNZ8Kc_fuJRbd_TOfQnRPEqM1hPuQvprVcfZuRsChRKve&_nc_ohc=YgZh3HM3EJMAX8y3WvU&_nc_ht=scontent.fdac41-1.fna&oh=33ae8c53ef6a503a73051460bcdc67fe&oe=6139A902",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard key={uuidv4()} {...story} />
      ))}
    </div>
  );
}

export default Stories;
