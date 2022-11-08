let commentsData = [ 
    {
      id: 1,
      tea_id: 1,
      user_name: 'Oscar',
      user_message: "I thought I didn't like this at first, but I realized that by brewing it at a lower temp (by bringing the water to 160 (my lowest setting) and doing a high pour) and brewing it for only 2 minutes, it eliminates the seaweed flavor, and leaves one with a nice delicate cup of tea."
    },
    {
      id: 2,
      tea_id: 1,
      user_name: 'Susy',
      user_message: "Beautifully light and lovely visually with the large leaf size. Was perfect to bring out with my friend who drinks fancier tea than I do in her day to day."
    },
    {
      id: 3,
      tea_id: 1,
      user_name: 'Carolina',
      user_message: "It's ok. Very delicate and I tend to prefer a bolder tea. Something with more taste. This is so mellow it's almost like water. But I loved the look of the tea! How neat to see these paper thin beautiful leaves. You can tell a lot of work went into it."
    },
    {
      id: 4,
      tea_id: 1,
      user_name: 'Mayra',
      user_message: "I was fascinated by the description of this tea and very pleased that I bought it and tried it. I made it in my clear glass teapot and loved seeing the leaves expand as they steeped. I forgot about the tea in the pot and when i went back, the color was darker and the tea was more delicious."
    },
    {
      id: 5,
      tea_id: 2,
      user_name: 'Mateo',
      user_message: "really unique green tea. it smells amazing with this grape pear aroma thing going on and the taste is rich and flavorful without any bad bitter notes."
    },
    {
      id: 6,
      tea_id: 2,
      user_name: 'Amelia',
      user_message: "Excellent fruity aroma and flavor. The aroma reminded me of wine. Glad I tried this! "
    },
    {
      id: 7,
      tea_id: 2,
      user_name: 'Hector',
      user_message: "Absolutely lovely tea! I got three very good infusions out of this tea, and each one had its own distinct character. The aroma has a hint of lychee, which really enhances the light sweet flavor."
    },
    {
      id: 8,
      tea_id: 3,
      user_name: 'Irma',
      user_message: "Lovely green tea! The tea leaves have a wonderful earthy aroma. Brewed, the tea is light with a nut-like, sweet taste. Not overly vegetal or grassy. Just a light, lovely tea!"
    },
    {
      id: 9,
      tea_id: 3,
      user_name: 'Greg',
      user_message: "One of my favorite green teas. It has the unmistakable green flavor, no bitterness when steeped correctly, and a light, smooth finish. ”"
    },
    {
      id: 10,
      tea_id: 3,
      user_name: 'Jorge',
      user_message: "Oh man, this is amazing. This may very well be my new favorite. It is exquisite, like drinking the essence of spring. At 3 minutes, there is absolutely no bitterness (I think I prefer 2 minutes, it is a perfect, delicate, pale green elixir). I was afraid to try it because I don't like smoky flavored tea at all. But I am getting zero smoke flavor. It's nutty, buttery, green, and fabulous!"
    },
    {
      id: 11,
      tea_id: 3,
      user_name: 'Gina',
      user_message: "A delightful light tea, perfect for our afternoon tea break. Pale yellow/gold in the cup, with no grassiness. A very light toasty smoky fruity treat. It is going on our reorder list for sure. No bitterness whatsoever."
    },
    {
      id: 12,
      tea_id: 4,
      user_name: 'Sara',
      user_message: "I love how this tea combines sweet herbal green notes with mineral earthy tones. It's like green tea meets a wuyi type oolong. It also has that roasty-toasty bit of malty taste in the background as well. 195F, 3 minutes. Lovely tea! "
    },
    {
      id: 13,
      tea_id: 4,
      user_name: 'Bruno',
      user_message: "The more I explore the Chinese green teas the more I love them. This is, perhaps, my new favorite. It is light, lush, and mildly floral with a soft, smooth mouth-feel. It has become my early morning gongfu favorite, starting at 15 seconds and increasing by the same for each additional steep. It also works well Western style for those hectic days."
    },
    {
      id: 14,
      tea_id: 4,
      user_name: 'Penelope',
      user_message: "Beautiful oolong with a slight mineral but smooth mouth feel. I get notes of cinnamon when I smell the dry leaves. When steeped, they open up and render a pale yellow liquor with a clean, delicate, mildly sweet flavor that holds up to multiple steeps and is perfect for gong fu brewing. Sip, sip away!"
    },
    {
      id: 15,
      tea_id: 4,
      user_name: 'Sofia',
      user_message: "These tightly rolled leaves brew into a rich green tea. The leaves expand and don't take much to make a flavorful cup."
    },
    {
      id: 16,
      tea_id: 5,
      user_name: 'Julia',
      user_message: "This is a lovely yellow tea, one of the special teas with reputed to be served to Emperors of yore. It has the depth of flavor of a green tea and softness of a white. The yellow tea process brings out the flavor of the leaf without grassiness. This one is best brewed gongfu style and has a subtle floral finish. "
    },
    {
      id: 17,
      tea_id: 5,
      user_name: 'Andres',
      user_message: "The first thing I noticed about Jun Shan Yin Zhen is how interesting the fuzzy, rounded leaves are! I brewed them hot and plain. It was a pleasant and very light cup. I thoroughly enjoyed it and would highly recommend this tea! "
    },
    {
      id: 18,
      tea_id: 5,
      user_name: 'Alek',
      user_message: "Delicate and sweet, the color of this tea is almost invisible when you first steep. However, pouring into the glass Fair cup reveals a yellow color that develops slightly as you sip a little at a time"
    },
    {
      id: 19,
      tea_id: 5,
      user_name: 'Mateo',
      user_message: "Very much like a white tea in it's subtle flavor and soft aroma, but close to green tea in flavor. For somebody like me who loves silver needle tea, this was quite special. Though, I d recommend it only to people who appreciate soft and subtle flavors, as if you don't like that sort of thing, you may just consider it 'weak'."
    },
    {
      id: 20,
      tea_id: 6,
      user_name: 'Miles',
      user_message: "A wonderful black tea from Yunnan Province. This is a smooth tea without any bitterness. I drank this gong fu style and was able to get a few steeps from this tea. I think the second steep was more flavorful, but I didn't get the cocoa/sweet potato flavor."
    },
    {
      id: 21,
      tea_id: 6,
      user_name: 'Carlos',
      user_message: "This was an excellent black that separates itself from others I have tasted. A great Yunnan black indeed! Kudos to the grower! A second steep for two minutes tasted just as fine as the first. No sugar needed."
    },
    {
      id:22,
      tea_id: 6,
      user_name: 'Sandy',
      user_message: "YUM!!! I was dying to try this one, and I snagged it soon as it came back. I will be ordering more, for sure! I accidentally steeped it longer than I usually do, and there was barely any astringency. The leaves are large, golden, and toasty. The scent is malty and enticing. Forefront in the taste I get malt and honey. Not getting any cocoa, and I'm not sure what sweet potato tastes like (haven't eaten in in forever) but that in the description grabbed me. I really, really like this tea; it's like a warm hug for my soul. :)"
    },
    {
      id: 23,
      tea_id: 6,
      user_name: 'Jason',
      user_message: "A good solid tea that has a lot of body and satisfying tea taste. It does boast of honey toastiness, cocoa, and roasted sweet potato. You will undoubtedly taste the toastiness and the sweet potato from the get go, but let it sit a minute or two and you will taste the fullness of the honey and cocoa. A true tea drinkers delight!"
    },
    {
      id: 24,
      tea_id: 7,
      user_name: 'Ryan',
      user_message: "Beautiful fresh long tea leaves with pretty whitish buds. I love puerh tea so I thought green raw puerh would be something different to try.The liquor was light amber. I really enjoyed this tea, it was the best of green and puerh tea. Mellow like a puerh if steeped at a lower temperature and shorter duration. It has a bit of a green tea astringency the longer it is steeped. Delicious western style and much more layered and complex gongfu style."
    },
    {
      id: 25,
      tea_id: 7,
      user_name: 'Josie',
      user_message: "I am a fan of Puerh so I was up to try a new one for me. This was just too green and astringent for me. This is more towards a green than a Puerh and would be fabulous for a green tea lover."
    },
    {
      id: 26,
      tea_id: 7,
      user_name: 'Bev',
      user_message: "Really enjoy this. Though it was a bit hard to figure out how much to use. It's very smooth and doesn't have a significant acidity which is nice. Added the matcha honey and pea flower to it"
    },
    {
      id: 27,
      tea_id: 7,
      user_name: 'Lupita',
      user_message: "The smell is really honey like, with a little bit of smoke and deeply complex. The leaves are long and reedy, so put it in a big cup or strainer. The tea is a pale amber. it starts off sweet, then becomes more full-bodied and smokey, but you don't forget this is a green tea."
    },
    {
      id: 28,
      tea_id: 8,
      user_name: 'Olivia',
      user_message: "Beautiful whole little twisted green leaves. The liquor is a nice amber color and the aroma is somewhat floral and earthy. I enjoyed the roasty toasty flavor of this tea and it had a hint of sweet floral on the finish. Really smooth tea, very nice."
    },
    {
      id: 29,
      tea_id: 8,
      user_name: 'Alex',
      user_message: "This has so far been on of my favorite black teas. Very robust with memorable tasting notes. It has a kick of spice that transitions into lasting mellow notes of warm honey. Will definitely purchase again if available."
    },
    {
      id: 30,
      tea_id: 8,
      user_name: 'Gabriel',
      user_message: "This tea is a really interesting tea. The honey notes really stick out. Its pretty perplexing, it definitely took a couple of glasses for me to finally make up my mind on it. Would definitely recommend."
    },
    {
      id: 31,
      tea_id: 8,
      user_name: 'Amelie',
      user_message: "This is an amazing tea! I definitely get the honey in nose and taste. I'm not sure what 'orchid' means because there are tens of thousands of species and the flowers range from bitter to sweet to vegetal."
    },
    {
      id: 32,
      tea_id: 9,
      user_name: 'Daniel',
      user_message: "The dry leaves don't smell like much, but that is deceptive. The brewed tea is light yet complex. The floral and straw notes are prominent, but the subtle notes of sweetness create a well-balanced, rounded cup. This tea is ideally suited to lingering over on a cool, grey day. I love silver needle white tea, and this is an outstanding example of silver needle."
    },
    {
      id: 33,
      tea_id: 9,
      user_name: 'Bruno',
      user_message: "A light tingly feeling of fresh hay was noted on my tongue when the tea was hot. When warm, tongue tingles were moderate. Fresh sweet corn flavors had a slightly milky taste. A fragrant mouthfeel and long-lasting lingering sweet aftertaste was noted. This was an excellent example of a gentle, smooth and light tasting Silver Needle white tea. A second steep for 2.5 minutes was even better in tastes, A pleasant astringency was noted on the rear inside of the cheeks, just like a fine nice white wine."
    },
    {
      id: 34,
      tea_id: 9,
      user_name: "Victoria",
      user_message: "Silver Needle is one of my favorite teas (it's so delicate and delicious!), and I definitely enjoyed this, though it perhaps wasn't the best Silver Needle I've ever had. I used a gaiwan to steep the leaves multiple times."
    }
]