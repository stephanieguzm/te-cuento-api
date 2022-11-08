/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      id: 1,
      type: "green",
      name: "Tai Ping Hou Kui",
      img: "../../uploads/01_green.jpeg",
      origin: "Anhui, China",
      description: `Tai Ping Hou Kui literally means "peaceful monkey leader" and is grown at the foothill of Huangshan in the Anhui province. Its breathtaking elegantly long emerald leaves are hand-pressed, bringing forth a dry aroma of un-roasted chestnuts and light fruitiness. The liquor is light-bodied and delicate with nuances of nut, a touch of sweet grass, lily-of -the valley floral, and a whispery apricot note. The delicate floral and apricot notes linger nicely on the palate.`,
      brew_time: "2-3",
      temperature: 170,
      infusions: 7,
      caffeine_level: "medium",
      farmer: "Liang Yu Ming",
      farmer_img: "../../uploads/01_green_farmer.jpeg",
    },
    {
      id: 2,
      type: "green",
      name: "Meng Ding Mao Feng",
      img: "../../uploads/02_green.jpeg",
      origin: "Sichuan, China",
      description: `Meng Ding Mao Feng, or Misty Peak Downy Tip, offers curly, deep green tea leaves with strikingly bright, silvery leaf buds. Its dry aroma is that of hops and white grape, while the liquor is sweet, pear-like, crisp and lingering. The long small wiry leaves of this Meng Ding Mao Feng are very tightly rolled. When brewed they unfurl, allowing you to see the small buds and leaves. Delicate and delicious!`,
      brew_time: "2-3",
      temperature: 170,
      infusions: 7,
      caffeine_level: "medium",
      farmer: "Guo Yu",
      farmer_img: "../../uploads/01_green_farmer.jpeg",
    },
    {
      id: 3,
      type: "green",
      name: "Yun Wu",
      img: "../../uploads/03_green.jpeg",
      origin: "Zhejiang, China",
      description: `Cloud and Mist Tea, or Yun Wu in Mandarin, is harvested at high altitudes on Huaguo Mountain where the fog is thick, keeping the tea bushes hydrated and protected from the sun rays. Once processed, Yun Wu tends to have characteristically irregular twisted leaves, however, it has also been seen rolled up into small pellets or spiral shapes. Its unique growing conditions yield a layered cup with fruity notes and a very light smokiness.`,
      brew_time: "2-3",
      temperature: 170,
      infusions: 7,
      caffeine_level: "medium",
      farmer: "Zhao Bi Yun",
      farmer_img: "../../uploads/03_green_farmer.jpeg",
    },
    {
      id: 4,
      type: "oolong",
      name: "Traditional Yi Kuan Yin",
      img: "../../uploads/04_oolong.jpeg",
      origin: "Fujian, China",
      description: `This wulong strikes us as a bridge between roasted and green oolongs as it retains some floral notes, while the light roasting enhances the honey nuance. Tightly rolled Anxi grown leaf with a light roasting offers a cup that is soft with sweet honey-floral notes and a delicate flinty minerality. Nicely layered without being too overt.`,
      brew_time: "2-3",
      temperature: 195,
      infusions: 3,
      caffeine_level: 'medium',
      farmer: "He Ling",
      farmer_img:"../../uploads/04_oolong_farmer.jpeg",
    },
    {
      id: 5,
      type: "yellow",
      name: "Jun Shan Yin Zhen",
      img: "../../uploads/05_yellow.jpeg",
      origin: "Hunan, China",
      description: `From Junshan Island in the Hunan Province of China, this beautiful Jun Shan Yin Zhen yellow tea boasts very beautiful sage downy green and silvery buds. The dry aroma is melon and maybe a little muscatel. Cup is creamy, light and really looks like a nice Silver Needle, however, the cup also offers hints of toastiness and a soft muscat grape-like fruitiness. Very complex and layered. Just lovely.`,
      brew_time: "2-3",
      temperature: 170,
      infusions: 3,
      caffeine_level: "low",
      farmer: "Li Ai Hua",
      farmer_img:"../../uploads/05_yellow_farmer.jpeg",
    },
    {
      id: 6,
      type: "black",
      name: "Jin Kong Que",
      img: "../../uploads/06_black.jpeg",
      origin: "Yunnan, China",
      description: `Jin Kong Que is a remarkable tea handmade in the Yunnan Province of China. It has a rare ability to balance bold flavor without giving off bitterness. Its name, which translates to Golden Peacock, is as flashy as its namesake with fairly large, very golden leaves and leaf buds. The liquor does not disappoint as it boasts intricate notes of honey, toastiness, cocoa, and roasted sweet potato.`,
      brew_time: "2-3",
      temperature: 212,
      infusions: 3,
      caffeine_level: 'high',
      farmer: "Zhao Ji Lin",
      farmer_img:"../../uploads/06_black_farmer.jpeg",
    },
    {
      id: 7,
      type: "pu'erh",
      name: "Ancient Tree Green Puerh",
      img: "../../uploads/07_puerh.jpeg",
      origin: "Yunnan, China",
      description: `Yunnan ancient tea trees rarely cease to amaze and this offering is no exception. This sheng or 'raw' pu erh offers long, silvery buds and young leaves. The dry leaf aroma is of fruit and earth, while the infusion is medium-light amber. Very smooth with hints of honey, apricot, a soft sweet smoke. Layered and lingering.`,
      brew_time: "2-3",
      temperature: 195,
      infusions: 3,
      caffeine_level: "medium",
      farmer: "Xia Jun",
      farmer_img: "../../uploads/07_puerh_farmer.jpeg",
    },
    {
      id: 8,
      type: "black",
      name: "Qimen Caixia",
      img: "../../uploads/08_black.jpeg",
      origin: "Anhui, China",
      description: `Qimen Caixia or “Sunrise Keemun” is a unique black tea made from early spring leaves which are gently rolled to create a whole leaf tea. The semi wiry leaves do contain some tips as well. The dry aroma offers the classic Keemun orchid note. The cup itself is a medium-light bodied one that is delicate, sweet and complex with notes of orchid, honey and toast. While it is rather delicate, it presents a nuanced experience with a soft finish.`,
      brew_time: "2-3",
      temperature: 212,
      infusions: 3,
      caffeine_level: "high",
      farmer: "Zhao Li Li",
      farmer_img: "../../uploads/08_black_farmer.jpeg",
    },
    {
      id: 9,
      type: "white",
      name: "Bai Hao Yin Zhen",
      img: "../../uploads/09_white.jpeg",
      origin: "Fujian, China",
      description: `Made up of the youngest, fuzzy, plump buds, our Bai Hao Yin Zhen, otherwise known as Silver Needle, hails from the Fuding area of China. Its dry aroma is quite floral, and the leaves are a lovely silvery green. Once brewed the light honey-colored liquor offers flavor notes of honeydew, fresh sweet cucumber and a slight hint of mineral.`,
      brew_time: "2-3",
      temperature: 170,
      infusions: 3,
      caffeine_level: "low",
      farmer: "Zhang Xiao Han",
      farmer_img: "../../uploads/09_white_farmer.jpeg",
    },
  ]);
};
