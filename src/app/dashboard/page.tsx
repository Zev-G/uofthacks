import '@/app/retro.css'
import '@/app/main.css'
import GroupChatSegment from '@/components/GroupChatSegment';
import GroupChat from '@/lib/GroupChat';
import GroupChatCard from '@/components/GroupChatCard';

export default function Dashboard() {

    const gc = GroupChat.fromExport(lol);


    return (
        <main>
            <div className="flex flex-col p-10 w-screen h-screen space-y-10">
                <div>
                    <h1 className="retro-text text-5xl font-mono">
                        Welcome [NAME] to [APP NAME]
                    </h1>
                </div>
                <div className='flex justify-evenly space-x-10'>
                    <div className='flex w-1/2 flex-col items-center space-y-5 p-5'>
                        <div>
                            <h1 className='text-2xl font-mono'>Groupchats</h1>
                        </div>
                        <div className='items-center space-y-5 w-full'>
                            <div className='w-full'>
                                <GroupChatCard groupChat={gc} />
                            </div>
                            <div className='w-full'>
                                <GroupChatCard groupChat={gc} />
                            </div>
                            <div className='w-full'>
                                <GroupChatCard groupChat={gc} />
                            </div>
                            <div className='w-full'>
                                <GroupChatCard groupChat={gc} />
                            </div>
                            <div className='w-full'>
                                <GroupChatCard groupChat={gc} />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/2 flex-col items-center space-y-5 p-5'>
                        <div>
                            <h1 className='text-2xl font-mono'>Saved Moments</h1>
                        </div>
                        <div className='items-center max-h-[70vh] pt-1 pr-5 pl-2 nice-vertical-scroll flex flex-col space-y-10'>
                            <div className='w-full'>
                                <GroupChatSegment groupChat={gc} start={0} end={10} showSave={false} title='Those first moments'/>
                            </div>
                            <div className='w-full'>
                                <GroupChatSegment groupChat={gc} start={0} end={10} showSave={false} title='Those first moments'/>
                            </div>
                            <div className='w-full'>
                                <GroupChatSegment groupChat={gc} start={0} end={10} showSave={false} title='Those first moments'/>
                            </div>
                            <div className='w-full'>
                                <GroupChatSegment groupChat={gc} start={0} end={10} showSave={false} title='Those first moments'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

const lol = `[2023-05-02, 5:45:08 PM] Tzevet 2023 & ME 🧬👩‍🔬🌀: Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
[2023-05-02, 5:45:08 PM] ~ Hilla Kabazo: ~ Hilla Kabazo created group “Tzevet 2023 & ME 🧬👩‍🔬🌀”
[2023-05-02, 5:45:09 PM] Tzevet 2023 & ME 🧬👩‍🔬🌀: ~ Hilla Kabazo added you
[2023-05-02, 5:46:54 PM] ~ Noga Goldman: Hey Tzevet 2023!
Welcome to the main tzevet (staff) group chat! Leading up to the summer there will be some announcements here and it is also a place for you all to send questions/thoughts/excitements leading up to camp. We are so excited 🥳🥳 camp is only 7 weeks away 🌄 eeeeeeekkk 🐳🌲🌞🌈
[2023-05-02, 6:00:11 PM] ~ Hilla Kabazo: image omitted
[2023-05-07, 6:26:53 PM] ~ lily cohen: ~ Noga Goldman added ~ lily cohen
[2023-05-09, 1:21:59 AM] ~ oli: ~ oli joined using this group's invite link
[2023-05-09, 6:40:42 PM] ~ Hilla Kabazo: Hey tzevet! Please remember to RSVP to the potluck next week! Looking forward to seeing all of you 🥳🥳
[2023-05-12, 7:46:23 PM] ~ Eli: ~ Gal Icek added ~ Eli
[2023-05-17, 12:33:27 AM] ~ Hilla Kabazo: image omitted
[2023-05-17, 12:33:28 AM] ~ Hilla Kabazo: image omitted
[2023-05-17, 12:33:28 AM] ~ Hilla Kabazo: image omitted
[2023-05-17, 1:19:13 AM] Tyler: Dibs
[2023-05-18, 10:28:58 PM] ~ Ilana Sela: Hi everyone! We’re thinking of running a tiyul & tiyul training weekend for tzevet on June 10-11th. It will be SO much fun. Please answer this poll to let us know if it’s something people are interested in, and we’ll send more information!
[2023-05-18, 10:29:04 PM] ~ Oliver: POLL:
Can you make it to tzevet tiyul?
OPTION: Yes! Let’s get some skills in! (5 votes)
OPTION: Noooo I can’t make it :( (25 votes)
[2023-05-20, 8:29:03 PM] Rafi: image omitted
[2023-05-20, 10:27:39 PM] ~ Hilla Kabazo: So true
[2023-05-21, 12:25:05 AM] Cate: Leah levi said the same thing when I saw her at asher and samaras b'nai mitzvah
[2023-05-22, 5:02:20 PM] ~ Sadie Quinn: image omitted
[2023-05-22, 5:03:00 PM] ~ Hilla Kabazo: I have a list!
[2023-05-22, 5:03:32 PM] ~ Sadie Quinn: Yay! It would be great if you could share it
[2023-05-23, 4:33:30 PM] ~ Gavriella TroperHochstein: does anyone have a favorite text about trusting others?
[2023-05-23, 6:30:27 PM] ~ Noga Goldman: image omitted
[2023-05-23, 6:30:27 PM] ~ Noga Goldman: image omitted
[2023-05-23, 6:30:28 PM] ~ Noga Goldman: image omitted
[2023-05-23, 6:30:28 PM] ~ Noga Goldman: image omitted
[2023-05-23, 6:30:28 PM] ~ Noga Goldman: image omitted
[2023-05-23, 6:30:29 PM] ~ Noga Goldman: image omitted
[2023-05-26, 7:06:06 PM] ~ India: image omitted
[2023-05-26, 7:06:09 PM] ~ India: be jealous
[2023-05-26, 7:06:27 PM] ~ India: image omitted
[2023-05-29, 12:20:52 AM] ~ Hilla Kabazo: If you haven’t done a machaneh Monday for the Instagram this year, please text me if you want to do one 🥰
[2023-05-29, 5:53:28 AM] ~ Jackson Nozick: yo i haven’t done one yet
[2023-05-29, 3:35:36 PM] ~ Jackson Nozick: ok i did it
[2023-06-01, 2:22:02 PM] Tzevet 2023 & ME 🧬👩‍🔬🌀: ~ Noga Goldman added ~ Lily, ~ Roie Bargil, and 2 others. Tap to see all.
[2023-06-11, 10:03:11 PM] ~ Noga Goldman: image omitted
[2023-06-11, 10:03:55 PM] ~ Noga Goldman: T-minus 8 days!! Eeeek!!
[2023-06-12, 12:05:26 AM] ~ Ariella Smith-Eidelman: If anyone has an old camera they don’t want anymore let me know :)
[2023-06-12, 12:13:24 AM] ~ Ariella Smith-Eidelman: Specifically one that can film videos
[2023-06-12, 12:41:03 PM] ~ Mica: Does anyone have haircut recommendations in Vancouver?? I don’t need anything fancy and don’t want to pay a lot of $$ <This message was edited>
[2023-06-12, 12:42:09 PM] Rory Hanna-Ryant: Magic cuts on Fraser and 41st is super cheap
[2023-06-12, 12:42:15 PM] Rafi: Aliyas Beauty Centre
[2023-06-12, 12:42:24 PM] Rory Hanna-Ryant: Not the fanciest or the best quality but good price
[2023-06-12, 12:42:25 PM] Rafi: Very good haircuts for not that much money
[2023-06-12, 1:25:24 PM] ~ mai: true
[2023-06-14, 2:08:54 PM] ~ Gavriella TroperHochstein: MICA HATES LOVE EVERYBODY
[2023-06-14, 2:08:58 PM] ~ Gavriella TroperHochstein: SPREAD THE WORD!!!
[2023-06-14, 2:10:44 PM] ~ India: first lore of the summaaaa🤭
[2023-06-14, 2:30:04 PM] Rory Hanna-Ryant: How can you hate love???? They are opposites!!!!!
[2023-06-14, 2:30:28 PM] ~ Gavriella TroperHochstein: gotta ask mica, she found a way
[2023-06-14, 3:41:20 PM] ~ Noga Goldman: If you arent coming to camp committee dinner on sunday night please text me! Trying to figure out numbers
[2023-06-14, 6:30:31 PM] ~ Ariella Smith-Eidelman: If anyone has any old phones (smartphones) they want to donate to machaneh please text me !!
[2023-06-14, 9:09:09 PM] ~ Gavriella TroperHochstein: Hello tzevet! If you are a second year tzevet member or older, then the time has come for you to take on the glorious mantle of mentorship and become a YOETZ!!! Yoetzimot are tzevet mentors for madatz (aka noetzimot)! It is an incredibly fun, easy, and meaningful tafkid. If you want to know more about what this looks like, check your email! If you are interested PLEASE fill out this form by June19th!!
https://docs.google.com/forms/d/e/1FAIpQLSfeQauTITK7MS8jaesAhEYL1iQN_xKxqDQpWC4jGS_241JkAA/viewform?usp=sf_link
[2023-06-15, 7:59:30 PM] ~ Gavriella TroperHochstein: MICA LOVES VOTER SUPRESSSION SPREAD THE WORD!!!
[2023-06-15, 8:00:07 PM] ~ Gavriella TroperHochstein: Also if you haven’t signed up to be a yoetz you have t-4 days and YOU SHOULD DO IT!!!
[2023-06-15, 8:00:30 PM] ~ Mica: these are rumors don't believe the hates
[2023-06-15, 8:00:36 PM] ~ Mica: haters
[2023-06-15, 8:00:53 PM] ~ Zevi: As Tony the Tiger once told me, "It's gonna be gggggRRRRRREAAT!!!"
[2023-06-15, 8:01:31 PM] ~ ➕Ziv Mergui✖️: Haters gonna say it's fake.
[2023-06-16, 12:50:57 AM] ~ Noga Goldman: Reminder about this! Its really important that you tell me if you arent attending!
[2023-06-16, 12:51:43 AM] ~ Alex (shmeppy): i am not coming😞
[2023-06-16, 12:55:54 AM] ~ Zachary Bunim: me neither :(
[2023-06-16, 1:00:41 AM] ~ Noga Goldman: Also, if you have major dietary restrictions that arent vegan, gf, vegetarian, dairy free also let me know so that we can get you other foods!
[2023-06-16, 1:23:01 AM] ~ Noga Goldman: Dont assume that I know that you arent coming based on where you live! Let me know just in case ☺️
[2023-06-16, 2:38:44 AM] ~ Theo: hello victorian here, i will not be coming.. i made said assumption, apologies
[2023-06-16, 6:52:16 AM] ~ karly: Hi! I sadly can't come:((
[2023-06-16, 11:51:18 AM] Ron: ~ Noga Goldman added Ron
[2023-06-16, 2:41:51 PM] Rue: Hello tzevet! If you are working on tzevet during first session please fill out the va'adot form ASAP or I will assign you to va'ad dump. This is the form: https://forms.gle/BHcRDCB9XtZpHVnC9
[2023-06-16, 2:42:49 PM] ~ Hilla Kabazo: Isn't that what Meital was on last summer?
[2023-06-16, 2:43:23 PM] Tyler: I will not b there
[2023-06-17, 1:34:33 AM] Omer: I cant come either :(
[2023-06-18, 1:13:15 AM] ~ Ariella Smith-Eidelman: Hi everyone !! The location of the CC dinner has changed tmrw night to Peretz. The address is 6184 Ash St, Vancouver, BC !! So excited to see you all tmrw :)
[2023-06-18, 4:52:01 AM] ~ Hilla Kabazo: image omitted
[2023-06-18, 10:20:11 AM] ~ hannah: hi guys if anyone is in the area i’m in need of a ride to the jamboree, at the abercorn hotel in richmond. my debit card isn’t working for transit lol
[2023-06-18, 11:01:41 AM] Rory Hanna-Ryant: I don’t think I can come to the dinner but I’ll have to see
[2023-06-18, 3:07:38 PM] ~ Ariella Smith-Eidelman: image omitted
[2023-06-18, 3:08:03 PM] ~ Noga Goldman: image omitted
[2023-06-18, 4:41:42 PM] ~ Ariella Smith-Eidelman: image omitted
[2023-06-18, 4:47:49 PM] ~ Talia Joffe: Happy Jewish family
[2023-06-18, 7:40:30 PM] ~ Lila: mairav doesn’t wash her feet
[2023-06-18, 7:40:53 PM] ~ Jackson Nozick: Like ever???
[2023-06-18, 7:41:18 PM] ~ Lila: NEVER
[2023-06-18, 7:48:07 PM] ~ Ana: This is the most ideal camp to go to then 😄
[2023-06-18, 8:01:16 PM] ~ mai: I am being slandered
[2023-06-18, 8:04:45 PM] ~ Oliver: Can confirm
[2023-06-18, 10:02:27 PM] ~ mai: anyways….
[2023-06-18, 10:02:38 PM] ~ mai: image omitted
[2023-06-18, 10:03:08 PM] ~ mai: image omitted
[2023-06-18, 10:03:08 PM] ~ mai: image omitted
[2023-06-18, 10:03:08 PM] ~ mai: image omitted
[2023-06-18, 10:03:09 PM] ~ mai: image omitted
[2023-06-18, 10:03:09 PM] ~ mai: image omitted
[2023-06-18, 10:03:10 PM] ~ mai: image omitted
[2023-06-18, 10:03:10 PM] ~ mai: image omitted
[2023-06-19, 11:33:19 AM] ~ Maayan: image omitted
[2023-06-19, 11:59:56 AM] ~ Tal Fisher-Taylor: Why do many dead birds in Vancouver?
[2023-06-19, 12:09:33 PM] ~ maya: at least five
[2023-06-19, 2:33:33 PM] ~ Mica: If anyone went into the village can u please take on the mission of finding some soy sauce packets
[2023-06-19, 2:33:35 PM] ~ Mica: Xoxo
[2023-06-19, 5:37:20 PM] ~ Noga Goldman: image omitted
[2023-06-19, 5:37:25 PM] ~ Noga Goldman: image omitted
[2023-06-19, 5:37:25 PM] ~ Noga Goldman: image omitted
[2023-06-19, 5:37:27 PM] ~ Noga Goldman: image omitted
[2023-06-19, 5:37:27 PM] ~ Noga Goldman: image omitted
[2023-06-19, 5:37:59 PM] Rory Hanna-Ryant: Sleep cam!
[2023-06-19, 5:38:23 PM] ~ Gavriella TroperHochstein: image omitted
[2023-06-19, 9:15:20 PM] ~ Gal Icek: Aruchat erev be 7 bachadar
[2023-06-19, 9:36:07 PM] Ezra: GIF omitted
[2023-06-19, 10:55:21 PM] ~ Gavriella TroperHochstein: techni wifi password: weLOVE69
[2023-06-19, 10:55:35 PM] ~ Noa Franklin: Facts
[2023-06-19, 10:55:40 PM] ~ Gavriella TroperHochstein: chadar wifi password: spidermanSUMMER23
[2023-06-20, 1:05:48 AM] ~ Prielle Laniado: video omitted
[2023-06-20, 1:08:58 AM] ~ Shani Avrahami Saraf: #thatsmytechni
[2023-06-20, 1:09:12 AM] Gali Goldman: Major fomo
[2023-06-20, 1:17:19 AM] ~ נועה🌸: video omitted
[2023-06-20, 1:20:52 AM] ~ Hilla Kabazo: Not the mbi hoodie
[2023-06-20, 1:48:56 PM] ~ lily cohen: image omitted
[2023-06-20, 2:37:12 PM] ~ Theo: image omitted
[2023-06-20, 10:50:03 PM] Ezra: Kima tmr is at 8:30!!!
Breaky at 9!!
Also, there will be a scheduled power outage tmr from 9:30 to 4:30. So charge your phones and poop early.
[2023-06-21, 12:04:33 AM] ~ Ariella Smith-Eidelman: Also tmrw is a shower day so you are able to shower before or after programming tmrw! Please try and do this in groups or take short showers (5 mins). If you want to shower not in a group for any reason please shower in the downstairs of the mirp or the gender neutral showers in the uppers. DONT USE THE MAIN SHOWERS IF YOU ARE SHOWERING BEFORE PROGRAMMING ONLY AFTER. If you have any questions please let me know :)
[2023-06-21, 12:44:09 AM] ~ agustina: when is programmin over
[2023-06-21, 2:10:40 AM] ~ Mica: Do we have borax
[2023-06-21, 2:11:14 AM] Ezra: Yes, top shelf in thr techni
[2023-06-21, 2:11:50 AM] ~ Gavriella TroperHochstein: If you’re the last one in the binyan tonight make sure you turn off the lights!
[2023-06-21, 2:13:02 AM] ~ Mica: Slay
[2023-06-21, 2:18:45 AM] ~ Shelly Kositsky: What is the bayit wifi password? Its the only network that reaches me from my bed lol
[2023-06-21, 11:49:18 AM] ~ Ariella Smith-Eidelman: Contract.pdf • 5 pages document omitted
[2023-06-21, 12:24:48 PM] ~ Kiran: ~ Noga Goldman added ~ Kiran
[2023-06-21, 12:58:00 PM] ~ Prielle Laniado: image omitted
[2023-06-21, 12:58:32 PM] ~ Uri Oberlander: so beautiful!
[2023-06-21, 12:58:53 PM] Rafi: Now that’s machaneh magic
[2023-06-21, 1:19:57 PM] ~ Ariella Smith-Eidelman: Ofer is gonna go driving tmrw so if you need anything for something you may be running until the end of Sunday please put in order forms by tonight!! We are not doing kupa orders unless it's urgent and you speak to me about it before putting in the order form!
[2023-06-21, 1:48:54 PM] ~ Zevi: image omitted
[2023-06-21, 1:49:16 PM] ~ Mica: thats théo's
[2023-06-21, 1:57:02 PM] ~ Jackson Nozick: image omitted
[2023-06-21, 2:43:09 PM] ~ Theo: i forgor teehee
[2023-06-21, 2:46:59 PM] ~ Gal Icek: This message was deleted.
[2023-06-21, 2:47:16 PM] ~ Gal Icek: This will be the group chat for hodaot from now on
[2023-06-21, 2:47:37 PM] ~ Gal Icek: Please join asap
[2023-06-21, 2:47:49 PM] ~ agustina: link doesnt work
[2023-06-21, 2:48:03 PM] ~ Theo: could not load. please try again 😢
[2023-06-21, 2:48:22 PM] ~ Lila: it’s not loading
[2023-06-21, 2:48:27 PM] ~ Ariella Smith-Eidelman: Follow this link to join my WhatsApp group: https://chat.whatsapp.com/LR03gL7IEe61jAz2u4bOKX
[2023-06-21, 2:48:29 PM] ~ Gal Icek: Ok just a minute
[2023-06-21, 2:48:31 PM] ~ Ariella Smith-Eidelman: does this work?
[2023-06-21, 2:48:45 PM] ~ Theo: yep
[2023-06-21, 2:48:48 PM] ~ Theo: that one’s good
[2023-06-21, 2:48:50 PM] ~ Jane: yasss
[2023-06-21, 2:48:51 PM] ~ Lila: yep
[2023-06-21, 3:23:21 PM] ~ agustina: image omitted
[2023-06-21, 3:25:04 PM] ~ Alex (shmeppy): i didn’t know y’all were chill like that
[2023-06-21, 3:27:11 PM] ~ oli: video omitted
[2023-06-21, 7:30:58 PM] ~ Mica: image omitted
[2023-06-21, 7:36:18 PM] ~ eli gerut: image omitted
[2023-06-21, 8:00:30 PM] ~ hannah: if anyone has eyes on a currently unused mirror and/or some grout lmk 🦅
[2023-06-21, 8:09:44 PM] ~ Noga Goldman: https://docs.google.com/forms/d/1QXu6IH0Iib2_p-N8v5Z_RIu75ufepGYB2KttRNiF8uY/viewform?ts=64934448&edit_requested=true
[2023-06-21, 8:21:03 PM] Ezra: image omitted
[2023-06-21, 8:21:08 PM] Ezra: In the mains
[2023-06-21, 8:21:22 PM] ~ Mikal Stein: I see👍👍👍
[2023-06-21, 8:21:26 PM] Rafi: Ezra why are u sending shower pics
[2023-06-21, 8:21:35 PM] ~ Lila: looks hot!
[2023-06-21, 8:21:36 PM] Rafi: 👀👀
[2023-06-21, 8:21:42 PM] ~ mai: Check uppers!
[2023-06-21, 8:21:51 PM] Rafi: Water looks boiling
[2023-06-21, 8:36:29 PM] ~ Jane: image omitted
[2023-06-21, 8:36:37 PM] ~ Jane: mikal misplaced her head
[2023-06-21, 8:36:53 PM] ~ Gavriella TroperHochstein: what did you do to Mikal Jane???
[2023-06-21, 8:37:00 PM] ~ Jane: I got mad
[2023-06-21, 8:37:13 PM] ~ Gavriella TroperHochstein: violence is NOT the answer
[2023-06-21, 8:37:15 PM] ~ Jane: #notmykesher
[2023-06-21, 8:49:19 PM] ~ Ana: Yalllaaa
[2023-06-21, 10:48:17 PM] ~ Gavriella TroperHochstein: heehee Ezra and Ariella will neeveeerrr find meeee
[2023-06-21, 10:48:46 PM] ~ Theo: sameeee heheheheheh
[2023-06-21, 10:52:18 PM] Yvonne: image omitted
[2023-06-21, 10:52:52 PM] ~ Gavriella TroperHochstein: real monsters have the best hiding spots
[2023-06-21, 10:56:56 PM] ~ ➕Ziv Mergui✖️: image omitted
[2023-06-21, 10:56:56 PM] ~ ➕Ziv Mergui✖️: image omitted
[2023-06-21, 10:57:27 PM] ~ ➕Ziv Mergui✖️: video omitted
[2023-06-21, 10:57:59 PM] ~ Gavriella TroperHochstein: image omitted
[2023-06-21, 11:25:12 PM] ~ Ariella Smith-Eidelman: Come back
[2023-06-22, 12:00:51 AM] ~ Mikal Stein: Bring flashlights to the chevrati!!!!🔦🙀🙀👻👻
[2023-06-22, 12:01:58 AM] ~ Theo: image omitted
[2023-06-22, 12:08:39 AM] ~ Mikal Stein: Extremely essential btw👍👍
[2023-06-22, 12:09:17 AM] Yvonne: What about phone flash light
[2023-06-22, 1:43:15 AM] ~ Lila: prielle india and i are showering rn if anyone wants to squad up 💪👩‍🎤
[2023-06-22, 1:47:17 AM] ~ India: ahhhh
[2023-06-22, 2:21:42 AM] Shir: when is kima& breakfast tomorrow?
[2023-06-22, 2:23:43 AM] ~ Ariella Smith-Eidelman: Kima is 8:30 and breakfast is 9
[2023-06-22, 2:27:31 AM] ~ mai: Swimming at 8 am at the chof!welcome to anyone and everyone!!!
[2023-06-22, 2:27:54 AM] Rafi: I’ll be there
[2023-06-22, 2:28:04 AM] ~ mai: Everyone except rafi
[2023-06-22, 2:28:12 AM] Rafi: Hopping on the ferry rn
[2023-06-22, 1:44:00 PM] ~ Theo: image omitted
[2023-06-22, 1:56:27 PM] ~ Maayan: This message was deleted.
[2023-06-22, 1:58:39 PM] ~ Gal Icek: 11:30
[2023-06-22, 2:26:40 PM] ~ Lila: video omitted
[2023-06-22, 2:27:37 PM] ~ Lila: everyone has to come to every chevrati now
[2023-06-22, 2:34:30 PM] ~ Talia Joffe: image omitted
[2023-06-22, 2:35:58 PM] Rue: However that does not mean you should consume mold killer to get rid of your HIV
[2023-06-22, 2:37:25 PM] Tyler: 2 late …..
[2023-06-22, 3:21:27 PM] ~ Oliver: PSA: DO NOT for any reason use items from the grofit without express permission from Ezra, ilana, or myself. *never ever ever go into the rat proof storage in the grofit unless given permission from these same.*
[2023-06-22, 3:50:50 PM] ~ Gal Icek: https://drive.google.com/drive/folders/1LRz7-vt8ky1XQ_uRLcDwdn5UKEqI7Pbq
[2023-06-22, 5:20:40 PM] ~ hannah: if anyone wants me 2 let me crochet them something/do some embroidery on their clothing text me!!!
[2023-06-22, 5:22:19 PM] ~ hannah: (monetary compensation or barter are both options)
[2023-06-22, 6:10:44 PM] ~ Talia Joffe: image omitted
[2023-06-22, 7:51:03 PM] ~ Shelly Kositsky: audio omitted
[2023-06-22, 7:51:31 PM] ~ Shelly Kositsky: Some mitbach asmr from breakfast this morning
[2023-06-22, 10:03:24 PM] ~ India: ~ India changed their phone number to a new number. Tap to message or add the new number.
[2023-06-22, 11:57:51 PM] India: hella people are already at the chof so people who aren’t at the chof yet, come to the chofff
[2023-06-22, 11:58:06 PM] ~ Ariella Smith-Eidelman: Wait
[2023-06-22, 11:58:15 PM] ~ Ariella Smith-Eidelman: This message was deleted.
[2023-06-22, 11:58:42 PM] ~ Ariella Smith-Eidelman: Be at the madregot in 2 mins
[2023-06-22, 11:59:33 PM] India: video omitted
[2023-06-23, 12:00:29 AM] ~ Alex (shmeppy): india is my spirit animal btw
[2023-06-23, 12:02:45 AM] ~ Ariella Smith-Eidelman: Ok everyone who isn’t on the chof please come to the lower kvish rn
[2023-06-23, 12:13:22 AM] ~ Noga Goldman: image omitted
[2023-06-23, 12:13:29 AM] ~ Noga Goldman: image omitted
[2023-06-23, 12:43:20 AM] India: ur my spirit animal
[2023-06-23, 1:09:42 AM] ~ hannah: forgot my water bottle on the chof if someone could grab it 🏌️‍♀️
[2023-06-23, 2:34:44 AM] ~ Ariella Smith-Eidelman: Kima is at 8:30 tmrw
[2023-06-23, 11:44:27 AM] ~ Maisie: image omitted
[2023-06-23, 11:44:49 AM] ~ Alex (shmeppy): classic Maisie
[2023-06-23, 11:46:58 AM] ~ Maisie: This message was deleted.
[2023-06-23, 11:47:22 AM] ~ Maisie: This message was deleted.
[2023-06-23, 11:48:04 AM] ~ Maisie: This message was deleted.
[2023-06-23, 12:08:48 PM] ~ eli gerut: image omitted
[2023-06-23, 12:09:07 PM] Gali Goldman: Queen Maia 👑
[2023-06-23, 12:23:39 PM] ~ hannah: if anyone has a dream they remember that they would like 2 contribute 2 dream journal box it is officially on the fireplace
[2023-06-23, 12:24:01 PM] ~ hannah: 🚨🚨IT WILL BE ZINE-IFIED 🚨🚨
[2023-06-23, 12:24:30 PM] ~ hannah: 🚨🚨IF NOBODY PARTICIPATES A CERTAIN SOMEONE(not me)WILL BE VERY UPSET!!!
[2023-06-23, 2:54:54 PM] ~ eli gerut: image omitted
[2023-06-23, 4:07:11 PM] ~ Jackson Nozick: Perogis
[2023-06-23, 6:29:54 PM] India: image omitted
[2023-06-23, 7:17:08 PM] ~ Ilana Sela: Hey everybody! If you on't mind taking some time, it would be super helpful for tzevet tiyul if you filled this out. Even if you're not going on tiyul, this info would make tiyul better!! YAY! 🌲🏔️🌅🌿 https://forms.gle/3XgUxzVd2wcGvnPz5
[2023-06-23, 8:34:53 PM] ~ Gal Icek: image omitted
[2023-06-23, 9:36:36 PM] Ezra: image omitted
[2023-06-23, 9:36:54 PM] Ezra: image omitted
[2023-06-23, 9:36:55 PM] Ezra: image omitted
[2023-06-23, 9:36:55 PM] Ezra: image omitted
[2023-06-23, 9:36:55 PM] Ezra: image omitted
[2023-06-23, 9:39:23 PM] ~ Theo: image omitted
[2023-06-23, 11:01:12 PM] ~ agustina: OMG
[2023-06-23, 11:09:41 PM] India: image omitted
[2023-06-23, 11:11:43 PM] India: image omitted
[2023-06-23, 11:47:49 PM] Yonnie: Thank you 🙏
[2023-06-24, 1:22:00 AM] ~ Prielle Laniado: jane and i are showering in the mains in T-10 mins!!! if anyone wants to join 😘
[2023-06-24, 2:27:12 AM] Yvonne: What’s kima tomorrow?
[2023-06-24, 2:27:52 AM] ~ Gal Icek: Check the hodaot group chat
[2023-06-24, 2:28:24 AM] Yvonne: Just learnt I’m not in that group chat
[2023-06-24, 2:28:33 AM] ~ Gal Icek: 😱
[2023-06-24, 2:29:14 AM] ~ Jane: I added her 🫶🏻
[2023-06-24, 2:29:20 AM] ~ Oliver: Pull up mo
[2023-06-24, 2:30:57 AM] ~ Jane: be there in two shakes of a lambs tail
[2023-06-24, 3:20:27 AM] ~ agustina: NO ONE TOUCH IT
[2023-06-24, 3:20:42 AM] ~ agustina: image omitted
[2023-06-24, 3:20:57 AM] ~ Jane: YO WTFF
[2023-06-24, 3:21:00 AM] ~ Jane: SOMEONE HELP HER
[2023-06-24, 3:21:13 AM] ~ Jane: WHY IS NO ONE DOING ANYTHING????
[2023-06-24, 3:21:44 AM] ~ Lila: image omitted
[2023-06-24, 3:22:23 AM] ~ Lila: image omitted
[2023-06-24, 3:22:50 AM] ~ agustina: lady boner!
[2023-06-24, 3:24:18 AM] ~ Theo: where can i purchase this shirt (for a friend)
[2023-06-24, 3:28:13 AM] ~ Jane: image omitted
[2023-06-24, 3:28:43 AM] Ezra: image omitted
[2023-06-24, 3:31:46 AM] ~ Jane: who hurt her
[2023-06-24, 3:32:10 AM] ~ Prielle Laniado: puss in boots got me locked
[2023-06-24, 3:32:35 AM] ~ Jane: puss n butts
[2023-06-24, 3:35:55 AM] ~ Zevi: image omitted
[2023-06-24, 3:36:30 AM] ~ Jane: image omitted
[2023-06-24, 3:37:06 AM] Ezra: "Jane is unhinged" -Ariella
[2023-06-24, 3:37:17 AM] ~ Jane: not true
[2023-06-24, 3:37:54 AM] ~ Lila: image omitted
[2023-06-24, 3:38:26 AM] ~ Jane: image omitted
[2023-06-24, 3:38:31 AM] ~ Prielle Laniado: image omitted
[2023-06-24, 3:38:45 AM] ~ Lila: image omitted
[2023-06-24, 3:38:55 AM] ~ Lila: what a silly goose
[2023-06-24, 4:23:52 PM] ~ eli gerut: important video🚨🚨🚨
[2023-06-24, 4:23:59 PM] ~ eli gerut: video omitted
[2023-06-24, 4:26:07 PM] ~ Shelly Kositsky: The true meaning of shabbat
[2023-06-24, 5:20:13 PM] ~ Solomon Bodrug: if anyone sees a blue Nalgene with the most stickers please let me know!
[2023-06-24, 5:22:03 PM] ~ Uri Oberlander: the first of many a missing nalgene psa💖
[2023-06-24, 5:36:45 PM] ~ Prielle Laniado: image omitted
[2023-06-24, 5:54:14 PM] ~ lily cohen: video omitted
[2023-06-24, 6:33:47 PM] India: image omitted
[2023-06-24, 6:34:10 PM] ~ Alex (shmeppy): that’s crazy😭😭😭
[2023-06-24, 6:53:05 PM] ~ Shani Avrahami Saraf: If you are a certified lice picker and will be here on big day, please text me or tal! 💖🐜🛀
[2023-06-24, 10:08:35 PM] ~ Lila: Also don’t use the bathrooms/sinks in the mo
[2023-06-25, 4:36:08 AM] ~ Mica: image omitted
[2023-06-25, 4:37:26 AM] ~ Zevi: Wtfffff
[2023-06-25, 6:16:40 AM] ~ Hilla Kabazo: image omitted
[2023-06-25, 12:46:20 PM] ~ Theo: shiraaaaaaa 😭😭 so jelly
[2023-06-25, 2:22:06 PM] India: image omitted
[2023-06-25, 2:22:10 PM] India: image omitted
[2023-06-25, 2:22:13 PM] India: image omitted
[2023-06-25, 2:23:52 PM] India: when u have some free time read this!!! some quick ass education on some songs we sing at this lovely machaneh
[2023-06-25, 2:38:16 PM] ~ Ana: ALL CREDIT TO RACHEL OPPENHEIMER FOR SITTING WITH ME AND BRAINSTORMING THAT SONG!!!
[2023-06-25, 3:02:48 PM] ~ Zevi: image omitted
[2023-06-25, 3:05:37 PM] ~ Mikal Stein: Solmate
[2023-06-25, 4:51:28 PM] ~ Gavriella TroperHochstein: Got tea? ☕️ spread the tzevet gossip here: https://forms.gle/vKwSE9VT61MfU5kc7
Completely anonymous, filtered by a wise committee, this is your place to spread rumorssss
[2023-06-25, 5:33:34 PM] ~ Gavriella TroperHochstein: Vaada tarbooty come to the mirpeset of the bayit achshav!!
[2023-06-25, 8:37:11 PM] ~ Theo: image omitted
[2023-06-25, 8:52:24 PM] ~ Noa Franklin: Say psych right now
[2023-06-25, 8:52:54 PM] ~ ➕Ziv Mergui✖️: sticker omitted
[2023-06-25, 10:58:31 PM] ~ Gavriella TroperHochstein: image omitted
[2023-06-25, 11:00:26 PM] ~ Jane: image omitted
[2023-06-25, 11:02:04 PM] ~ Lila: image omitted
[2023-06-25, 11:02:56 PM] ~ Theo: image omitted
[2023-06-25, 11:03:13 PM] ~ Jane: I QUIT
[2023-06-25, 11:03:19 PM] ~ Jane: NO MEMES IF U VOTE ME OFF
[2023-06-25, 11:04:24 PM] ~ Shani Avrahami Saraf: No Jane we need you
[2023-06-25, 11:05:49 PM] ~ Ariella Smith-Eidelman: “We socialists are not ashamed to confess that we have a deep faith in man and in a vision of a new human form of society. We appeal to the faith, hope, and imagination of our fellow citizens to join us in this vision and in the attempt to realize it. Socialism is not only a socioeconomic and political program, it is a human program.” – Erich Fromm “On Disobedience”
[2023-06-25, 11:06:56 PM] ~ mai: image omitted
[2023-06-25, 11:08:03 PM] ~ agustina: image omitted
[2023-06-25, 11:08:06 PM] ~ Maisie: image omitted
[2023-06-25, 11:08:13 PM] ~ Lila: image omitted
[2023-06-25, 11:08:21 PM] ~ Jane: HAHAHA
[2023-06-25, 11:08:35 PM] ~ Zachary Bunim: image omitted
[2023-06-25, 11:08:38 PM] ~ Prielle Laniado: omg
[2023-06-25, 11:08:53 PM] ~ Theo: wrong maz
[2023-06-25, 11:20:22 PM] ~ Theo: image omitted
[2023-06-25, 11:20:47 PM] ~ Jane: image omitted
[2023-06-25, 11:27:14 PM] ~ Shani Avrahami Saraf: image omitted
[2023-06-25, 11:27:29 PM] ~ Ariella Smith-Eidelman: You spelled it really wrong
[2023-06-25, 11:27:32 PM] ~ Ariella Smith-Eidelman: Feel bad
[2023-06-25, 11:28:00 PM] ~ Jane: image omitted
[2023-06-25, 11:29:24 PM] ~ Kiran: image omitted
[2023-06-25, 11:29:43 PM] ~ agustina: image omitted
[2023-06-25, 11:29:44 PM] ~ Theo: image omitted
[2023-06-25, 11:30:41 PM] Ezra: image omitted
[2023-06-25, 11:30:51 PM] ~ Jane: Mica
[2023-06-25, 11:31:00 PM] Edden: jane for SURE
[2023-06-25, 11:31:03 PM] ~ Theo: i know those dawgs
[2023-06-25, 11:31:07 PM] ~ Lila: it’s mica
[2023-06-25, 11:31:16 PM] ~ Mikal Stein: I know it’s not janes
[2023-06-25, 11:31:32 PM] ~ mai: Auggie has webbed toes!!!!!
[2023-06-25, 11:31:43 PM] ~ agustina: fax
[2023-06-25, 11:31:47 PM] ~ Theo: who’s camera got that telescope lens on micas toes
[2023-06-25, 11:32:13 PM] ~ Jane: image omitted
[2023-06-25, 11:35:18 PM] ~ Jane: image omitted
[2023-06-25, 11:35:29 PM] Rory Hanna-Ryant: image omitted
[2023-06-25, 11:38:03 PM] ~ Kiran: image omitted
[2023-06-25, 11:38:10 PM] ~ Theo: image omitted
[2023-06-25, 11:38:24 PM] ~ ➕Ziv Mergui✖️: image omitted
[2023-06-25, 11:39:09 PM] ~ Uri Oberlander: image omitted
[2023-06-25, 11:39:20 PM] ~ Mika: in awe
[2023-06-25, 11:40:20 PM] ~ Alex (shmeppy): image omitted
[2023-06-25, 11:40:44 PM] ~ Alex (shmeppy): new gavi meme template dropped
[2023-06-25, 11:41:28 PM] ~ Theo: image omitted
[2023-06-25, 11:41:47 PM] ~ Shani Avrahami Saraf: image omitted
[2023-06-25, 11:42:08 PM] ~ Lila: image omitted
[2023-06-25, 11:43:35 PM] ~ Zevi: image omitted
[2023-06-25, 11:43:50 PM] ~ Ariella Smith-Eidelman: I hate you
[2023-06-25, 11:44:18 PM] ~ Jane: image omitted
[2023-06-25, 11:45:12 PM] ~ Theo: 20 is generous
[2023-06-25, 11:45:56 PM] ~ Kiran: image omitted
[2023-06-25, 11:46:00 PM] ~ Lila: image omitted
[2023-06-25, 11:46:00 PM] ~ Theo: image omitted
[2023-06-25, 11:46:35 PM] ~ Jackson Nozick: Yo I'm famous
[2023-06-25, 11:47:02 PM] ~ Solomon Bodrug: image omitted
[2023-06-25, 11:47:54 PM] Yonnie: image omitted
[2023-06-25, 11:50:59 PM] ~ Theo: image omitted
[2023-06-25, 11:51:11 PM] ~ Zevi: image omitted
[2023-06-25, 11:51:58 PM] ~ mai: image omitted
[2023-06-25, 11:52:08 PM] ~ mai: image omitted
[2023-06-25, 11:53:28 PM] ~ Theo: image omitted
[2023-06-25, 11:53:46 PM] ~ Zachary Bunim: image omitted
[2023-06-25, 11:55:01 PM] Ezra: image omitted
[2023-06-25, 11:55:05 PM] ~ Mikal Stein: image omitted
[2023-06-25, 11:56:18 PM] ~ Mica: image omitted
[2023-06-25, 11:56:53 PM] Rory Hanna-Ryant: image omitted
[2023-06-25, 11:59:08 PM] ~ Prielle Laniado: image omitted
[2023-06-25, 11:59:32 PM] ~ Theo: image omitted
[2023-06-26, 12:00:21 AM] ~ mai: image omitted
[2023-06-26, 12:00:27 AM] Yonnie: image omitted
[2023-06-26, 12:00:47 AM] ~ Jane: image omitted
[2023-06-26, 12:01:14 AM] ~ Gavriella TroperHochstein: image omitted
[2023-06-26, 12:01:37 AM] ~ Uri Oberlander: image omitted
[2023-06-26, 12:01:53 AM] ~ Theo: meaning
[2023-06-26, 12:02:03 AM] ~ Ariella Smith-Eidelman: image omitted
[2023-06-26, 12:02:36 AM] Rory Hanna-Ryant: image omitted
[2023-06-26, 12:02:50 AM] ~ Mika: timmy
[2023-06-26, 12:02:51 AM] ~ Jackson Nozick: Roster
[2023-06-26, 12:03:22 AM] ~ Theo: david levi
[2023-06-26, 12:05:13 AM] ~ Maisie: Edgar
[2023-06-26, 12:06:22 AM] ~ Uri Oberlander: meming
[2023-06-26, 12:06:56 AM] ~ Jackson Nozick: image omitted
[2023-06-26, 12:07:33 AM] ~ Theo: remove the text then jackson 👿
[2023-06-26, 12:07:54 AM] ~ mai: image omitted
[2023-06-26, 12:08:14 AM] ~ Jackson Nozick: image omitted
[2023-06-26, 12:08:38 AM] Shai Rubin: image omitted
[2023-06-26, 12:09:15 AM] ~ Theo: image omitted
[2023-06-26, 12:09:24 AM] ~ Maisie: image omitted
[2023-06-26, 12:11:23 AM] ~ Jane: image omitted
[2023-06-26, 12:11:39 AM] ~ Mika: heeheeheeing
[2023-06-26, 12:12:41 AM] ~ Ariella Smith-Eidelman: Who just had knee surgery?
[2023-06-26, 12:13:02 AM] ~ mai: image omitted
[2023-06-26, 12:13:11 AM] Rory Hanna-Ryant: image omitted
[2023-06-26, 12:13:12 AM] ~ lily cohen: image omitted
[2023-06-26, 12:13:33 AM] Shai Rubin: image omitted
[2023-06-26, 12:14:59 AM] Ezra: image omitted
[2023-06-26, 12:15:23 AM] ~ Jane: image omitted
[2023-06-26, 12:15:44 AM] ~ Mikal Stein: image omitted
[2023-06-26, 12:16:31 AM] ~ Maisie: image omitted
[2023-06-26, 12:16:40 AM] ~ Zachary Bunim: ^^
[2023-06-26, 12:17:32 AM] ~ Theo: image omitted
[2023-06-26, 12:18:31 AM] Yonnie: image omitted
[2023-06-26, 12:19:57 AM] ~ agustina: image omitted
[2023-06-26, 12:20:35 AM] ~ Zevi: image omitted
[2023-06-26, 12:20:49 AM] ~ Kiran: image omitted
[2023-06-26, 12:22:10 AM] Ezra: image omitted
[2023-06-26, 12:22:30 AM] ~ agustina: image omitted
[2023-06-26, 12:23:45 AM] ~ Maisie: image omitted
[2023-06-26, 12:24:08 AM] ~ Jane: image omitted
[2023-06-26, 12:24:14 AM] ~ mai: image omitted
[2023-06-26, 12:24:25 AM] ~ Mikal Stein: image omitted
[2023-06-26, 12:24:44 AM] ~ Theo: image omitted
[2023-06-26, 12:24:50 AM] ~ Shani Avrahami Saraf: image omitted
[2023-06-26, 12:25:49 AM] ~ Zevi: image omitted
[2023-06-26, 12:26:14 AM] ~ Maisie: image omitted
[2023-06-26, 12:26:52 AM] ~ Jane: image omitted
[2023-06-26, 12:27:05 AM] ~ Shani Avrahami Saraf: image omitted
[2023-06-26, 12:28:09 AM] Shai Rubin: image omitted
[2023-06-26, 12:28:39 AM] ~ agustina: image omitted
[2023-06-26, 12:29:50 AM] Ezra: image omitted
[2023-06-26, 12:30:20 AM] ~ Zevi: image omitted
[2023-06-26, 12:30:45 AM] ~ agustina: image omitted
[2023-06-26, 12:30:58 AM] ~ mai: image omitted
[2023-06-26, 12:31:09 AM] ~ Maisie: image omitted
[2023-06-26, 12:31:40 AM] ~ Theo: image omitted
[2023-06-26, 12:33:16 AM] Ezra: image omitted
[2023-06-26, 12:34:31 AM] ~ Zevi: image omitted
[2023-06-26, 12:34:56 AM] ~ Jane: image omitted
[2023-06-26, 12:35:39 AM] ~ Theo: image omitted
[2023-06-26, 12:36:09 AM] ~ Talia Joffe: image omitted
[2023-06-26, 12:36:37 AM] ~ eli gerut: image omitted
[2023-06-26, 12:36:37 AM] ~ agustina: image omitted
[2023-06-26, 12:37:10 AM] ~ Jane: thanks theo
[2023-06-26, 12:37:26 AM] ~ Theo: gotta keep the meme queen alive
[2023-06-26, 12:37:33 AM] ~ Mikal Stein: image omitted
[2023-06-26, 12:37:57 AM] ~ mai: image omitted
[2023-06-26, 12:38:07 AM] ~ Shani Avrahami Saraf: image omitted
[2023-06-26, 12:38:16 AM] Ezra: image omitted
[2023-06-26, 12:39:51 AM] ~ Maisie: image omitted
[2023-06-26, 12:40:16 AM] ~ Prielle Laniado: image omitted
[2023-06-26, 12:40:39 AM] ~ Jane: image omitted
[2023-06-26, 12:41:39 AM] ~ Gavriella TroperHochstein: image omitted
[2023-06-26, 12:42:25 AM] ~ Theo: image omitted
[2023-06-26, 12:42:50 AM] ~ Maisie: image omitted
[2023-06-26, 12:42:52 AM] ~ Jane: image omitted
[2023-06-26, 12:44:26 AM] ~ Jane: image omitted
[2023-06-26, 12:44:28 AM] ~ agustina: image omitted
[2023-06-26, 12:44:36 AM] Ezra: image omitted
[2023-06-26, 12:45:15 AM] ~ mai: This is the America Joe Biden wants
[2023-06-26, 12:45:30 AM] ~ Jackson Nozick: image omitted
[2023-06-26, 12:45:31 AM] ~ Jackson Nozick: Zack in 5 years
[2023-06-26, 12:45:59 AM] ~ Theo: image omitted
[2023-06-26, 12:46:44 AM] ~ Alex (shmeppy): she lowkey look like walter white
[2023-06-26, 12:47:11 AM] Ezra: image omitted
[2023-06-26, 12:47:13 AM] ~ Zevi: image omitted
[2023-06-26, 12:47:26 AM] ~ Jane: image omitted
[2023-06-26, 12:47:35 AM] ~ Lila: image omitted
[2023-06-26, 12:48:23 AM] ~ Shani Avrahami Saraf: image omitted
[2023-06-26, 12:50:43 AM] Arielle: image omitted
[2023-06-26, 12:51:01 AM] ~ Jackson Nozick: image omitted
[2023-06-26, 12:51:44 AM] ~ Maisie: GIF omitted
[2023-06-26, 12:52:58 AM] ~ Shani Avrahami Saraf: image omitted
[2023-06-26, 12:53:18 AM] ~ Lila: image omitted
[2023-06-26, 12:57:46 AM] ~ Lila: image omitted
[2023-06-26, 12:58:24 AM] ~ Noga Goldman: image omitted
[2023-06-26, 12:59:04 AM] ~ mai: image omitted
[2023-06-26, 1:00:05 AM] ~ Jane: image omitted
[2023-06-26, 1:01:44 AM] ~ Zevi: image omitted
[2023-06-26, 1:01:48 AM] ~ Kiran: image omitted
[2023-06-26, 1:02:26 AM] Rory Hanna-Ryant: Oreos are empty
[2023-06-26, 1:02:41 AM] ~ Kiran: 😭😩💔
[2023-06-26, 1:03:47 AM] ~ mai: image omitted
[2023-06-26, 1:04:38 AM] ~ Noga Goldman: So squishy
[2023-06-26, 1:05:38 AM] Ezra: image omitted
[2023-06-26, 1:06:26 AM] ~ Uri Oberlander: got toe spreaders??😭😭
[2023-06-26, 1:06:26 AM] ~ Zachary Bunim: image omitted
[2023-06-26, 1:06:26 AM] ~ Kiran: He was so inoccent how could you 😭
[2023-06-26, 1:06:50 AM] ~ Theo: bunyon slander will not be tolerated
[2023-06-26, 1:07:03 AM] ~ Mikal Stein: Bunyon
[2023-06-26, 1:07:06 AM] ~ Gavriella TroperHochstein: *bunion
[2023-06-26, 1:07:21 AM] ~ Uri Oberlander: bullion
[2023-06-26, 1:07:22 AM] ~ mai: More like bunyonnie
[2023-06-26, 1:07:33 AM] ~ Theo: bunneion
[2023-06-26, 1:09:14 AM] ~ Gavriella TroperHochstein: image omitted
[2023-06-26, 1:09:46 AM] ~ mai: image omitted
[2023-06-26, 1:10:22 AM] ~ Mika: image omitted
[2023-06-26, 1:10:45 AM] ~ Jane: image omitted
[2023-06-26, 1:11:19 AM] ~ Mikal Stein: image omitted
[2023-06-26, 1:11:44 AM] ~ Maayan: image omitted
[2023-06-26, 1:11:51 AM] ~ Maayan: New meme template
[2023-06-26, 1:11:51 AM] ~ Jane: im so cute why did no one ask me to grade 7 formal
[2023-06-26, 1:11:51 AM] ~ mai: image omitted
[2023-06-26, 1:13:16 AM] ~ Mika: image omitted
[2023-06-26, 1:14:01 AM] ~ Jane: image omitted
[2023-06-26, 1:14:03 AM] ~ Kiran: image omitted
[2023-06-26, 1:14:16 AM] Ezra: image omitted
[2023-06-26, 1:15:00 AM] Yonnie: image omitted
[2023-06-26, 1:15:08 AM] ~ Ariella Smith-Eidelman: image omitted
[2023-06-26, 1:15:25 AM] ~ mai: image omitted
[2023-06-26, 1:15:30 AM] ~ Mika: image omitted
[2023-06-26, 1:15:32 AM] Ezra: image omitted
[2023-06-26, 1:15:56 AM] ~ Theo: image omitted
[2023-06-26, 1:16:33 AM] ~ Maisie: image omitted
[2023-06-26, 1:17:25 AM] ~ Zevi: image omitted
[2023-06-26, 1:18:25 AM] ~ Kiran: This message was deleted.
[2023-06-26, 1:20:09 AM] Yvonne: image omitted
[2023-06-26, 1:20:43 AM] ~ mai: image omitted
[2023-06-26, 1:22:55 AM] ~ Maisie: image omitted
[2023-06-26, 1:23:41 AM] ~ eli gerut: image omitted
[2023-06-26, 1:24:32 AM] ~ Jane: image omitted
[2023-06-26, 1:24:45 AM] ~ Shani Avrahami Saraf: image omitted
[2023-06-26, 1:25:04 AM] ~ Kiran: image omitted
[2023-06-26, 1:25:44 AM] ~ Maisie: image omitted
[2023-06-26, 1:26:55 AM] ~ Zevi: image omitted
[2023-06-26, 1:27:06 AM] ~ Jane: I get it!!!!
[2023-06-26, 1:27:15 AM] ~ Jackson Nozick: Cause she's holding the fort down
[2023-06-26, 1:27:31 AM] ~ hannah: nice one zevi!!!!!
[2023-06-26, 1:27:53 AM] ~ Kiran: image omitted
[2023-06-26, 1:28:00 AM] ~ Maisie: image omitted
[2023-06-26, 1:29:42 AM] ~ Zevi: video omitted
[2023-06-26, 1:29:53 AM] ~ Shelly Kositsky: image omitted
[2023-06-26, 1:30:19 AM] ~ Prielle Laniado: image omitted
[2023-06-26, 1:30:24 AM] Yvonne: image omitted
[2023-06-26, 1:30:47 AM] ~ Shelly Kositsky: YAAAIIIIRRR BIRTHDAY
[2023-06-26, 1:31:08 AM] ~ Maisie: image omitted
[2023-06-26, 1:31:10 AM] ~ Lila: image omitted
[2023-06-26, 1:38:33 AM] ~ Ariella Smith-Eidelman: image omitted
[2023-06-26, 1:40:37 AM] ~ Maisie: image omitted
[2023-06-26, 2:16:07 AM] Arielle: Birthday soccer on the migrash!!!
[2023-06-26, 10:58:16 AM] ~ Alex (shmeppy): when i get there today is someone able to pick me up from the ferry or do i get there myself
[2023-06-26, 11:01:58 AM] Ezra: Whatsapp ariella and someone will pick you up
[2023-06-26, 11:21:31 AM] ~ Shelly Kositsky: image omitted
[2023-06-26, 12:27:33 PM] Rory Hanna-Ryant: Does anyone have eyes on some work gloves? Or even gardening gloves?
[2023-06-26, 12:27:47 PM] ~ Sadie Quinn: Machzan!
[2023-06-26, 1:02:27 PM] ~ Mikal Stein: 🚨ANNOUNCEMENT🚨 all silhouette tzrif dwellers (right side) please come move ur belongings from the black bunk beds!
[2023-06-26, 1:03:33 PM] ~ Mikal Stein: And maybe some stuff on the ground so there is no trippage thank you🙏🙏❤️
[2023-06-26, 1:04:08 PM] ~ Gavriella TroperHochstein: It’s madatz tzevet, we’re on our way
[2023-06-26, 1:07:34 PM] ~ Sadie Quinn: Thanks!
[2023-06-26, 1:15:02 PM] ~ Gavriella TroperHochstein: Done!
[2023-06-26, 1:47:16 PM] ~ Maisie: image omitted
[2023-06-26, 1:47:17 PM] ~ Maisie: image omitted
[2023-06-26, 1:55:24 PM] ~ Mica: Can someone take a pic of the Seder Yom and put it in the group?
[2023-06-26, 1:55:42 PM] Rory Hanna-Ryant: image omitted
[2023-06-26, 1:55:50 PM] ~ Mica: Hero
[2023-06-26, 2:31:43 PM] ~ Alex (shmeppy): could someone tell ariella that i’m about to board the 11:40 ferry to gabriola and she said someone could pick me up but she isn’t answering me
[2023-06-26, 2:35:18 PM] ~ Maisie: yessss, Shmeppy is coming~!
[2023-06-26, 3:20:53 PM] ~ Tal Fisher-Taylor: image omitted
[2023-06-26, 4:35:25 PM] ~ Jackson Nozick: Hey guys does anyone have an electric razor Zack is gonna shave my head
[2023-06-26, 4:44:53 PM] ~ Sadie Quinn: GIF omitted
[2023-06-26, 4:54:19 PM] India: image omitted
[2023-06-26, 4:55:36 PM] ~ Jane: why did no one tell me my head is shaped like thar
[2023-06-26, 5:03:58 PM] ~ Lila: we thought you knew
[2023-06-26, 5:05:38 PM] ~ Uri Oberlander: image omitted
[2023-06-26, 5:18:31 PM] India: image omitted
[2023-06-26, 5:18:58 PM] India: if she’s gone/broken i will find out who’s responsible and put a fork in ur bed
[2023-06-26, 5:36:28 PM] ~ Maisie: I wonder if anyone’s gonna break the rule just to see if you’re actually gonna put a fork in their bed (´-ω-)
[2023-06-26, 6:23:32 PM] India: https://docs.google.com/document/d/16rxeO3HI71Tto0KdJI5JeIn9Q1UXkipe4k3JAva88T4/edit
[2023-06-26, 6:25:45 PM] India: link to my anti racism proposal that got passed at veida as well as the neurodiversity proposal that got passed
[2023-06-26, 6:26:42 PM] India: the neurodiversity tochnit erected group should take a look!
[2023-06-26, 6:36:48 PM] Shir: says I need access
[2023-06-26, 6:37:00 PM] India: word i’ll figure that out
[2023-06-26, 7:34:51 PM] Rue: va'ad yom meyuchad to the mo pls
[2023-06-26, 7:35:56 PM] ~ Gavriella TroperHochstein: Vaada tarbooty come to the chadar!!
[2023-06-26, 10:41:47 PM] ~ Jane: image omitted
[2023-06-26, 10:42:59 PM] ~ hannah: wow edden i thought you were better than this 😕
[2023-06-26, 10:43:57 PM] ~ Jackson Nozick: Whos Kristina
[2023-06-26, 10:44:00 PM] ~ Jackson Nozick: 💀
[2023-06-27, 12:06:47 AM] ~ Ariella Smith-Eidelman: THE WATER IS HOT I REPEAT THE WATER IS HOT
[2023-06-27, 12:07:08 AM] ~ Gavriella TroperHochstein: is it too hot?
[2023-06-27, 12:07:37 AM] Yonnie: 🔥🧯
[2023-06-27, 12:09:18 AM] ~ Ilana Sela: TZEVET TIYUL PACKING LIST!!! 🌲🏔️🚣‍♀️
Bring in a small backpack 🎒:
- warm 🥵clothes 👕for the night 🌜
- clothes 👖 for the next day
- bathing suit 🩱& towel
- minimal toiletries (try to share some things with your friends)
- WEAR your hiking boots & good socks!!
- sunscreen, water bottle, hat
Bring to breakfast 🍳 :
- sleeping bag
Boating people 🛶:
- bathing suit/clothes to get soaked in
- sandals
[2023-06-27, 12:26:26 AM] ~ Ariella Smith-Eidelman: No
[2023-06-27, 12:28:34 AM] ~ Gavriella TroperHochstein: Be at the janusz in 2 MINUTES!!!
[2023-06-27, 12:32:12 AM] ~ Gavriella TroperHochstein: Everyone needs to be at the janusz TWO MINUTES AGO!!!
[2023-06-27, 12:32:17 AM] ~ Gavriella TroperHochstein: The chevrati is starting
[2023-06-27, 1:36:58 AM] ~ Ilana Sela: Also bring a flashlight/headlamp!
[2023-06-27, 1:51:04 AM] Ron: image omitted
[2023-06-27, 2:07:12 AM] ~ Kiran: Left my water bottle at the janush lmk if you seen it or took it
[2023-06-27, 2:21:15 AM] ~ Alex (shmeppy): image omitted
[2023-06-27, 2:21:21 AM] ~ Alex (shmeppy): image omitted
[2023-06-27, 2:21:25 AM] ~ Alex (shmeppy): buzz chronicles
[2023-06-27, 2:23:56 AM] ~ Alex (shmeppy): image omitted
[2023-06-27, 2:23:58 AM] ~ Alex (shmeppy): image omitted
[2023-06-27, 2:24:06 AM] ~ Alex (shmeppy): image omitted
[2023-06-27, 2:24:23 AM] Rafi: Why is the front skin bald and the rest isn’t
[2023-06-27, 2:24:28 AM] Rafi: What happened 💀💀
[2023-06-27, 2:28:13 AM] ~ Theo: image omitted
[2023-06-27, 2:40:23 AM] ~ Theo: image omitted
[2023-06-27, 2:43:25 AM] ~ Alex (shmeppy): image omitted
[2023-06-27, 2:48:40 AM] ~ Alex (shmeppy): image omitted
[2023-06-27, 2:48:53 AM] ~ Alex (shmeppy): video omitted
[2023-06-27, 2:55:27 AM] ~ Alex (shmeppy): image omitted
[2023-06-27, 3:09:47 AM] Rafi: “a little off the top please”
[2023-06-27, 3:40:16 AM] ~ Mika: image omitted
[2023-06-27, 4:22:15 AM] Rory Hanna-Ryant: Awwww
[2023-06-27, 10:52:00 AM] ~ Maisie: ε-(´∀｀; ) so that’s what you guys got up to last night…
[2023-06-27, 12:41:03 PM] ~ Solomon Bodrug: image omitted
[2023-06-27, 1:07:06 PM] ~ mai: Ron is that the one I lent you 🫣🫣🫣
[2023-06-27, 1:08:38 PM] ~ Kiran: @17789033776
[2023-06-27, 2:56:10 PM] Ron: No Mairav it’s on my bedside table
[2023-06-27, 4:58:55 PM] Ron: Does anyone know the camp address for mail
[2023-06-27, 4:59:44 PM] ~ Theo: 835 Berry Point Rd, Gabriola, BC V0R 1X1
[2023-06-28, 1:48:10 AM] ~ eli gerut: does anyone know the wifi password for the mirp lol
[2023-06-28, 1:48:35 AM] Tyler: Yea it’s actually suckmyballz !!
[2023-06-28, 1:51:43 AM] ~ eli gerut: wow thank u sm
[2023-06-28, 1:52:06 AM] Tyler: No problem!!
[2023-06-28, 12:51:06 PM] ~ Gavriella TroperHochstein: Avodah at the madregot happening RIGHT NOW!!!
[2023-06-28, 12:51:44 PM] ~ Gavriella TroperHochstein: If you’re not here you’ll get randomly signed up so get your booties down here!!!
[2023-06-28, 5:39:53 PM] Gali Goldman: Who on riff raff likes ice cream
[2023-06-28, 5:39:58 PM] Gali Goldman: Please comment below
[2023-06-28, 5:40:35 PM] ~ Mikal Stein: Is this a trap😢
[2023-06-28, 5:40:43 PM] ~ Uri Oberlander: mikal loves ice cream
[2023-06-28, 5:40:47 PM] Gali Goldman: Mikal you’re helping me
[2023-06-28, 5:41:27 PM] ~ Mikal Stein: Ok would loveeeee to but in a meeting currently
[2023-06-28, 5:42:45 PM] Gali Goldman: Ok I do need someone’s help however
[2023-06-28, 5:43:01 PM] Gali Goldman: So anyone not doing anything right now
[2023-06-28, 6:01:13 PM] ~ Solomon Bodrug: where at
[2023-06-28, 6:01:56 PM] ~ Shelly Kositsky: What is the chador wifi
[2023-06-28, 6:03:04 PM] ~ Shelly Kositsky: This is very urgent!!!
[2023-06-28, 6:03:42 PM] ~ Solomon Bodrug: spidermanSUMMER23
[2023-06-28, 6:42:26 PM] ~ Sadie Quinn: If you don’t know what you’re doing for peula planning, come see me or Rue in the chadar!
[2023-06-28, 6:44:22 PM] Rue: Jane, Yair, and Rory where u at?
[2023-06-28, 6:44:46 PM] ~ Ariella Smith-Eidelman: In the techni
[2023-06-28, 6:47:18 PM] Rue: I'm sending u some more ppl
[2023-06-28, 6:47:43 PM] Rory Hanna-Ryant: Who
[2023-06-28, 6:47:54 PM] Rue: Roie and Lily
[2023-06-28, 6:48:04 PM] Rory Hanna-Ryant: Dope
[2023-06-28, 8:04:07 PM] Gali Goldman: Can riff raff come to the madregot pls
[2023-06-28, 10:45:48 PM] ~ Louis: This message was deleted.
[2023-06-28, 11:02:49 PM] ~ Gavriella TroperHochstein: Everyone please come to the chadar right now!
[2023-06-28, 11:03:03 PM] ~ Gavriella TroperHochstein: It is time for THE MOST EXCITING peulah of the summer!!!
[2023-06-28, 11:47:09 PM] ~ Alex (shmeppy): image omitted
[2023-06-29, 12:17:04 AM] Rafi: 🐶🐶
[2023-06-29, 12:39:47 AM] ~ Rachel Oppenheimer: Does anyone else still need to shower tonight?
[2023-06-29, 12:39:57 AM] ~ Mikal Stein: This message was deleted.
[2023-06-29, 12:40:16 AM] ~ Mikal Stein: This message was deleted.
[2023-06-29, 1:02:32 AM] ~ Maayan: Come to the chadar so we can start the movie!!!!
[2023-06-29, 1:02:52 AM] ~ Maayan: Y’all are half an hour late
[2023-06-29, 1:08:48 AM] ~ Jane: COME WATCH MEATBALLS ITS SO GOOD
[2023-06-29, 1:08:59 AM] ~ Jane: and it has bill murray and its about a summer camp
[2023-06-29, 1:09:02 AM] ~ Uri Oberlander: COME TO THE CHADAR
[2023-06-29, 1:09:54 AM] ~ Talia Joffe: If you’re not in the chadar you’re a LOSER
[2023-06-29, 1:35:40 AM] ~ Mikal Stein: image omitted
[2023-06-29, 1:36:03 AM] Rafi: I’m so sorry for your loss 💀❤️
[2023-06-29, 1:36:16 AM] ~ Jane: very picturesque
[2023-06-29, 1:37:29 AM] India: come to chadar RIGHT NIW
[2023-06-29, 1:37:31 AM] India: NOW
[2023-06-29, 1:37:32 AM] ~ Talya Stein: THERE IS SOMETHING WAITING IN THE CHADAR PLS COME NOW - love mitbach
[2023-06-29, 1:39:05 AM] India: audio omitted
[2023-06-29, 1:39:37 AM] ~ Jackson Nozick: audio omitted
[2023-06-29, 2:33:28 AM] ~ Mika: when is kima?
[2023-06-29, 2:33:38 AM] ~ Tal Fisher-Taylor: 0800
[2023-06-29, 2:33:44 AM] ~ Mika: wait nvm just saw the other gc oops
[2023-06-29, 3:13:45 AM] India: MAZ! there are 4 pieces of cake that are left for y’all in the freezer
*they r at the back of the freezer*
[2023-06-29, 3:15:55 AM] ~ Noga Goldman: You’re the best thank you so much!
[2023-06-29, 3:21:47 AM] Ron: image omitted
[2023-06-29, 3:28:44 AM] ~ Maisie: Finders keepers~
[2023-06-29, 3:28:58 AM] ~ Maisie: (´-ω-)
[2023-06-29, 4:03:22 AM] ~ Rachel Oppenheimer: Does anyone else hear a high pitched noise right now?
[2023-06-29, 4:03:29 AM] ~ Gal Icek: Yes
[2023-06-29, 4:03:32 AM] ~ Talia Joffe: Yep
[2023-06-29, 4:03:35 AM] ~ Gal Icek: It's handeled
[2023-06-29, 4:03:37 AM] ~ Noga Goldman: Yes on it
[2023-06-29, 4:04:12 AM] ~ Rachel Oppenheimer: Thank you, Layla tov ❤️
[2023-06-29, 12:59:11 PM] Rue: Hey tzevet,
I'll send this form again during our SOS talk today buuuut if you have any SOS questions that you frequently get asked or think your kids might have feel free to fill this out during hafsaka. https://forms.gle/x5mz9YwTVnAhzKGt8
There's also a spot for questions you personally have that Amy, our guest speaker (who is a somatic sex educator), may be able to answer. This form is totally anonymous! ❤️
[2023-06-29, 1:29:34 PM] ~ Maisie: image omitted
[2023-06-29, 1:30:39 PM] ~ Talia Joffe: image omitted
[2023-06-29, 2:40:24 PM] Rue: How big is average penis in South Africa
Is it ok to not have my period yet?
I like to watch gay porn and I don’t think I’m gay, but does it mean I am?
What age should someone have their first kiss?
How do I find the clitoris?
How do you know if you’re bisexual/gay/trans?
Does sex hurt? Is it normal if sex hurts?
What is an orgasm?
What is it like to orgasm?
How do you know if you’ve had an orgasm?
What is birth control used for?
What age should you have your first kiss?
How do you put in a tampon. How do two people with vaginas have sex? How do two people with penises have sex? Can people with vaginas get surgery to get penises and vice versa?
What is asexuality?
What does puberty look like?
Is it ok for me not to be sure about my gender identity?
What do I do if people don’t respect my pronouns?
[2023-06-29, 3:43:42 PM] ~ Mika: thank u tal🙏
[2023-06-29, 4:32:09 PM] Edden: ‼️Very important question‼️ DOES ANYONE HAVE COWBOY HATS?
[2023-06-29, 4:32:53 PM] Edden: we need 5
[2023-06-29, 4:33:01 PM] ~ scotty: i have one
[2023-06-29, 4:33:19 PM] Edden: also if you want to be a minor character in the hatzagah, come talk to me
[2023-06-29, 4:44:06 PM] Edden: image omitted
[2023-06-29, 4:44:34 PM] Edden: (not all of them are in all of the hatzagot)
[2023-06-29, 4:46:19 PM] ~ Mica: dibs on evil pizza
[2023-06-29, 4:47:21 PM] ~ Gavriella TroperHochstein: I want to be a horse, I’m really good at galloping
[2023-06-29, 4:47:35 PM] Edden: ok you have to be able to hold me or lily on your back as you gallop
[2023-06-29, 4:47:43 PM] ~ Maayan: i'm good to be whatever you need me to be
[2023-06-29, 4:47:59 PM] Edden: you can be an evil human
[2023-06-29, 4:48:05 PM] ~ Zachary Bunim: i’ll eat an apple
[2023-06-29, 4:48:19 PM] Edden: uri already called it
[2023-06-29, 4:48:36 PM] ~ lily cohen: image omitted
[2023-06-29, 4:49:37 PM] ~ scotty: i’ll be a horse
[2023-06-29, 4:50:07 PM] ~ Mika: perfect
[2023-06-29, 5:04:06 PM] ~ Jackson Nozick: I'll be a bank teller
[2023-06-29, 6:03:50 PM] ~ scotty: can someone send a photo of the seder yom for today pls?
[2023-06-29, 6:04:25 PM] India: image omitted
[2023-06-29, 6:04:38 PM] ~ scotty: yayy thank u
[2023-06-29, 6:34:43 PM] ~ Solomon Bodrug: FIRE FIRE FIRE
[2023-06-29, 6:37:01 PM] ~ Prielle Laniado: (drill!)
[2023-06-29, 9:02:58 PM] ~ Daniel: Rue added ~ Daniel
[2023-06-29, 9:05:51 PM] ~ Mica: https://docs.google.com/document/d/18qo8dN2BQGNCmHRFO0ZbVI5JMTu11oK2gWwFZzm7XjA/edit?usp=sharing
[2023-06-29, 9:12:32 PM] ~ Mika: can i be the lawyer guy
[2023-06-29, 10:02:17 PM] ~ Ariella Smith-Eidelman: Tzevet kupa orders in the tzevet kupa box
[2023-06-29, 11:26:21 PM] ~ scotty: if anyone sees a janky pair of apple white earbuds around machaneh pls let me know they are the only ones i have
[2023-06-29, 11:47:01 PM] ~ Maisie: image omitted
[2023-06-29, 11:48:34 PM] ~ Ariella Smith-Eidelman: https://medium.com/better-advice/5-reasons-why-you-should-never-become-angry-5fb81075de6d
[2023-06-30, 12:53:34 AM] ~ Noga Goldman: Polka dot - nitzanim left, nitzanot right
[2023-06-30, 12:53:48 AM] ~ Noga Goldman: Starry night - amelim left, amelot right
[2023-06-30, 12:53:58 AM] ~ Noga Goldman: Hydro - chotrim right
[2023-06-30, 12:54:40 AM] ~ Noga Goldman: Mirp - chotrot both sides (madrichot spread between sides and youll be joined by michelle on the side with one of you)
[2023-06-30, 12:54:56 AM] ~ Noga Goldman: Sillouette - sayarim left, sayarot right
[2023-06-30, 12:55:07 AM] ~ Noga Goldman: New - chalutzot left, chalutzim right
[2023-06-30, 12:55:25 AM] ~ Noga Goldman: Shomrimot - shomrot top, shomrim bottom
[2023-06-30, 12:55:42 AM] ~ Noga Goldman: Bonimot - bomo in the middle, bonot far ohel, bonim close ohel
[2023-06-30, 12:55:54 AM] ~ Noga Goldman: Tzofimot - tzofot left, tzofim right
[2023-06-30, 1:11:45 AM] Ron: Does anyone know where the ferry lights are
[2023-06-30, 1:27:13 AM] ~ Maisie: image omitted
[2023-06-30, 1:37:23 AM] ~ maya: just making sure that the tzofimot bathrooms are okay to be used?
[2023-06-30, 1:39:00 AM] ~ Jane: edden and i are going chof swimming. join if u want!!
[2023-06-30, 1:45:35 AM] ~ Alex (shmeppy): sticker omitted
[2023-06-30, 2:26:05 AM] ~ Talya Stein: Does anybody’s have spare earplugs haha
[2023-06-30, 2:56:31 AM] ~ Prielle Laniado: kimaaaa?
[2023-06-30, 2:56:41 AM] ~ Noga Goldman: 8!
[2023-06-30, 2:56:44 AM] ~ Noga Goldman: 8:30 brekki
[2023-06-30, 10:32:02 AM] ~ hannah: kinda late but if u still need i have!
[2023-06-30, 11:50:21 AM] ~ Jackson Nozick: image omitted
[2023-06-30, 11:57:42 AM] Rafi: image omitted
[2023-06-30, 12:23:02 PM] ~ Uri Oberlander: EDDEN AND YAIR CAN U PLS COME TO THE PLAYGROUND THANK YOU
[2023-06-30, 12:23:34 PM] ~ Uri Oberlander: if someone sees edden tell her pls cause i don’t think she has her phone
[2023-06-30, 12:41:17 PM] ~ Tal Fisher-Taylor: Amelimot come to mirp!
[2023-06-30, 12:53:30 PM] ~ Sadie Quinn: Anyone know where the paper towel key is?
[2023-06-30, 12:53:51 PM] Ezra: techni office
[2023-06-30, 12:54:26 PM] Ezra: ^
[2023-06-30, 1:56:52 PM] ~ Noga Goldman: https://docs.google.com/document/d/1-vuiLfeS9LHYp6yXs0Tj7oY42opY3hmlJK47wbFjC80/edit
[2023-06-30, 3:27:39 PM] ~ Alex (shmeppy): ATTENTION 🚨🚨🚨
URGENT‼️‼️‼️

everyone needs to change their wallpaper to this photo for the next few days or you will be kicked off of tzevet- Nogi Bear
[2023-06-30, 3:27:54 PM] ~ Alex (shmeppy): image omitted
[2023-06-30, 3:29:45 PM] Yarden: image omitted
[2023-06-30, 4:55:07 PM] ~ Alex (shmeppy): image omitted
[2023-06-30, 4:56:09 PM] ~ Lila: image omitted
[2023-06-30, 4:56:33 PM] ~ Lila: image omitted
[2023-06-30, 4:56:36 PM] ~ Jane: yum
[2023-06-30, 4:56:59 PM] Tyler: This activity is so exciting
[2023-06-30, 8:51:40 PM] ~ mai: Where did the laptops get moved to that were in the chadar when it was cleaned
[2023-06-30, 8:58:04 PM] ~ Mikal Stein: Come swim🌊🌊🌊🌊🦀🐙🐳
[2023-06-30, 8:59:27 PM] ~ mai: If anyone has any insight 🙏🙏🙏 #forthegoodofshabbat
[2023-07-01, 12:29:05 AM] ~ Rachel Oppenheimer: image omitted
[2023-07-01, 12:29:16 AM] ~ Rachel Oppenheimer: image omitted
[2023-07-01, 12:31:28 AM] ~ Rachel Oppenheimer: The madatz found an already broken light (the end was broken and sharp) and I wanted to put it somehwere safe until after shichva time but i forgot that cylinders roll. I will clean it up before I sleep tonight!
[2023-07-01, 12:32:14 AM] ~ Rachel Oppenheimer: Under the stairs in the ‘something in hebrew stereo’ room
[2023-07-01, 12:33:22 AM] ~ Rachel Oppenheimer: No one was hurt
[2023-07-01, 1:04:27 AM] Rue: 69 come to the upper kvish
[2023-07-01, 1:05:07 AM] ~ Ariella Smith-Eidelman: Me and ezra will need another 10
[2023-07-01, 1:17:39 AM] ~ Uri Oberlander: late night soccer on the migrash starting in 10!!!
[2023-07-01, 1:37:46 AM] ~ Mika: also guys plz reminder dont use the boys mains🙏🙏
[2023-07-01, 1:38:07 AM] ~ Mika: ‼️THE BAT IS GONE‼️
[2023-07-01, 1:38:21 AM] ~ Mika: everyone do not open the boys mains bathroom door tonight!!!
[2023-07-01, 1:46:29 AM] Zev: Did anyone find a phone and if so where are you and get in touch with mica
[2023-07-01, 1:46:55 AM] ~ Kiran: Yes phone with black otterbox case in techni office
[2023-07-01, 2:17:32 AM] ~ Kerren Matthews!!! (she): Rue added ~ Kerren Matthews!!! (she)
[2023-07-01, 2:34:31 AM] ~ Ariella Smith-Eidelman: Tmrw kima is at 9 and breakfast is at 9:30! It is a shower day so you can shower before or after programming :)
[2023-07-01, 3:11:05 AM] ~ Jane: Hi to whoever took the yellow lighter from the mo that says “do not steal my lighter”, can u pls put it back
[2023-07-01, 3:19:32 AM] ~ Alex (shmeppy): how do you turn on main lights
[2023-07-01, 3:19:32 AM] ~ Alex (shmeppy): on left side
[2023-07-01, 12:53:43 PM] ~ Mika: image omitted
[2023-07-01, 12:58:45 PM] ~ Maisie: image omitted
[2023-07-01, 1:41:36 PM] ~ Gal Icek: This message was deleted.
[2023-07-01, 1:41:52 PM] ~ Ariella Smith-Eidelman: Open this link to join my WhatsApp Group: https://chat.whatsapp.com/LR03gL7IEe61jAz2u4bOKX
[2023-07-01, 2:59:57 PM] ~ Zevi: For madatz Tiyul, we need

10 or 11 women’s hiking boots
8 or 9 women’s hiking boots
8.5 women’s hiking boots

Lmk if you have!
[2023-07-01, 3:05:48 PM] Rory Hanna-Ryant: I have a pair of size ten womens hiking boots!
[2023-07-01, 3:48:21 PM] ~ Maayan: If anybody has hiking boots in an 8.5 please let anyone on tzevet madatz know!
[2023-07-01, 4:06:53 PM] ~ Maisie: Starting to wonder what percentage of this “camp committee” is cis…
[2023-07-01, 4:07:37 PM] ~ Maisie: Or old white people for that matter
[2023-07-01, 4:09:59 PM] ~ Maisie: This place is overrun with white saviour complex and it needs to stop.
[2023-07-01, 4:36:29 PM] ~ Jackson Nozick: image omitted
[2023-07-01, 4:37:14 PM] Ezra: Thanks jackson
[2023-07-01, 5:01:37 PM] ~ Jackson Nozick: No problem dude
[2023-07-01, 5:23:48 PM] ~ mai: image omitted
[2023-07-01, 5:25:54 PM] ~ Jackson Nozick: This message was deleted.
[2023-07-01, 5:37:38 PM] ~ Jane: vaada tarbooty I propose we have a very quick sicha at dinner for the chevarti tonight
[2023-07-01, 5:38:03 PM] ~ Jackson Nozick: Sounds good
[2023-07-01, 5:40:07 PM] Rafi: 👍👍
[2023-07-01, 5:54:47 PM] ~ Alex (shmeppy): does anyone know where the papers wit our chofesh and nofesh are
[2023-07-01, 6:04:37 PM] ~ Prielle Laniado: alsooo vaad yom meyuchad we should defs meet soon !
[2023-07-01, 6:47:06 PM] ~ Solomon Bodrug: image omitted
[2023-07-01, 6:47:34 PM] ~ Prielle Laniado: psa the grinder turns off by itself!!!
[2023-07-01, 6:57:49 PM] Mira: image omitted
[2023-07-01, 8:00:25 PM] ~ Jane: why is there so much plastic outside of silhouette? is someone in the process of moving it?
[2023-07-01, 8:39:41 PM] Rory Hanna-Ryant: If anyone is not planning Chuggim, I have a huge fan project that I need loads of help with (by the brecha)
[2023-07-01, 8:39:46 PM] Rory Hanna-Ryant: Gan*
[2023-07-01, 9:41:35 PM] ~ Kiran: Hey folks I lost a black hoodie. Completely plain black, no memorable tag or brand, has black strings and some marks on the front from Mitbach things. If you see it plz lmk 🙏🏻🫶🏼
[2023-07-01, 11:42:56 PM] ~ Jane: TZEVET COME TO THE MO
[2023-07-01, 11:45:23 PM] ~ Jane: we arw starting the chevrati
[2023-07-02, 1:07:23 AM] ~ Jackson Nozick: https://docs.google.com/forms/d/e/1FAIpQLSdFgLTktS_picGCQhkvh9ffCZ2KqaNCZ4unkrck_fRTx1OBIg/viewform
[2023-07-02, 1:07:40 AM] ~ Jackson Nozick: Here's the Tzevet rumor form
[2023-07-02, 1:07:51 AM] ~ Jackson Nozick: Hope y'all enjoyed the chevrati
[2023-07-02, 1:41:53 AM] ~ Lila: come to the chof
[2023-07-02, 1:48:13 AM] ~ Jane: kima?
[2023-07-02, 1:48:51 AM] ~ Gal Icek: 8
[2023-07-02, 1:48:58 AM] ~ Gal Icek: Aruchat boker 8:30
[2023-07-02, 2:05:16 AM] ~ Noa Franklin: image omitted
[2023-07-02, 2:08:57 AM] ~ Jane: bedwetter
[2023-07-02, 2:09:41 AM] ~ Maisie: I was the shy child; always had my nose in a book.
[2023-07-02, 11:45:55 AM] ~ Jackson Nozick: image omitted
[2023-07-02, 5:56:24 PM] Tyler: video omitted
[2023-07-02, 5:57:40 PM] ~ Alex (shmeppy): sticker omitted
[2023-07-02, 5:58:02 PM] Omer: sticker omitted
[2023-07-02, 6:05:08 PM] ~ Prielle Laniado: if anyone has eyes on shani tell her i found the med box in upper uppers!
[2023-07-02, 7:45:46 PM] ~ scotty: https://docs.google.com/document/d/1UybSi34ag5eDnTcilPDDeLMWbtCSyhlSZcnmMOAz0h8/edit
[2023-07-02, 8:00:49 PM] ~ Jackson Nozick: So no dinner?
[2023-07-02, 8:06:49 PM] ~ Uri Oberlander: food will be available to tzevet at the planned time for aruchat erev
[2023-07-02, 9:15:57 PM] ~ Ariella Smith-Eidelman: Tzevet kupa orders are in the box or in the mo as well all other orders are in kvutzot boxes if you don't know where something is let me know :)
[2023-07-02, 9:16:44 PM] Yvonne: When will be the next trip? When should we put in the next form we have by?
[2023-07-02, 9:17:03 PM] ~ Ariella Smith-Eidelman: The next trip is on Wednesday
[2023-07-02, 9:17:05 PM] Yvonne: Woah I didn’t like the way iw order that, when will the next trip be?
[2023-07-02, 9:17:09 PM] Yvonne: Okay thank you
[2023-07-02, 9:42:01 PM] Rory Hanna-Ryant: @12508856561  can u come to the pool please?
[2023-07-02, 9:42:01 PM] Rory Hanna-Ryant: We need ur help with some wolf spiders
[2023-07-02, 9:43:24 PM] ~ Maisie: Ah
[2023-07-02, 9:43:28 PM] ~ Maisie: Um, okay
[2023-07-02, 9:46:51 PM] ~ Mika: hey everyone, dinner is out and the microwave is available for anyone who would like to use it!
[2023-07-02, 9:56:53 PM] ~ Uri Oberlander: when is big day planning occurring
[2023-07-02, 9:57:20 PM] ~ Jane: now
[2023-07-02, 9:57:24 PM] Ezra: good q
[2023-07-02, 9:57:25 PM] Ezra: now
[2023-07-03, 12:22:26 AM] ~ Mica: Hi I think I left a pair of pants in a garbage bag in the gezer. Please don’t let them get thrown out!! If someone could locate them they would be an absolute g
[2023-07-03, 12:22:40 AM] ~ Mica: (They are my dark blue cargo pants for all invested)
[2023-07-03, 12:24:46 AM] ~ Jane: Is kima the same time for people going to pick up kids
[2023-07-03, 12:36:57 AM] Ron: Pls hml if u find a purple Nalgene
[2023-07-03, 1:20:40 AM] ~ Jane: image omitted
[2023-07-03, 1:20:47 AM] ~ Jane: yo what is this in the mo
[2023-07-03, 1:35:41 AM] Rafi: Kima?
[2023-07-03, 1:38:52 AM] Yonnie: French onion soup?
[2023-07-03, 1:48:00 AM] ~ Gal Icek: 8
[2023-07-03, 1:48:08 AM] ~ Gal Icek: Aruchat boker 8:30
[2023-07-03, 2:11:39 AM] ~ Lila: we’re watching pitch perfect in the mo everyone should come!
[2023-07-03, 2:12:07 AM] Tyler: Sorry I’m not gay like that
[2023-07-03, 3:17:16 AM] ~ Noa Franklin: Ok guys who put the dead mouse in our ohel?
[2023-07-03, 3:17:26 AM] ~ Noa Franklin: I’m not mad I just want to know
[2023-07-03, 3:19:04 AM] ~ mai: Who wants to come clean her up😜😜😜
[2023-07-03, 12:34:50 PM] ~ Kiran: I lost my tall blue water bottle, no stickers, has a short rainbow friendship bracelet attached to it. I need it ASAP! Please let me know if you’ve seen it
[2023-07-03, 12:37:07 PM] ~ Jackson Nozick: image omitted
[2023-07-03, 12:40:11 PM] ~ Kiran: The water bottle has been fpund
[2023-07-03, 12:41:00 PM] Rafi: https://forms.gle/RgBeT9iQjWt5tmu6A
[2023-07-03, 1:04:58 PM] ~ Noa Franklin: hey if anyone sees my mac charger pls lmk, it has a piece of green tape w my name on it
[2023-07-03, 1:34:39 PM] ~ hannah: image omitted
[2023-07-03, 1:35:26 PM] ~ Kiran: Hey folks I need a chultza asap does anyone have one I can borrow plz
[2023-07-03, 1:35:50 PM] ~ Tal Fisher-Taylor: Nitanimot tzevet where are you??
[2023-07-03, 1:38:35 PM] ~ Ana: Reminder to everyone to bring your chultzot to pick up!!!
[2023-07-03, 2:13:53 PM] ~ Daniel: Did anyone move the nitz calendar on the back left table of chadar⁉️⁉️⁉️
[2023-07-03, 2:42:47 PM] Rory Hanna-Ryant: Hey, idc who it was, but for future reference, please DO NOT mess with the plants. I discovered that my new tomatoes had been mutilated this morning. Very sad, they were just started to bloom flowers
[2023-07-03, 3:49:57 PM] Cate: Hey guys !
[2023-07-03, 3:50:23 PM] Cate: I lost my favorite necklace. It could be anywhere at camp
[2023-07-03, 3:50:35 PM] Cate: image omitted
[2023-07-03, 3:50:51 PM] Cate: It is the necklace on top
[2023-07-03, 3:50:54 PM] ~ Maisie: Oof
[2023-07-03, 3:51:09 PM] Cate: If anyone see's in please lmk!! Thank you:)
[2023-07-03, 3:51:13 PM] Cate: Ikr MAJOR OOF
[2023-07-03, 4:06:21 PM] Shai Rubin: I think you were wearing it when we were at the slab last night
[2023-07-03, 4:06:26 PM] Shai Rubin: and I didn’t see you take it off
[2023-07-03, 4:06:36 PM] Shai Rubin: so not there, probably
[2023-07-03, 4:40:14 PM] Cate: This message was deleted.
[2023-07-03, 4:41:07 PM] Cate: This message was deleted.
[2023-07-03, 4:41:15 PM] Cate: This message was deleted.
[2023-07-03, 4:57:59 PM] Rue: For those currently on the ferry: if you have left over honey mustard pls bring it over to me.
[2023-07-03, 4:59:17 PM] ~ Ariella Smith-Eidelman: GIF omitted
[2023-07-03, 5:05:49 PM] Yarden: also I have fries that I regret buying
[2023-07-03, 5:05:58 PM] Yarden: somebody munch them
[2023-07-03, 5:06:48 PM] Tyler: How did u get a video of my balls?
[2023-07-03, 5:12:56 PM] ~ agustina: noga will give u hers
[2023-07-03, 5:37:18 PM] Mira: Hey! Just a reminder for anyone using glitter that its super super important not to clean glittery dishes in the sink because it’s super bad for the environment!
[2023-07-03, 5:38:28 PM] Mira: Also please actually clean your dishes and don’t just leave them in the sink, I would really appreciate it
[2023-07-03, 5:39:05 PM] Mira: I’m in the myad if anyone needs help with glitter dishes
[2023-07-03, 5:55:29 PM] ~ eli gerut: does anyone know if the brecha is usable?
[2023-07-03, 6:02:46 PM] Rory Hanna-Ryant: Ask Michelle
[2023-07-03, 6:19:01 PM] ~ Michelle Worland: What do you mean usable?
[2023-07-03, 7:08:57 PM] Ron: Pls hml if u find pairs of black saxx underwear in ur laundry 🙏🙏
[2023-07-03, 7:21:56 PM] ~ Talia Joffe: image omitted
[2023-07-03, 7:31:28 PM] ~ Daniel: Where did that hoda'a say to go 🤨
[2023-07-03, 7:31:41 PM] ~ Ariella Smith-Eidelman: Medura pit
[2023-07-03, 7:32:03 PM] Tyler: Rn?
[2023-07-03, 7:32:17 PM] ~ Ariella Smith-Eidelman: Ya
[2023-07-03, 7:32:29 PM] Tyler: Lit omw
[2023-07-03, 7:42:11 PM] ~ Gal Icek: Golda
Makom yafe meod
Yanush
Ad gordon
Pish bowl
Gezer
Medura pit
Mirpeset
Tree house
[2023-07-03, 8:24:54 PM] ~ Prielle Laniado: text me if youre in vaad yom meyuchad asap!
[2023-07-03, 8:25:15 PM] Tyler: Zev is
[2023-07-03, 8:57:31 PM] ~ Jackson Nozick: Open Letter Response_Camp Committee.pdf • 2 pages document omitted
[2023-07-03, 10:36:55 PM] ~ Maisie: image omitted
[2023-07-03, 11:41:35 PM] ~ maya: what’s the luz for tomorrow (before kids arrive)?
[2023-07-04, 12:19:30 AM] ~ mai: image omitted
[2023-07-04, 12:20:10 AM] ~ Zachary Bunim: image omitted
[2023-07-04, 1:12:11 AM] ~ Alex (shmeppy): image omitted
[2023-07-04, 1:13:04 AM] ~ Jane: you’re*
[2023-07-04, 1:13:22 AM] ~ Alex (shmeppy): fuck
[2023-07-04, 8:13:25 AM] Yonnie: Victoria pickup peeps awake yet?
[2023-07-04, 12:17:34 PM] ~ Daniel: The bat is back on the left side of mains jsyk
[2023-07-04, 1:03:43 PM] ~ Lila: video omitted
[2023-07-04, 1:19:17 PM] ~ Jackson Nozick: Moose
[2023-07-04, 1:47:16 PM] ~ Daniel: Who's kid is this ?
[2023-07-04, 2:32:38 PM] India: ❗️hiyoosh! ❗️
this is an important message for shawties who are off the island for big day.
[2023-07-04, 2:33:35 PM] India: when you get back to machaneh at some point u should head to the bayit to write ur kupa amount, and put it in the envelope
[2023-07-04, 2:37:46 PM] India: the recommendation is 5-8%
[2023-07-04, 2:38:11 PM] India: but remember that is jus a recommendation so pls do what makes sense for ur needs :)❤️
[2023-07-04, 3:14:29 PM] Mira: I’ve put some red yarn out on the myad table in case anyone needs it for chultzot (idk if I spelled that right)
[2023-07-04, 3:16:07 PM] ~ Michelle Worland: If someone isn’t busy… can you please come help me at the pool? I got to move a tarp and it’s really heavy. Thanks
[2023-07-04, 3:48:32 PM] Rafi: image omitted
[2023-07-04, 4:33:04 PM] Rue: A reminder for later: Eva is running the Michzur station, Mira is running the myad station, yonni is running the chadar station and Noa and Ana are running the sumo station
[2023-07-04, 4:36:34 PM] ~ Ariella Smith-Eidelman: also michelle is running the brecha station
[2023-07-04, 4:48:48 PM] Rafi: @16043651302 do we fill out the pool form if we need a lifeguard for the chof for something
[2023-07-04, 4:49:08 PM] ~ Ariella Smith-Eidelman: Yes please
[2023-07-04, 4:54:19 PM] ~ Mica: Does anyone need to be wowed?
[2023-07-04, 4:54:36 PM] ~ Mica: image omitted
[2023-07-04, 4:55:01 PM] Ezra: Day 3 tortillas
[2023-07-04, 4:55:04 PM] Rafi: I ❤️ Oli
[2023-07-04, 5:01:35 PM] ~ Maisie: image omitted
[2023-07-04, 5:03:06 PM] ~ Maisie: It had a big white brick and a black braided USB type C to Lightning cable.
[2023-07-04, 5:13:30 PM] ~ Lila: image omitted
[2023-07-04, 5:26:14 PM] ~ Ariella Smith-Eidelman: image omitted
[2023-07-04, 5:27:20 PM] ~ Solomon Bodrug: and do u need dietary
[2023-07-04, 5:47:40 PM] ~ agustina: oh sorry thats nitz we need 21 cupcakes and no dietary restrictions
[2023-07-04, 6:55:39 PM] ~ Ariella Smith-Eidelman: for when?
[2023-07-04, 8:48:12 PM] ~ Maisie: If anyone sees a charger matching this description please lmk!
[2023-07-04, 9:01:10 PM] ~ Noa Franklin: image omitted
[2023-07-04, 9:56:56 PM] Arielle: Found a phone in the lowers it’s got a unicorn sticker under the case
[2023-07-04, 9:57:14 PM] Arielle: This
[2023-07-04, 9:57:17 PM] Arielle: Also
[2023-07-04, 10:32:07 PM] Rafi: https://forms.gle/RgBeT9iQjWt5tmu6A
[2023-07-04, 10:32:48 PM] Rafi: Hello everyone! Only 17 ppl filled out this form and there are more than that of you all. Please fill this out otherwise you will be assigned randomly
[2023-07-04, 10:33:31 PM] Rafi: Actually only 17 of you did the form with their name
[2023-07-04, 10:33:42 PM] Rafi: So if u did not put on ur name on it
[2023-07-04, 10:33:42 PM] Rafi: Please do it again
[2023-07-04, 10:48:15 PM] Tyler: Dibs
[2023-07-04, 10:48:21 PM] Tyler: Need it for a door
[2023-07-05, 12:14:09 AM] Gali Goldman: can someone send a picture of the yom ragil seder yom
[2023-07-05, 12:24:49 AM] ~ Solomon Bodrug: It’s Hannah’s! She will be in the Techni office
[2023-07-05, 12:37:54 AM] ~ Prielle Laniado: !
[2023-07-05, 1:17:24 AM] ~ Lila: does anyone have a samsung phone charger ideally that i can grab tonight
[2023-07-05, 2:28:49 AM] Shai Rubin: If anyone sees a yellow, blue and white hydraflow waterbottle (possibly somewhere around the janusz?? idk) can you please let me know :) thank you
[2023-07-05, 2:29:43 AM] ~ Daniel: I think I literally just saw a yellow water bottle on the janusz while looking for my bottle lol
[2023-07-05, 2:36:44 AM] Cate: Yes!  Where are you?
[2023-07-05, 2:36:52 AM] Cate: I can bring it to u
[2023-07-05, 3:37:51 AM] ~ Sadie Quinn: image omitted
[2023-07-05, 3:38:22 AM] ~ Uri Oberlander: catwatchers!!
[2023-07-05, 3:38:49 AM] ~ scotty: #catwatchers2021
[2023-07-05, 3:54:12 AM] Ezra: @tzofimot where is your big day package
[2023-07-05, 4:02:40 AM] ~ scotty: agh! going to get it from the shetach now, should i bring to techni office?
[2023-07-05, 6:47:11 AM] ~ Michelle Worland: Is anyone awake? Our door is jammed and kids need to pee!!
[2023-07-05, 1:17:15 PM] Rafi: image omitted
[2023-07-05, 1:30:52 PM] Rory Hanna-Ryant: Can I join pinecone collecting?
[2023-07-05, 1:44:17 PM] ~ Jane: image omitted
[2023-07-05, 1:44:45 PM] Ezra: Belongs to camp
[2023-07-05, 3:09:10 PM] ~ Michelle Worland: Pool isn’t open for sports.. right?
[2023-07-05, 3:09:23 PM] ~ Talia Joffe: No there are swim tests
[2023-07-05, 3:34:51 PM] Tyler: Where are elections happening ?
[2023-07-05, 3:35:04 PM] Rue: janusz
[2023-07-05, 3:39:15 PM] ~ Mikal Stein: Can someone send toranut list?
[2023-07-05, 3:45:34 PM] Yonnie: image omitted
[2023-07-05, 3:45:46 PM] Yonnie: + jane and meirav
[2023-07-05, 3:45:50 PM] Yonnie: Mairav*
[2023-07-05, 4:04:01 PM] Rafi: Sure
[2023-07-05, 4:13:40 PM] ~ agustina: image omitted
[2023-07-05, 5:47:27 PM] Rory Hanna-Ryant: One of my kids needs a charging block that plugs into a USB-C….if anyone has?
[2023-07-05, 5:50:34 PM] Rory Hanna-Ryant: Haha nvm she found the one she lost🤦🏻‍♀️
[2023-07-05, 5:55:20 PM] Gali Goldman: can someone please volunteer to take a few photos on their phone during shira today? I won't be at machaneh!
[2023-07-05, 5:59:23 PM] ~ Jackson Nozick: image omitted
[2023-07-05, 6:00:28 PM] ~ Talia Joffe: Tzevet asepha notes - July 5th
don’t be on your phone in front of kids!!
fill out the zman sports Google form (with names) + try to get to zman sports in time so you can get assigned to things in time
EGE!! We need to be singing at shira and help people learn the songs and singing can help with that - keep the tempos too
mifkad was confusing, if you’re running an anaf you need to be at mifkad on time and holding your anaf sign so kids know where to go + when do kesher meetings start and when (happening tomorrow)
Count your kids during mifkad and breakfast!
elections were sad - tzevet should have been sitting with their kids and actually engaged. Difference between being present and being on!
kids shouldn’t just be leaving the chadar during lunch, unless they’re overwhelmed. We need to know where kids are at all times! Go find your kids if you notice they’re gone. They don’t need to go to their tzrif during lunch
If you see kids not at programming, ask them where they’re going. Help out tzevet by making sure kids are where they need to be!
Kids shouldn’t be going straight to the picky eaters table! They need to try the meal first
If kids go to picky eaters table, make sure they come back to the table
Don’t let kids slam the chairs and benches during lunch shira
if you want to have high tea with Leya, you need to tell her so she knows and can arrange it.
Put in your tzevet kupa!!! You put in your amount, not percentage, and include your name! You can ask noga for your salary if you need(It’s in the bayit)
Kids can’t have iPod touches - any device that is wifi enabled is not allowed at camp
If kids have an iPod or mp3 player they should be left in the tzrif
If you see a kid with a device, either get them to put it away, or get their tzevet to tell them to
If kids have passports, they need to be brought to Noga/Leya/the bayit
Check the big calendar so you know what your jobs are this session (the calendar is in the mo, techni, and was sent to the group chat)
If you’re unsure about the tafkid, ask someone what to do
Madrichol toran as the person who did it the day before to find out when you should wake up
During hodaot, when 2 fingers are up we can continue making noise, when 3 fingers are up we stop making noise and listen (3 fingers go up at 2:20)
Keep the 7/11 clean!!! Clean up after yourself!
count your kids all the time!! Communicate with tzevet when counting kids so everyone knows what’s going on
Things are breaking at machaneh rapidly, if we see something if broken, TELL EZRA!
If you bring a kid to the mirp, you need to communicate that to your tzevet!
remind med kids to wait outside of the mirp! Don’t walk into the exam room until told to enter
If a kid wants to be seen by the medic, one tzevet member needs to accompany them
Make sure kids are drinking water!! Fill their cups and make sure they’re drinking
tell gal if your kids want to be in the Hebrew fluent ivrit group!! Tell gal ahead of time so she can prepare for the number of kids that will come
Shira off blocks are posted in the mizrach rosh
many headless rats around machaneh, if you see one, tell rat specialist zac about it
prep for your consent erev kvutzah tonight during zman chofshi after dinner!!
Make sure kids come for meds before 10pm tonight.
the 7/11 is officially open, take care of it. Make sure the sevvy door is as closed as possible. Clean rims of containers! We cannot feed kids food from the sevvy
milk crate in the machzan labelled “sicha Lila” with a bag for each tzevet, grab your bag tonight for your sicha
Make sure kids are wearing proper shoes around machaneh!
[2023-07-05, 10:32:39 PM] ~ Michelle Worland: This was left by the pool. It belongs to someone named Alex Dorphan.
[2023-07-05, 10:32:39 PM] ~ Michelle Worland: There is also a red binder type note pad thing as well by the pool
[2023-07-05, 10:32:40 PM] ~ Michelle Worland: Also some nice clear goggles.
[2023-07-05, 10:32:40 PM] ~ Michelle Worland: Please ask your kids if it’s theirs
[2023-07-05, 10:38:35 PM] Rory Hanna-Ryant: This message was deleted.
[2023-07-05, 11:03:00 PM] ~ lily cohen: This message was deleted.
[2023-07-06, 2:02:15 AM] ~ Dani: Alex is one of my kids, in Amelimot. I'll let him know. What did he leave behind?
[2023-07-06, 4:04:34 AM] ~ mai: video omitted
[2023-07-06, 11:16:34 AM] ~ Prielle Laniado: are we back to cat watchers now!!!
[2023-07-06, 11:37:33 AM] Rue: I need 3 ppl who feel comfortable teaching a Rikkud dance of your choice for zman sport! Please text me privately. - Rafi (don’t text rue, text rafi)
[2023-07-06, 12:12:49 PM] ~ Oliver: HELLO FRIENDS I’m missing all of my laundry that came back the day we left for madatz Tiyul. It would be sooooo fire if someone knew where it is! Thanks
[2023-07-06, 12:21:58 PM] ~ Gavriella TroperHochstein: Madatz tzevet has it
[2023-07-06, 12:28:51 PM] ~ Michelle Worland: image omitted
[2023-07-06, 12:40:09 PM] ~ Prielle Laniado: hellooo where is gan? i am at the gan and nobody’s here :(
[2023-07-06, 1:00:42 PM] Rafi: image omitted
[2023-07-06, 1:56:21 PM] ~ Talya Stein: This message was deleted.
[2023-07-06, 2:04:27 PM] ~ Maisie: GOOBIE’S BACK!?
[2023-07-06, 2:54:59 PM] Rue: If you want to be a character for yom meyuchad please DM me ASAP— everyone will be a character in some capacity!
[2023-07-06, 2:55:13 PM] Yonnie: if the cat is back, then Goobie is probably long gone 😔
[2023-07-06, 3:09:52 PM] ~ Gavriella TroperHochstein: Rest in pieces 🐀
[2023-07-06, 3:34:53 PM] Yonnie: image omitted
[2023-07-06, 3:58:00 PM] ~ Michelle Worland: Ethan PJ has goggles and a goggles case left by the pool. Please come get it if it’s your kid
[2023-07-06, 4:25:15 PM] ~ Mica: Tzevet! Your madatz have all been assigned! Make them feel welcome on your tzvatim :)

Amelimot:
- bec
- Ella
- sunny
- Gemma

Chalutzimot:
- Nina
- Grace
- Talia
- Leo

Sayarimot:
- Allison
- Lola
- Elias
- Ariel

Chotrimot
- Molly
- clementine
- Siena
- liad
- Reuben

Shomrimot:
- jascha
- tali
- Sivan
- sophie

Tzofimot:
- Chloe
- ayelet
- Jacob
- Adao
- Sahra (coming on the 14th)
[2023-07-06, 4:48:10 PM] Gali Goldman: if you have any photos please send them over to me!
[2023-07-06, 5:16:00 PM] Tyler: ITS LIT!
[2023-07-06, 5:28:53 PM] ~ Maisie: Aw man 😔
[2023-07-06, 5:54:51 PM] ~ hannah: kid just walked into the mo 🔥
[2023-07-06, 5:56:05 PM] ~ Mika: i think thats my kids bag
[2023-07-06, 6:06:07 PM] ~ mai: image omitted
[2023-07-06, 6:11:12 PM] ~ Mica: Zman madatz is starting at 3:30!!!!!
[2023-07-06, 6:11:37 PM] ~ Mica: Different from the Seder Yom for today!!!!!!!
[2023-07-06, 6:21:55 PM] Rory Hanna-Ryant: Which kid?
[2023-07-06, 6:24:09 PM] ~ hannah: not sure, prolly a middle kvutsa though
[2023-07-06, 6:38:26 PM] ~ Michelle Worland: If it is. It’s been taken. I’m assuming by the kid
[2023-07-06, 7:00:56 PM] ~ Lila: can you like this message if ur willing to help out with my noetz proposal it just involves wearing a black shirt with a letter on it :)
[2023-07-06, 7:01:41 PM] ~ Lila: hoping to do it at lunch tmrw!
[2023-07-06, 8:45:19 PM] ~ Maisie: image omitted
[2023-07-06, 8:45:28 PM] ~ mai: Toranut list??
[2023-07-06, 8:46:45 PM] ~ Maisie: image omitted
[2023-07-06, 9:41:54 PM] ~ Mika: image omitted
[2023-07-06, 10:30:07 PM] Edden: ducks, come to the myad when you have changed into yellow shirts
[2023-07-06, 10:30:31 PM] Edden: (zac, rafi, mica)
[2023-07-06, 10:41:33 PM] Edden: DUCKS
[2023-07-06, 10:41:37 PM] Edden: COME TO MYAD
[2023-07-06, 10:43:10 PM] Edden: ESPECIALLY ZAC
[2023-07-06, 10:43:30 PM] ~ Gal Icek: @16048625227 🐥🐥🐥
[2023-07-06, 10:46:25 PM] ~ Prielle Laniado: has anyone found a pair of airpods recently? they have a sparkly silver sticker on them
[2023-07-06, 10:51:29 PM] ~ Talia Joffe: image omitted
[2023-07-06, 10:53:09 PM] ~ Lila: this is amazing
[2023-07-06, 11:12:38 PM] ~ agustina: pls turn off the speakers my kids are doing bedtime rn
[2023-07-06, 11:12:59 PM] ~ Ariella Smith-Eidelman: so sorry
[2023-07-06, 11:13:03 PM] ~ Ariella Smith-Eidelman: so so sorry
[2023-07-06, 11:13:32 PM] ~ Mica: Embarassing
[2023-07-06, 11:44:40 PM] Yvonne: Hey, would anyone who has done shmira before like to switch with me tonight?
[2023-07-07, 12:06:27 AM] Ron: Miriam I don’t have your number to text u individually what time did you go to gaga pit toran
[2023-07-07, 1:25:50 AM] Rory Hanna-Ryant: @14038162542 can u come to the Chalutzimot please
[2023-07-07, 1:26:03 AM] ~ Talia Joffe: Omw
[2023-07-07, 1:37:00 AM] ~ miriam bohbot: go at 6:40 today
[2023-07-07, 1:37:01 AM] ~ miriam bohbot: tomorrow *
[2023-07-07, 1:42:47 AM] Rue: Yom Meyuchad come to the rosh's office
[2023-07-07, 2:17:19 AM] ~ mai: If anyone is free rn
[2023-07-07, 2:17:24 AM] ~ mai: Bonimot really needs help
[2023-07-07, 2:17:26 AM] ~ mai: In chadar
[2023-07-07, 2:17:30 AM] Rory Hanna-Ryant: With what
[2023-07-07, 2:45:07 AM] ~ mai: Thank you for everyone’s help 🙏🙏🙏 very appreciated
[2023-07-07, 2:45:26 AM] Ron: ^^ tysm❤️
[2023-07-07, 3:05:00 AM] Elsbeth: Can anyone from madatz tzevet plz come to the misrad rosh pls 😊❤️
[2023-07-07, 3:58:42 AM] Rafi: Is Kima tmrw later than usual?
[2023-07-07, 3:59:06 AM] ~ Gal Icek: 8:45
Yom shishi like in the tochnit
[2023-07-07, 4:05:49 AM] Rafi: Thanks
[2023-07-07, 6:18:53 AM] Yvonne: image omitted
[2023-07-07, 6:19:00 AM] Yvonne: Caught by shmira
[2023-07-07, 10:36:10 AM] ~ Maisie: Adorable
[2023-07-07, 11:57:40 AM] ~ blue: does anyone have a bike i can borrow for today?
[2023-07-07, 1:11:32 PM] ~ mai: Reminder!!!! If your name is Jane, Prielle, Zev, Elsbeth, Tyler, Gal, Roie, Miriam, Mica, Lily, Rafi, Ilana, Oliver YOU HAVE A CHUG ALEF TO PLAN + PREP. If your name is Shir, Alias, Rafi, Shmeppy, Arielle, Maya, Zac, Lila, Maayan, Edden, YOU HAVE A CHUG BET TO PLAN + PREP!!!!! I’m here to help, lmk if you have any questions 🍓🍓🍓
[2023-07-07, 1:13:08 PM] ~ mai: If you need a certain location, let me know asap, remember to consider if you’ll need wifi
[2023-07-07, 1:50:56 PM] ~ Ilana Sela: Amelimot tzevet when your kids are changed meet at the lower kvish!
[2023-07-07, 1:51:35 PM] Ron: Can someone announce bonimot to come to shetach
[2023-07-07, 2:12:43 PM] ~ Jackson Nozick: image omitted
[2023-07-07, 2:23:04 PM] ~ Jackson Nozick: image omitted
[2023-07-07, 2:25:03 PM] ~ Zachary Bunim: IF YOU ARE OFF TONIGHT PLEASE TELL ME ASAP SO I DONT ASSIGN YOU TO A MISHPACHA!!
[2023-07-07, 2:25:05 PM] ~ Zachary Bunim: thank you
[2023-07-07, 2:25:35 PM] ~ Lila: everyone is doing great i’m proud of you all
[2023-07-07, 2:29:19 PM] ~ Talia Joffe: I’m off!!
[2023-07-07, 2:48:44 PM] ~ maya: IM OFF
[2023-07-07, 2:58:18 PM] ~ blue: tyler and i are off
[2023-07-07, 3:29:15 PM] Yonnie: image omitted
[2023-07-07, 4:09:57 PM] ~ Uri Oberlander: image omitted
[2023-07-07, 4:10:29 PM] ~ Uri Oberlander: and @12369970056 this is not on you at all and you shouldn’t have to do these dishes by yourself
[2023-07-07, 4:10:44 PM] ~ Uri Oberlander: i’m gonna start on them now if anyone want to help come to mitbach
[2023-07-07, 4:11:20 PM] ~ Uri Oberlander: let’s stop treating the sevvy like doo-dooo
[2023-07-07, 4:11:51 PM] ~ Uri Oberlander: actually mad disappointing. thank you for listening to my rant
[2023-07-07, 4:24:40 PM] ~ Kiran: Also don’t leave the milk out this is the second time I’ve found milk out and warm. No need to waste perfectly good food
[2023-07-07, 4:25:08 PM] ~ Gavriella TroperHochstein: Does anyone want to hand out oranges? I am not strong enough to lift the bin
[2023-07-07, 4:29:34 PM] ~ Shelly Kositsky: Also whoever was supposed to wash the sevy dishes - you are neglecting your duties
[2023-07-07, 4:35:28 PM] Cate: I can!
[2023-07-07, 4:56:00 PM] ~ scotty: IF YOU HAVE KIDS WHO WANT TO SHOWER SEPARATELY FOR GENDER REASONS PLS MESSAGE ME ASAP W/ KVUTZAH AND NUMBERS! and you should still send them during your designated shower time! thanks all!
[2023-07-07, 5:21:01 PM] ~ Ilana Sela: Ollie and I are available to shower if anyone needs extra tzevet
[2023-07-07, 5:21:12 PM] ~ Oliver: Facts
[2023-07-07, 5:25:01 PM] Omer: Tzofimot
[2023-07-07, 5:25:01 PM] Omer: We need it
[2023-07-07, 5:25:16 PM] Omer: Especially oliver
[2023-07-07, 5:31:55 PM] ~ Oliver: 3:30? We
[2023-07-07, 5:31:59 PM] ~ Oliver: 🔥
[2023-07-07, 5:33:28 PM] ~ Sadie Quinn: Shabbat sidrei Yom are on the shelf by the door of the misrad techni! Pick one up for your tzevet!
[2023-07-07, 5:50:28 PM] ~ Michelle Worland: Some kids asked me… after they shower should they change into their Shabbat clothing?
[2023-07-07, 5:50:53 PM] ~ Ariella Smith-Eidelman: Yep!
[2023-07-07, 6:07:08 PM] Rue: Hi, if you’re starting chofesh rn (the 3 to 3) pls come to the Misrad Ross
[2023-07-07, 6:07:15 PM] Rue: Rosh*
[2023-07-07, 8:17:14 PM] Rory Hanna-Ryant: @cate I think there is a nitz in the walking group
[2023-07-07, 8:17:20 PM] Rory Hanna-Ryant: I know y’all are collecting them
[2023-07-07, 9:25:29 PM] ~ hannah: image omitted
[2023-07-07, 9:28:40 PM] ~ Shani Avrahami Saraf: image omitted
[2023-07-07, 9:34:09 PM] Ezra: https://docs.google.com/forms/d/e/1FAIpQLSe7FkMPnwZipoqDw-Fe0M1xU60eLoDFekK6BN_57FCulTi1Sg/viewform
[2023-07-07, 9:57:56 PM] ~ Maisie: Someone please call me when you guys are about to leave for the beach.
[2023-07-07, 10:47:20 PM] ~ Solomon Bodrug: If you are in charge of slicing oranges they are on the prep table for you :)
[2023-07-07, 11:11:45 PM] Gali Goldman: Can someone please take some photos of rikkud for me
[2023-07-08, 12:19:57 AM] ~ Ariella Smith-Eidelman: Chevrati in the mo at 11pm
[2023-07-08, 12:21:33 AM] ~ Gal Icek: GIF omitted
[2023-07-08, 12:21:39 AM] ~ Ariella Smith-Eidelman: be there or be sad
[2023-07-08, 12:44:02 AM] ~ Daniel: Is it gonna be fun
[2023-07-08, 12:44:07 AM] ~ Daniel: Be fr
[2023-07-08, 12:44:17 AM] ~ Ariella Smith-Eidelman: Obviously
[2023-07-08, 1:27:18 AM] ~ Solomon Bodrug: Hello, If you are planning an activity in the next few days and require materials/things from mitbach, please text me the whowhatwherewhenwhy so I can make sure you get what you need! This includes if you have spoken to me already because I probably forgot
[2023-07-08, 1:32:55 AM] ~ mai: Do we need anything? Also bonimot tzevet will be late
[2023-07-08, 1:33:10 AM] ~ Ariella Smith-Eidelman: Just yourselves
[2023-07-08, 1:33:11 AM] ~ Ariella Smith-Eidelman: Okie
[2023-07-08, 1:34:32 AM] ~ Noa Franklin: Wait can it not be
[2023-07-08, 1:34:46 AM] ~ Noa Franklin: Our kids don’t go to bed until 11:30 earliest
[2023-07-08, 1:35:06 AM] ~ Noa Franklin: I don’t wanna be sad :(
[2023-07-08, 1:35:58 AM] ~ Ariella Smith-Eidelman: Ok correction we will start at 11:30
[2023-07-08, 3:15:12 AM] ~ Ariella Smith-Eidelman: https://forms.gle/RGJHQ6MbektKcVy78
[2023-07-08, 3:28:36 AM] ~ Noga Goldman: image omitted
[2023-07-08, 3:31:16 AM] ~ maya: true love is real
[2023-07-08, 4:13:24 AM] ~ Jackson Nozick: video omitted
[2023-07-08, 4:14:29 AM] Zev: video omitted
[2023-07-08, 4:26:49 AM] ~ Michelle Worland: Can someone help me lift the paddle board and help me put it away? It requires upper body strength… which I don’t have. Thanks… also it needs to be done tonight cause yeah
[2023-07-08, 4:28:50 AM] ~ Michelle Worland: Please someone help me
[2023-07-08, 4:29:13 AM] ~ Maisie: image omitted
[2023-07-08, 4:52:32 AM] Rafi: image omitted
[2023-07-08, 5:01:41 AM] ~ mai: image omitted
[2023-07-08, 9:49:11 AM] ~ Maisie: Have you pet the cat yet?
[2023-07-08, 9:49:52 AM] ~ Maisie: Zev, why you goin all apeshit and swinging your phone around
[2023-07-08, 1:00:47 PM] ~ hannah: does anyone have a bike i can borrow for the day? i’ll give u a super special hannah related gift
[2023-07-08, 1:02:53 PM] ~ Sadie Quinn: image omitted
[2023-07-08, 1:03:50 PM] Rafi: Thanks Sadie !! 🥳
[2023-07-08, 1:28:29 PM] ~ Maisie: I need a bike too, please~!
[2023-07-08, 1:31:41 PM] ~ Sadie Quinn: image omitted
[2023-07-08, 1:32:22 PM] ~ Sadie Quinn: image omitted
[2023-07-08, 2:01:03 PM] ~ Noa Franklin: image omitted
[2023-07-08, 2:06:01 PM] Rory Hanna-Ryant: I saw who it was and I’m coming for you
[2023-07-08, 2:06:16 PM] ~ Michelle Worland: I SAW YOU AND BE WARNED
[2023-07-08, 2:06:47 PM] ~ Noa Franklin: #notattractive
[2023-07-08, 2:11:39 PM] ~ mai: Send me funny things about your kids from the week for triple M!!!!! Embarrass the children!!!!!!!
[2023-07-08, 2:14:44 PM] Ron: Bonim ruined the mitz
[2023-07-08, 2:24:09 PM] ~ Solomon Bodrug: Bumping! This is really important! I cannot get you what you need if I have zero info about it!!!
[2023-07-08, 2:48:35 PM] ~ Sadie Quinn: Come to the chadar if you’re on toranut for lunch! That’s Jane, Uri, Noa B, Yair, Mergui, Jackson, Roie, and Omer (and anyone who is free at the moment!)
[2023-07-08, 2:49:59 PM] ~ Roie Bargil: I’m not feeling well is there anyone who is willing to swap with me?
[2023-07-08, 2:52:19 PM] Ron: Does anyone that has the rikkuf google drive could send it to me plsls
[2023-07-08, 2:57:33 PM] ~ Jane: coming!
[2023-07-08, 2:58:45 PM] ~ Noga Goldman: Whats your email?
[2023-07-08, 3:11:12 PM] ~ Noa Franklin: What time does this block end?
[2023-07-08, 3:11:28 PM] ~ Noa Franklin: Actually could someone send a pic of the seder Yom?
[2023-07-08, 3:11:51 PM] ~ Solomon Bodrug: image omitted
[2023-07-08, 3:30:04 PM] Cate: Talya we have a kid that needs you
[2023-07-08, 3:30:22 PM] ~ Talia Joffe: where are you?
[2023-07-08, 3:32:56 PM] Cate: Were in the techni office
[2023-07-08, 4:53:43 PM] Rory Hanna-Ryant: Where r the runners meeting
[2023-07-08, 5:04:06 PM] ~ Mica: In front of the mirp
[2023-07-08, 5:04:09 PM] ~ Mica: About to leave
[2023-07-08, 6:58:43 PM] ~ Tal Fisher-Taylor: Some more notes for asepha:
New nurse today, her name is Feruz, she'll be with us for 3 weeks, please be nice!
[2023-07-08, 7:16:53 PM] ~ Talia Joffe: Tzevet asepha - July 8
 Brian says hi
One tzevet member goes to madatz peula, the rest of us go to mo for tzevet peula on Jewish revenge
Tzevet laundry on Monday (kids aren’t doing it) (no laundry for uri). If we want to do it we must put it in the van by midnight tomorrow (Sunday) night. The laundry won’t be back before Tiyul. We will do more laundry after tiyul.
2 week kids don’t do laundry
The next order is on Monday. Put your orders in tomorrow (Sunday) night
Tell the mitbach a week ahead if you need things from them (and specify how many people and dietary restrictions)
Don’t go into the freezer and/or walk-in without permission
Keep the 7/11 clean!!
Nothing goes on the bottom shelf of the sevvy fridge
Part of the madrichol torans job is to wipe up the water at the bottom of the sevvy fridge
Collective responsibility
When walking to the point and twin make sure people are walking 2-3 in a row. It’s for safety!!
Kids can’t cross the street without tzevet there crossing them (specifically the tzevet that is responsible for them in that moment)
Jackson’s happy and grateful, however be more quiet when walking by shomrimot shetach at night
Be quiet when walking through lower machaneh (remind older kids too)
Tick checks during mifkad and at night (new tick check song?)
Make sure you’re doing your tafkidim during Shabbat or check in if you can’t
Kids shouldn’t be skipping chug alef and bet - make sure you’re kids are where they need to be
We’re not allowed to take pictures of/with kids on our phones
You’re still on during Rikkud - shetach toran if your kids want to hang in the tzrif
Don’t sleep in past 10 on saturdays. Get your kids up and go breakfast
If you have kids going in cars, don’t forget about them! Keep track of your kids and let drivers and merp know - communicate. You need to check with the medics to see if your kid can get driven (do this BEFORE we’re about to leave)
Send kids for meds so they don’t miss doses
WATER!!! Kids and tzevet need to be drinking water (5small cups per meal)
Keep for tzrifim clean!!
Don’t let kids pee on the steps of the pee tzrif
People who are on for shira need to help Ana with teaching the song
We need help tonight w/Kish for tomorrow
Encourage kids not to swear in lower machaneh
If you’re in riff raff and have specific needs for tiyul, let the Tiyul specialists know ahead of time (like now)
[2023-07-08, 7:30:53 PM] Yonnie: Hi Brian
[2023-07-08, 8:48:52 PM] ~ Prielle Laniado: who knows how to juggle
[2023-07-08, 8:51:32 PM] ~ hannah: @16043524401
[2023-07-08, 8:58:58 PM] Yonnie: Mason	Amelimot
Katherine 	Amelimot
Johnny	Bonimot
Geffen	Bonimot
Vincent	Chalutzimot
Dalia	Chalutzimot
Alma	Chotrimot
Roni	Chotrimot
Dani	Sayarimot
Judah	Sayarimot
Dov	Shomrimot
Brennen	Shomrimot
Ephraim	Tzofimot
Chloe	Tzofimot
Bec	Madatz
Yasha	Madatz
Mergui	Madrechimot
Rafi	Madrechimot
[2023-07-08, 8:59:15 PM] ~ Solomon Bodrug: There are 2 children and a single madatz doing toranut right now
[2023-07-08, 8:59:23 PM] ~ Mica: I’m on it!
[2023-07-08, 8:59:57 PM] ~ mai: Bumping this! Send to me or maayan or mikal!!!!!
[2023-07-08, 9:02:30 PM] ~ Talia Joffe: Reminder to tzevet:
If you have channies that get overwhelmed with change/need to know schedules, make sure to prepare them for a change in schedule tomorrow!! If you need help in figuring out how to let them know you can come to Mikal or me and we can talk through it with you!!
- your friendly neighbourhood Melavot
[2023-07-08, 9:42:53 PM] Ron: Got it! Tysm
[2023-07-08, 10:37:42 PM] ~ Uri Oberlander: is musicale underway
[2023-07-08, 10:50:24 PM] ~ Michelle Worland: Before your kids leave please have them walk past the pool to check if anything left behind is theirs. There is 3 pairs of goggles, a blue tshirt, a water bottle (heringblum), and a frisbee. Thanks
[2023-07-08, 11:06:18 PM] Gali Goldman: This message was deleted.
[2023-07-08, 11:06:45 PM] Gali Goldman: And pls fill it out by tomorrow night :)
[2023-07-08, 11:08:08 PM] Gali Goldman: hi!! IF YOU WANT TO GIVE INPUT ON WHAT WE DO ON OUR DAYS OFF, FILL THIS OUT!! https://docs.google.com/forms/d/e/1FAIpQLScpH3FEKIdynzH4VLBtkf6ZbWOH7VwJATF3Aaly5OBBEs9acQ/viewform?usp=pp_url
[2023-07-09, 12:26:21 AM] Rory Hanna-Ryant: @14038162542  are you on tonight? It’s gonna be a difficult one for J again
[2023-07-09, 12:28:22 AM] Tyler: Chotrimot Tzevet Malayan I’m on child w a tallish blonde child
[2023-07-09, 12:28:31 AM] Tyler: I forgot the name
[2023-07-09, 12:28:46 AM] Tyler: Maayan is on chof with **
[2023-07-09, 12:55:25 AM] ~ Prielle Laniado: hello! vaad yom meyuchad here!
[2023-07-09, 12:55:59 AM] ~ Prielle Laniado: once your kids are asleep PLEASE come to the myad for kish!!!
[2023-07-09, 12:58:44 AM] ~ Prielle Laniado: briefing will happen at *11:15 in the chadar * PLEASE DONT BE LATE (unless ur kids are old and go to bed later—you should talk to one of us if this is the case)
[2023-07-09, 1:21:14 AM] ~ Shani Avrahami Saraf: What time is kima tmrw?
[2023-07-09, 1:24:06 AM] ~ Jane: ^
[2023-07-09, 1:24:17 AM] Elsbeth: 8:45
[2023-07-09, 1:57:12 AM] ~ Zachary Bunim: shomrimot tzevet might be a little late. bedtime is taking longer than it should…
[2023-07-09, 1:58:45 AM] ~ Prielle Laniado: okaaaaay its looking like briefing will now be happening at 11:45 in the chadar!
[2023-07-09, 1:58:46 AM] ~ Alex (shmeppy): CAN SOMEONE PLS SWAP MADRICHOL TORAN WITH ME TMR (you don’t get yelled at during lunch tmr and i rlly want to)
[2023-07-09, 2:02:10 AM] ~ Alex (shmeppy): also i have a nofesh so i won’t be able to do dishes at night
[2023-07-09, 2:05:19 AM] ~ Lila: is anyone able to swap shmira with me
[2023-07-09, 2:18:18 AM] Shir: can someone please swap out Lila and I for shmira for tonight?
[2023-07-09, 2:38:43 AM] ~ Jackson Nozick: https://youtu.be/hwu6NrxVVFk
[2023-07-09, 2:45:14 AM] ~ Jackson Nozick: Clean version of barbie theme song for flashmob dance in chadar
[2023-07-09, 2:58:13 AM] ~ Prielle Laniado: ok briefing is happening nowwwwwwww
[2023-07-09, 2:58:19 AM] ~ Prielle Laniado: 🤩🤩🤩
[2023-07-09, 3:08:39 AM] ~ Jackson Nozick: https://docs.google.com/document/d/12tCnHIaT0FMmGQ4NZSQHtONU2UHTtgigh_SVrYytmf4/edit?usp=drivesdk
[2023-07-09, 3:08:47 AM] ~ Prielle Laniado: https://docs.google.com/document/d/12tCnHIaT0FMmGQ4NZSQHtONU2UHTtgigh_SVrYytmf4/edit?usp=sharing
[2023-07-09, 3:09:11 AM] ~ Jackson Nozick: It's editable btw
[2023-07-09, 3:10:57 AM] ~ Talia Joffe: @17786795412 please come to your tzrif
[2023-07-09, 3:42:02 AM] ~ Zevi: Does anyone have a leather jacket?
[2023-07-09, 3:43:13 AM] ~ Gal Icek: Costume boxes
[2023-07-09, 3:52:34 AM] ~ Jackson Nozick: Could someone help me with my makeup tomorrow for the fashion show at 6?
[2023-07-09, 3:52:49 AM] ~ Jackson Nozick: Thank u
[2023-07-09, 4:07:56 AM] ~ Rachel Oppenheimer: Please be quieter or tell the madatz to be quieter
[2023-07-09, 4:07:57 AM] ~ Rachel Oppenheimer: Some people yelling woke one of my kids up 😕
[2023-07-09, 4:11:13 AM] ~ Mikal Stein: If you are free to learn the tzevet flash mob dance come to the chadar at 1:30!!!!!!!!!!!!!!!!
[2023-07-09, 4:19:21 AM] ~ Rachel Oppenheimer: Please be quieter!!!
[2023-07-09, 4:19:31 AM] ~ Rachel Oppenheimer: Three kids have been woken up in my tzrif
[2023-07-09, 4:19:40 AM] ~ Rachel Oppenheimer: Close the windows in the chadar facing the tzrifim or something
[2023-07-09, 4:19:48 AM] ~ Mica: image omitted
[2023-07-09, 4:20:01 AM] ~ Mica: I need it
[2023-07-09, 4:21:17 AM] Alias: I am circus Barbie which means I’m dressing as a clown. I need some leggings preferably pink, a button up shirt (perferably pink) and If you have any pink things that you think would look funny let me know
[2023-07-09, 4:28:29 AM] ~ lily cohen: does anyone have loose pink pants
[2023-07-09, 4:31:47 AM] Rafi: image omitted
[2023-07-09, 4:32:09 AM] ~ Mica: If you see madatz send them to bed
[2023-07-09, 4:35:01 AM] India: use an emergency blanket 😭🙌
[2023-07-09, 4:48:46 AM] ~ Prielle Laniado: again: if theres a problem w the seder yom tell us plssssss
[2023-07-09, 4:58:00 AM] ~ blue: does anyone have a tutu i could borrow for tomorrow
[2023-07-09, 5:03:17 AM] ~ Gavriella TroperHochstein: This message was deleted.
[2023-07-09, 5:12:36 AM] Alias: If anyone wants my pink sweater they can btw if you desperate for pink
[2023-07-09, 5:22:52 AM] Alias: I put aside a clown outfit in the costume closet at the top left corner with a skirt and a big jacket, if you took it from me you’ve made an enemy for life
[2023-07-09, 5:35:13 AM] ~ Uri Oberlander: image omitted
[2023-07-09, 5:57:11 AM] Alias: Thanks Uri
[2023-07-09, 10:45:08 AM] Yonnie: Is there anything who has had success printing double sided on the printer?
[2023-07-09, 10:56:32 AM] ~ Talya Stein: Whoever took my phone charger labeled “Stein” from the mitbach can you please return it xoxo
[2023-07-09, 11:23:24 AM] ~ Sadie Quinn: The techni iMac should do it if you click that option
[2023-07-09, 11:35:59 AM] Rory Hanna-Ryant: Windows were left open in the chadar and the kids now know
[2023-07-09, 11:47:18 AM] ~ Talia Joffe: They’ll survive lol
[2023-07-09, 11:56:52 AM] ~ Jane: are the main barbies going up to mifkad now?
[2023-07-09, 11:57:18 AM] Elsbeth: We need scripts. Printing them now in the techni
[2023-07-09, 11:57:27 AM] ~ Jane: kay i’ll grab one
[2023-07-09, 12:36:59 PM] ~ Prielle Laniado: SEDREI YOM ARE IN THE TECHNI OFFICE
[2023-07-09, 12:37:15 PM] ~ Prielle Laniado: there are skeletons as well, please try to only take 1 of each not both!
[2023-07-09, 12:37:18 PM] ~ Prielle Laniado: there are also hatzagot!
[2023-07-09, 1:21:51 PM] ~ Jane: if someone could take up another stack of milk crates to the migrash that would be so helpful
[2023-07-09, 1:22:21 PM] ~ Uri Oberlander: anyone have hair gell or know where some is
[2023-07-09, 1:29:20 PM] ~ hannah: myad
[2023-07-09, 1:30:09 PM] ~ Prielle Laniado: group leaders!!!! you’re gonna get a handful of random kids joining you
[2023-07-09, 1:30:33 PM] ~ Prielle Laniado: i messed up and didn’t write numbers with the groups but you should just adopt them!
[2023-07-09, 2:39:38 PM] ~ Prielle Laniado: there are more printed sideri yom in the techni office 😘
[2023-07-09, 3:06:16 PM] ~ Mikal Stein: FLASH MOB WILL BE TAUGHT IN THE CHADAR RIGHT AFTER LUNCH!!!!!! Be there plsss if you’re not on shetach toran
[2023-07-09, 3:08:36 PM] ~ hannah: image omitted
[2023-07-09, 3:09:35 PM] ~ Talia Joffe: image omitted
[2023-07-09, 3:14:57 PM] ~ Gal Icek: saw them in the chadar last night
[2023-07-09, 4:05:52 PM] Rafi: image omitted
[2023-07-09, 4:55:06 PM] ~ Mikal Stein: This is starting now!!!! Please come!!
[2023-07-09, 5:03:42 PM] ~ Noa Franklin: R stations over?
[2023-07-09, 5:03:54 PM] ~ Uri Oberlander: it’s zman chofshi
[2023-07-09, 5:05:01 PM] Alias: What time does it end I DIDNT grab a schedule
[2023-07-09, 5:05:11 PM] Alias: Don’t know why it made that all caps
[2023-07-09, 6:47:41 PM] ~ scotty: is there anywhere we can find tziud for stations? or should we just prep it ourselves
[2023-07-09, 6:52:25 PM] ~ mai: https://open.spotify.com/playlist/5udb5lMYKt3uQj4F4RZYUZ?si=n_LLRusbRyKx4Bs64BS9pg&pt=ff55ce0a9780c9ed902934c2a06f3841 If you have songs you want played during havdalah, add them to this playlist!
[2023-07-09, 7:34:32 PM] ~ Solomon Bodrug: image omitted
[2023-07-09, 7:35:47 PM] ~ Solomon Bodrug: even if they aren’t ours it’s nice to keep things clean and tidy
[2023-07-09, 7:46:15 PM] ~ Mica: Where is kibbud happening? We will bring it there
[2023-07-09, 7:46:59 PM] ~ Sadie Quinn: AD Gordon
[2023-07-09, 7:47:36 PM] ~ Mica: Should we bring it there? @vaad
[2023-07-09, 7:53:45 PM] Yonnie: Yes pleas
[2023-07-09, 7:53:47 PM] Zev: Kibbud is happening at the janusz, being trays there
[2023-07-09, 7:53:51 PM] Zev: Bring*
[2023-07-09, 7:55:53 PM] ~ Kerren Matthews!!! (she): ~ Kerren Matthews!!! (she) was added
[2023-07-09, 7:55:12 PM] ~ Kerren Matthews!!! (she): hope special day is going well!!! it was so fun being at miriam and meet y’all!!! byeooshhhh good luck this summer💕
[2023-07-09, 7:56:24 PM] ~ scotty: kibbud is actually happening at the ad gordon like normal! and trays are already up there so don’t come down and get ‘em
[2023-07-09, 8:23:24 PM] ~ Prielle Laniado: where is tzevet??
[2023-07-09, 8:23:44 PM] ~ Prielle Laniado: there are 5 members of tzevet in the AD gordon right now
[2023-07-09, 8:24:06 PM] ~ Prielle Laniado: unless you’re running the harigots fair, you need to be here
[2023-07-09, 9:30:20 PM] ~ Jane: rosh poop
[2023-07-09, 9:31:14 PM] ~ Alex (shmeppy): video omitted
[2023-07-09, 9:31:14 PM] ~ Alex (shmeppy): image omitted
[2023-07-09, 9:53:29 PM] Mira: video omitted
[2023-07-09, 10:39:52 PM] ~ Mica: If you’re on toranut please come help
[2023-07-09, 10:40:05 PM] ~ Mica: It is basically only madatz 🤪
[2023-07-09, 10:41:24 PM] ~ Mica: Ana rafi and shmeppy in particular who are signed up
[2023-07-09, 10:41:45 PM] ~ Mica: But anyone else not doing anything please come
[2023-07-09, 10:42:55 PM] ~ Lila: omw
[2023-07-09, 10:48:07 PM] ~ Michelle Worland: If anyone knows about what happened last night. Please stop telling people. It’s kids medical stuff. Other Tzevet and other kids in other Kvutzas don’t need to know. Please stop telling people anything. It is not your place to tell others and it’s not their place to know. Again this is kids medical stuff, it is confidential.
[2023-07-09, 10:55:24 PM] ~ Tal Fisher-Taylor: Same from me, if you don't need to know, you just don't need to know.
[2023-07-09, 11:28:57 PM] Gali Goldman: IMG_0617.HEIC document omitted
[2023-07-09, 11:35:45 PM] ~ Gavriella TroperHochstein: Don’t forget to do your tzevet laundry tonight!
[2023-07-10, 12:16:21 AM] Tyler: HAS ANYBODY SEEN MY IPHONE CHARGER IM GOING THRU WITHDRAWLS
[2023-07-10, 12:17:16 AM] ~ Maisie: You can use mine. It’s in the mo in my usual spot.
[2023-07-10, 12:18:54 AM] Rue: People on fesh tn pls come to the Misrad techni
[2023-07-10, 12:54:02 AM] ~ Ariella Smith-Eidelman: And put it in Phoebe please !
[2023-07-10, 1:28:01 AM] Yvonne: After y’all kids go to bed, if it’s your greatest wish, please come help clean. Thank youuuu
[2023-07-10, 2:03:47 AM] Gali Goldman: Just a reminder that you can always text me if you need help putting your kids to bed!! Most likely I will say yes💗💗
[2023-07-10, 2:07:12 AM] ~ Uri Oberlander: thanks gali!
[2023-07-10, 2:26:24 AM] ~ Prielle Laniado: kimaaa?
[2023-07-10, 2:28:25 AM] ~ Daniel: This message was deleted.
[2023-07-10, 2:29:48 AM] India: not the vibe
[2023-07-10, 2:29:59 AM] India: image omitted
[2023-07-10, 2:30:25 AM] India: if u can’t clean up for any reason find someone to cover
[2023-07-10, 2:30:40 AM] India: gotta keep the bach sanitary please and thanks
[2023-07-10, 2:30:58 AM] ~ Daniel: image omitted
[2023-07-10, 2:45:31 AM] ~ hannah: image omitted
[2023-07-10, 3:14:08 AM] ~ agustina: whats the lock # for chofnof
[2023-07-10, 3:25:36 AM] ~ mai: We need help
[2023-07-10, 3:25:47 AM] ~ mai: With the locks
[2023-07-10, 3:25:58 AM] ~ Michelle Worland: This message was deleted.
[2023-07-10, 3:26:02 AM] ~ Michelle Worland: This message was deleted.
[2023-07-10, 3:39:25 AM] ~ Uri Oberlander: just to confirm, eva is not on madrichol toran tomorrow, for those wondering
[2023-07-10, 3:40:45 AM] ~ blue: true it’s me we switched
[2023-07-10, 3:40:53 AM] ~ blue: any1 kno wake-up time?
[2023-07-10, 3:46:34 AM] Yonnie: 8:15 i think?
[2023-07-10, 3:48:25 AM] ~ blue: no i mean for toran
[2023-07-10, 3:48:47 AM] ~ Uri Oberlander: u have to be at rope swing at around 7
[2023-07-10, 11:22:16 AM] ~ Ariella Smith-Eidelman: last chance for laundry!!
[2023-07-10, 11:29:43 AM] ~ Noa Franklin: Hey does anyone have any socks I can borrow for the next few day?
[2023-07-10, 11:30:06 AM] ~ Noa Franklin: I am out 🥲
[2023-07-10, 11:50:23 AM] ~ eli gerut: i got u
[2023-07-10, 12:42:21 PM] ~ Noa Franklin: omg my hero
[2023-07-10, 12:44:36 PM] ~ Uri Oberlander: also hmu
[2023-07-10, 12:44:42 PM] ~ Uri Oberlander: i brought 20 pairs
[2023-07-10, 1:06:23 PM] ~ Prielle Laniado: someone on tzofimot tzevet and bonimot tzevet text me asap!
[2023-07-10, 1:06:31 PM] ~ Prielle Laniado: tikkun olam info coming your way ^
[2023-07-10, 1:23:32 PM] Ron: Anyone able to drive me to town ❤️
[2023-07-10, 1:47:31 PM] ~ Sadie Quinn: image omitted
[2023-07-10, 3:37:22 PM] Tyler: Can anyone shower with he chalutzimot male side?
[2023-07-10, 3:40:23 PM] Yonnie: image omitted
[2023-07-10, 3:53:29 PM] ~ Oliver: HI BONIMOT TZEVET!!!!
We will be meeting at lunch for a Tiyul briefing. Once you grab food, head on over to the bait porch and we can get it started. Thanks!
[2023-07-10, 3:54:19 PM] ~ Daniel: Was blast being on tzevet,  thanks for the good times 👋🤝😙
[2023-07-10, 5:52:32 PM] ~ Prielle Laniado: tochnit erev info (pls read)                                                   Chris the Crab: Rafi
Frankie the Fish: Uri
Olivia the Octopus: Ayelet
Stella the Starfish: Jackson
Sammy the shark: Maayan
Mr. Sunscreen who sells sunscreen that isn't reef safe (think oh’hare) : Shmeppy
[2023-07-10, 6:09:15 PM] ~ Talia Joffe: July 10 tzevet asepha
 don’t leave your garbage and dishes in the mizrad Rosh - not ok
Look at the big calendar and write down the things that you’re doing/what day you’re doing it. Keep on top of your tafkidim!!!
Tzvatim need to tell their keshers (maz, Melavot, Noga) about kid issues!!! Communicate things to them - they need to know. You don’t need to wait for a kesher meeting to update your keshers - if it’s important, come find someone to talk to asap
If there is a disclosure/potential disclosure, FIND NOGA!!!
The techni office is not a dumping ground - pick up after yourself and keep it clean!!!
Stop going in the techni’s desks!!! Don’t take shit unless you ask
What happened to cleanup after yom meyuchad? Things should’ve been cleaned, not ok
Collective responsibility, clean up after ourselves
If you’re on a 9-9, you come back and are on at 9
What happened at mifkad??? Kids can’t come late to mifkad and neither can tzevet. Don’t be late to mifkad!
If you’re a peacock, it means you come and find Ezra! Don’t make him track you down, find him and get a job directly from Ezra. And do your task!!!
If you’re not signed up for a block, go somewhere! Choose a station and go to it
Tiyul starts tomorrow! Talk to your kids about tiyul! Let them know what Tiyul they’re on. If kids don’t want to go, talk with Noga, medics, and kesher. Communicate with keshers to figure out game plan
Make sure your kids have all the necessary equipment for tiyul. If you or a kid borrow from a tzevet member, it’s YOUR job to make sure those items get returned
Bonimot won’t be at ivrit today - Gal is running ivrit fluent group and will let you know what’s up
Take a chill pill when ordering from kupa. It’s too much too fast, we need money to last for the summer. Be thoughtful in your orders!
Tzevet needs to be with your kids!!! Count your kids, know where they are, and communicate to your tzevet where they are
Think about the things are say to madatz! They should not be hearing about tzevet drama/gossip/relationships/fesh. Not appropriate
Erica says hi and would love to meet everyone! They’ll be here till Saturday! Come say hi
[2023-07-10, 6:41:44 PM] Mira: Hey! I know that yesterday was super crazy but I just want to stress again how important it is not to put glitter in the sink! It’s super bad for both the plumbing and the environment. I had to spend most of the morning just scrubbing out the sink and the glitter ruined many of the paint brushes. Aside from the glitter, huge messes being left in the M yad has been a reoccurring issue and I would really appreciate for us to all do a bit better at keeping the space clean. Thanks :)
[2023-07-10, 6:45:49 PM] Gali Goldman: Hiiii! I believe I’m on shmira tonight but I’m currently sick. Is anyone available to switch with me?
[2023-07-10, 6:51:19 PM] Gali Goldman: ALSO! The following tzevet members have mail waiting for them at the bayit: Talia, shir, Uri, Mairav, Mira, and shomrimot tzevet!!
[2023-07-10, 6:59:03 PM] ~ blue: does anyone have the packing last for little kid tiyul
[2023-07-10, 8:59:48 PM] Yonnie: SEND KIDS TO TORANUT!
[2023-07-10, 9:21:53 PM] ~ Maisie: video omitted
[2023-07-10, 9:31:16 PM] ~ Talia Joffe: @16042305933 and @12369965850 you’re on toranut
[2023-07-10, 9:46:17 PM] ~ Jane: feshers come to misrad rosh
[2023-07-10, 9:47:30 PM] ~ Mica: @17789271501
[2023-07-10, 9:54:11 PM] ~ Louis: https://docs.google.com/forms/d/e/1FAIpQLSe7FkMPnwZipoqDw-Fe0M1xU60eLoDFekK6BN_57FCulTi1Sg/viewform
[2023-07-10, 10:26:36 PM] ~ Alex (shmeppy): does anyone have any white pants i can borrow for tochnit erev tn
[2023-07-10, 10:28:04 PM] ~ Alex (shmeppy): !!!
[2023-07-10, 10:49:32 PM] ~ Prielle Laniado: sedrei yom are in the techni office!!!
[2023-07-10, 10:49:33 PM] ~ Prielle Laniado: along with hatzagot
[2023-07-10, 10:49:33 PM] ~ Prielle Laniado: go go go
[2023-07-10, 10:50:23 PM] ~ Prielle Laniado: and once you’ve gotten you’re seder yom PLEASE go to the janutz!!!
[2023-07-10, 11:39:34 PM] ~ Mica: @feshers we are heading to the platform now, join when you like
[2023-07-10, 11:39:47 PM] ~ Mica: Lila and Jane are grabbing some stuff
[2023-07-10, 11:40:24 PM] ~ Zachary Bunim: does anyone have a portable charger i could borrow for the night?
[2023-07-10, 11:45:02 PM] ~ Oliver: Anyone who’s free tonight to help prep Tiyul food we would love and appreciate extra hands in mitbach!
[2023-07-10, 11:46:10 PM] Ezra: @va'ad tiyul
[2023-07-10, 11:46:17 PM] Ezra: this is your messima
[2023-07-10, 11:46:28 PM] Ezra: !!!!!
[2023-07-10, 11:48:15 PM] Ezra: Ollie
Ilana
Eva
Talya
Hannah
Maayan
Yair
Auggie
[2023-07-11, 12:04:01 AM] Ron: Yes
[2023-07-11, 12:10:48 AM] ~ Roie Bargil: This message was deleted.
[2023-07-11, 12:36:50 AM] India: tournut is absolutely fucked. not cool at all that tzevet dipped and left hella and i mean HELLA dishes. it doesn’t take too much effort to communicate if ur busy and can’t do the dishes anymore/feelin overwhelmed!
[2023-07-11, 12:39:18 AM] India: shai killed the game today but they shouldn’t be the only one. that’s not how things work
uri has also slayed the game and helped out but shawty shouldn’t even be there in the 1st place so PLEASE any1 who has some spare time it would be great if u could pop by and help
*u will get a special treat!*
[2023-07-11, 12:40:01 AM] India: maybe ppl who r helping with tiyul shit can do some dishes here and there, jus a thought
[2023-07-11, 12:42:07 AM] ~ Noa Franklin: Anyone in Madatz have size 11 m hiking boots they can spare?
[2023-07-11, 12:46:01 AM] ~ Solomon Bodrug: dishes is also a great mind break!
[2023-07-11, 12:46:22 AM] Rue: If there’s anyone that can come help with shomrimot bed time that would be gravest
[2023-07-11, 12:46:27 AM] Rue: Great*
[2023-07-11, 12:46:41 AM] Mira: I can!
[2023-07-11, 12:57:20 AM] Ron: EXTREMELY URGENT 🚨
[2023-07-11, 12:58:00 AM] ~ Sadie Quinn: Can anyone help Uri with dishes? I’m currently doing it but I have to get up at 4am for tiyul and I haven’t packed
[2023-07-11, 1:01:57 AM] ~ Oliver: Ron go to madatz ohel and ask their tzevet
[2023-07-11, 1:07:57 AM] ~ Roie Bargil: Does anyone want to swap Gaga pit toran? I am meant to be doing it tomorrow but I’m on nofesh
[2023-07-11, 1:25:24 AM] ~ Shani Avrahami Saraf: Hello if you are on shmira tonight please come to the mirp! Shmira briefing is at 10:15
[2023-07-11, 1:25:40 AM] Gali Goldman: I’m coming
[2023-07-11, 1:32:21 AM] ~ Roie Bargil: Please!!
[2023-07-11, 1:32:48 AM] Edden: is anyone able to sleep in the mirp tzrif tonight with the chotrimot?
[2023-07-11, 1:33:19 AM] Edden: we have someone off and someone on shmira so i’m the only one sleeping here and i need someone for the other side
[2023-07-11, 1:34:19 AM] Shir: i’ll do it
[2023-07-11, 1:34:50 AM] Shir: @7?
[2023-07-11, 1:35:52 AM] ~ Noa Franklin: Yo does anyone have socks they’re willing to lend to the bonimot?
[2023-07-11, 1:35:55 AM] ~ Noa Franklin: Also urgent
[2023-07-11, 1:36:53 AM] Shai Rubin: mirp might?
[2023-07-11, 1:37:42 AM] ~ Tal Fisher-Taylor: @12674156338 come to mirp I have a present
[2023-07-11, 1:37:58 AM] Edden: what time does madrichol toran need to be at the rope swing?
[2023-07-11, 1:41:37 AM] ~ Shelly Kositsky: ATTENTION I’m closing the nuthatch at 12 and I know a lot of people are prepping in there rn, please keep an eye on the time!!!
[2023-07-11, 1:46:32 AM] ~ Shelly Kositsky: MITBACH
[2023-07-11, 1:46:46 AM] ~ Shelly Kositsky: although nuthatch is what we should be callin it
[2023-07-11, 2:08:03 AM] ~ Noa Franklin: Y’all what the duck is that sound in thw tzophimot shetach
[2023-07-11, 2:08:28 AM] Zev: I thought it was in bomimot
[2023-07-11, 2:08:31 AM] Zev: Is it an animal?
[2023-07-11, 2:11:46 AM] ~ Noa Franklin: I thought it was u guys
[2023-07-11, 2:11:55 AM] ~ Noa Franklin: Teehee
[2023-07-11, 2:12:04 AM] Ron: Sounds like an owl
[2023-07-11, 2:12:08 AM] ~ Noa Franklin: owl fight in the shetach?
[2023-07-11, 3:22:38 AM] ~ Lila: can i get an escort
[2023-07-11, 5:42:46 AM] ~ Oliver: Lila tov machaneh❤️💤🌚
[2023-07-11, 7:22:57 AM] ~ Oliver: Rise and grind machaneh 💪☀️🌅
[2023-07-11, 12:11:47 PM] Yvonne: If anyone sees my Fanny pac PLEASSEEE let me know, it’s black with 2 compartments and one side strap has 2 pins and the other has a little moose hide square. It has my birth control and I would really like to find it
[2023-07-11, 12:34:25 PM] ~ Jackson Nozick: I think I saw it in the front of the chadar on the fire place unless that's not it
[2023-07-11, 12:44:36 PM] ~ eli gerut: image omitted
[2023-07-11, 1:14:00 PM] ~ hannah: image omitted
[2023-07-11, 1:19:41 PM] Rue: Some quick updates for today:
- The continuation of packing is going to be during Ivrit instead of during pesek zman
- During zman madatz the madatz tzevet + Yvonne and Mira will all be on stations
- During Pesek Zman everyone except shomrimot tzevet will be on
- The stations for pesek zman are:
    - MYAD @ the MYAD (Mira, Alias, Uri)
    - Reading and letter writing @ the treehouse (Edden, Yvonne, Cate)
    - Chof Chilling @ the chof (Maya, Roie, Elsbeth, Noa B.)
    - Rikkud @ the Janusz (Shai, Omer, Shir)
    - Jammin @ the shmo (Shmeppy, Zev, Jane)
    - Gaga @ the gaga pit (Eva, Prielle, Scotty)
If you have a problem with the pesek zman station you're on, talk to someone and switch with them and then change it on the whiteboard in the techni
[2023-07-11, 2:48:58 PM] Omer: Can someone be on tornut during the actual meal time because i have a tiyul briefing during lunch
[2023-07-11, 2:49:17 PM] Omer: I can do before lunch and after lunch i just need someone to replace me for the actual meal
[2023-07-11, 3:34:04 PM] Tyler: Hey y’all, this should be self explanatory but please don’t eat other Kvutzah’s candy from the machzan! We are all able to order snacks for ourselves and if you really need Oreos go on a sexy adventure to dry storage. It’s not hard 👍
[2023-07-11, 3:37:38 PM] ~ maya: if anyone has a tiyul packing list that would be most helpful
[2023-07-11, 3:56:11 PM] Rue: image omitted
[2023-07-11, 4:01:34 PM] Rory Hanna-Ryant: image omitted
[2023-07-11, 4:02:05 PM] ~ Uri Oberlander: i can do after lunch?
[2023-07-11, 4:08:12 PM] ~ Solomon Bodrug: take a bite
[2023-07-11, 4:14:52 PM] ~ Alex (shmeppy): me and omer REALLY NEED someone to tap us out after the meal for toranut since we both have showers. someone pls help😾😾😾
[2023-07-11, 4:15:07 PM] Mira: I’ll do it
[2023-07-11, 4:15:13 PM] ~ Uri Oberlander: i can
[2023-07-11, 4:15:34 PM] ~ Alex (shmeppy): k thx mira and uri
[2023-07-11, 4:15:45 PM] ~ Alex (shmeppy): could one of u tap omer out during the meal since omer has briefing?
[2023-07-11, 4:16:06 PM] ~ Uri Oberlander: after i eat yea
[2023-07-11, 4:16:17 PM] ~ Alex (shmeppy): nvm mira will do it
[2023-07-11, 4:33:22 PM] ~ Shani Avrahami Saraf: Where is tzofimot briefing happening
[2023-07-11, 4:34:05 PM] ~ Ilana Sela: Bayit
[2023-07-11, 4:34:16 PM] Omer: I also realized that i have showers after linch so i do need someone to cover me for me
[2023-07-11, 5:25:47 PM] ~ Uri Oberlander: any members of riff raf who are showering with kids, can u help with toranut? i also have to shower w kids
[2023-07-11, 5:32:07 PM] ~ Alex (shmeppy): if anyone has seen a blue nalgene with a mario sticker and an astro boy sticker pls lmk
[2023-07-11, 6:45:58 PM] Alias: Where did friendship bracelets move to?
[2023-07-11, 7:10:18 PM] Mira: Gezer, they didn’t want to use the myad
[2023-07-11, 9:47:08 PM] ~ Ilana Sela: Sayarimot & chotrimot tzevet please come to the bayit for tiyul briefing!!!
[2023-07-11, 10:03:05 PM] ~ maya: does anyone have size 9 women’s hiking shoes
[2023-07-11, 11:22:08 PM] ~ Alex (shmeppy): should we start the movie, jane and i r the only tzevet here
[2023-07-11, 11:22:34 PM] ~ Ilana Sela: I have a w8 and a m8.5 in the grofit if you want to come try them on
[2023-07-11, 11:23:04 PM] ~ Ilana Sela: Also if any tzevet is available to come help with food prep I’d really appreciate it!!
[2023-07-11, 11:36:06 PM] ~ Jane: why am i the only tzevet member in the chadar
[2023-07-11, 11:41:25 PM] ~ Ariella Smith-Eidelman: Tzevet if your kids are in the chadar you need to be there too
[2023-07-11, 11:41:28 PM] ~ Ariella Smith-Eidelman: Now
[2023-07-11, 11:42:15 PM] ~ Jane: cmon guys its the lego movie
[2023-07-12, 12:15:39 AM] ~ Ilana Sela: Gear goys, now is a good time to come get your gear!
[2023-07-12, 12:16:20 AM] ~ Maisie: We’ve got non-Jews amongus…?
[2023-07-12, 12:22:08 AM] ~ Uri Oberlander: impastas
[2023-07-12, 12:36:47 AM] ~ Jane: image omitted
[2023-07-12, 12:41:59 AM] ~ hannah: image omitted
[2023-07-12, 12:42:06 AM] ~ hannah: image omitted
[2023-07-12, 12:53:36 AM] ~ Ilana Sela: Can some people from tzofimot tzevet please come down to the grofit?
[2023-07-12, 12:55:34 AM] ~ Uri Oberlander: wait u served it without me?!!?
[2023-07-12, 1:12:24 AM] ~ Prielle Laniado: image omitted
[2023-07-12, 1:47:39 AM] Rafi: image omitted
[2023-07-12, 1:49:36 AM] Gali Goldman: Scary
[2023-07-12, 1:54:47 AM] ~ hannah: @ tiyul are you guys done in the bach and if so can you guys clean up in the bakery
[2023-07-12, 1:55:44 AM] ~ maya: so glad she is rosh
[2023-07-12, 3:40:10 AM] Edden: on behalf of all of chotrimot tzevet, we should buy this for the mo with kupa:
[2023-07-12, 3:40:26 AM] Edden: image omitted
[2023-07-12, 3:40:35 AM] Edden: IT IS A PUZZLE
[2023-07-12, 3:40:42 AM] ~ Uri Oberlander: A JIGSAW AT THAT
[2023-07-12, 3:41:59 AM] ~ hannah: i second that
[2023-07-12, 3:42:05 AM] ~ Uri Oberlander: once u finish the puzzle, it becomes a contest: can you name all the numbers?
[2023-07-12, 11:28:18 AM] ~ Alex (shmeppy): when is breakfast today
[2023-07-12, 11:28:28 AM] ~ Gavriella TroperHochstein: 9
[2023-07-12, 11:28:31 AM] ~ Noga Goldman: 9
[2023-07-12, 2:45:09 PM] ~ Jane: I have a feeling I left my zip up fleece at machaneh (probs hanging in mains or in the mirp tzrif). I would really appreciate it it you can keep an eye out!
[2023-07-12, 2:46:10 PM] ~ Jane: image omitted
[2023-07-12, 6:16:21 PM] ~ Avishai Jacobson: ~ Avishai Jacobson changed their phone number to a new number. Tap to message or add the new number.
[2023-07-13, 2:40:29 AM] Ron: image omitted
[2023-07-13, 11:04:29 AM] ~ Shelly Kositsky: Yummiest spaghetti alert!!!
[2023-07-13, 11:08:22 AM] ~ hannah: jealous!!!
[2023-07-13, 12:57:00 PM] ~ Maisie: image omitted
[2023-07-13, 12:59:49 PM] ~ Solomon Bodrug: 😴🥱😴👻😱😭
[2023-07-13, 1:00:43 PM] Rory Hanna-Ryant: Just ran into a group of second session chanis!😇
[2023-07-13, 5:54:58 PM] ~ Avishai Jacobson: I’m pulling into Nanaimo at Duke Point right now
[2023-07-13, 6:18:27 PM] Yonnie: Ay does anyone know where the inflatable taco is
[2023-07-13, 6:18:47 PM] ~ Prielle Laniado: techni i think!
[2023-07-13, 6:19:03 PM] ~ Prielle Laniado: behind ariella desk?
[2023-07-13, 6:19:03 PM] ~ Avishai Jacobson: Who should I call to pick me up from Gabriola
[2023-07-13, 6:19:14 PM] Yonnie: image omitted
[2023-07-13, 6:19:50 PM] Yonnie: Rue i think
[2023-07-13, 6:21:58 PM] Yonnie: We found it
[2023-07-13, 10:17:46 PM] ~ Shani Avrahami Saraf: Doctor is coming at 7:30 and this is my list of who should come see him. Please bring your kids!
Julius r-t
Ben kohavi
Cedar h
[2023-07-13, 10:26:24 PM] ~ Shani Avrahami Saraf: Also Benjamin Nair
[2023-07-13, 11:39:42 PM] ~ Solomon Bodrug: Hello all you smelly tiyul people!

If you have any leftover food supplies, please consolidate all the opened and premade food into one or two milk crates and all the unopened packaged food such as tortillas or dry pasta into another crate and bring them to Dry Storage!

This is super important for tiyul planning for next session so please make sure you do it ASAP (before the end of the night if you arrived today and tomorrow night if you arrive tomorrow!)
[2023-07-14, 1:00:26 AM] ~ Shani Avrahami Saraf: Chalutzimot please send your night meds kids
[2023-07-14, 1:07:03 AM] ~ Ana: image omitted
[2023-07-14, 1:07:06 AM] ~ Ana: 🥰
[2023-07-14, 2:11:16 AM] Ron: 😭
[2023-07-14, 2:32:28 AM] ~ Noa Franklin: Can anyone supervise the gender neutral shower in like 5 min?
[2023-07-14, 2:32:39 AM] ~ Noa Franklin: Pls
[2023-07-14, 2:33:16 AM] Yonnie: image omitted
[2023-07-14, 2:34:05 AM] Tyler: Not the cheesy mac……….
[2023-07-14, 2:34:12 AM] ~ Noa Franklin: ^^
[2023-07-14, 2:34:32 AM] ~ Noa Franklin: Like fr can someone help
[2023-07-14, 2:41:51 AM] ~ Gavriella TroperHochstein: I can if you still need
[2023-07-14, 2:41:54 AM] ~ Gavriella TroperHochstein: I’m coming up now
[2023-07-14, 3:20:56 AM] ~ Oliver: What time is wake up?
[2023-07-14, 3:21:03 AM] ~ Oliver: /breakfast
[2023-07-14, 3:22:55 AM] ~ Ana: Wake up is at 9
[2023-07-14, 3:23:03 AM] ~ Oliver: Oh fire
[2023-07-14, 3:23:09 AM] ~ Ana: Breakfast is at 945
[2023-07-14, 3:23:17 AM] ~ Oliver: Thanks!
[2023-07-14, 3:23:55 AM] ~ Ana: Don’t quote me on the breakfast time though cause I’m not positive
[2023-07-14, 3:24:43 AM] ~ Oliver: Sketchy but ok
[2023-07-14, 3:25:09 AM] ~ Ana: Def 9 wake up though
[2023-07-14, 3:28:41 AM] ~ hannah: yes ana is right!
[2023-07-14, 4:42:03 AM] Ron: image omitted
[2023-07-14, 4:43:05 AM] Ron: ‏מה זה?
[2023-07-14, 4:43:44 AM] ~ hannah: image omitted
[2023-07-14, 4:43:54 AM] ~ hannah: acc so disappointed
[2023-07-14, 12:33:10 PM] Ron: If u see a sunset coloured x friendship bracelet on the ground pls hml
[2023-07-14, 2:40:43 PM] ~ Maisie: Hey, guys, I’m decorating a cake for a kid named Jonas. What kinda shit would they want drawn on the cake? And what colours of buttercream would they want?
[2023-07-14, 2:41:05 PM] ~ Mika: blue
[2023-07-14, 2:41:28 PM] ~ Mika: ocean theme
[2023-07-14, 2:55:48 PM] ~ Maisie: Thanks
[2023-07-14, 3:09:54 PM] Yonnie: This message was deleted.
[2023-07-14, 3:10:02 PM] Yonnie: image omitted
[2023-07-14, 3:10:03 PM] Yonnie: Toranut*
[2023-07-14, 3:28:55 PM] Yonnie: Add shay and alona from bonimot to this list
[2023-07-14, 4:24:16 PM] ~ mai: REMINDERS FOR SHABBAT THIS WEEK:
- Read the seder yom - it will be printed in the techni office, and on white boards and will be sent in the group chat, know your responsibilities. If you can’t do something, tell me or Sadie ASAP.
- Be on time to things! With ruach! We are low on tzevet because of tiyul, we need all hands on deck!
- Mishpachot are by kvutzah today, it’s your job to split your kids into 2 groups and divide tzevet between and run “Rose, Bud, Thorn” with kibbud. Feel free if you have time to ask the kids how it makes them feel to be here for the 75th anniversary
SATURDAY:
- KIDS CAN’T SWIM AT TWIN!
- Saturday morning is looking a little different. It’s a separate seder yom, treat tomorrow like a special day, read it!!! There will be group and station leaders so know where you need to be
- if you have questions come talk to me
- you’re all killing it!!!!!
[2023-07-14, 5:07:53 PM] ~ Talia Joffe: July 14th Tzevet Asepha
Bring Shani your mirp ice packs!!! She’s out
People are pre-signed up for tafkidim for Shabbat - check the Seder yom!! + if you don’t like you tafkid, talk to Sadie or mairav
Mishpachot are happen by kvutzah today - split kids into 2 groups and do normal mishpachot things
Meet @ janusz for mishpachot
Tomorrow (Saturday) is going to run like a special day - tzevet needs to be ON!!!
Help keep the myad clean!! It is not solely on mira to clean up after. If you use things, deal with them! - if you actually can’t clean it up in the moment, give Mira a heads up so they know it’s there
Also, use the sign out sheet or let Mira know when you take things from myad!
Mira’s doing an order soon, let them know if there are things you need
Don’t make announcements in the chadar about things like “no more grilled cheese” just let kids know quietly at the tables if they hold up their trays
[2023-07-14, 5:15:13 PM] ~ Gal Icek: Cafe kar is happening now! Bit don't all come at once 😬
[2023-07-14, 5:27:53 PM] ~ Avishai Jacobson: Anyone have extra chultzot? I never got one
[2023-07-14, 6:44:10 PM] Ron: Could everyone check their laundry for random clothes missing a bunch 💙
[2023-07-14, 6:44:27 PM] ~ Sadie Quinn: Same!
[2023-07-14, 6:47:31 PM] Ron: For one a shirt with a picture of nba youngboy and a few Dickie’s pants and saxx underwear tysm
[2023-07-14, 6:51:30 PM] Gali Goldman: Alias, Scotty, Jane and lily C. All have mail! Come get it!!
[2023-07-14, 6:51:48 PM] ~ Jane: coming !
[2023-07-14, 7:00:23 PM] ~ Sadie Quinn: image omitted
[2023-07-14, 7:00:28 PM] ~ Sadie Quinn: This message was deleted.
[2023-07-14, 7:00:40 PM] ~ Sadie Quinn: image omitted
[2023-07-14, 7:01:06 PM] ~ Sadie Quinn: Shabbat tafkidim! Printed sidrei Yom are in the techni on the shelf by the order forms
[2023-07-14, 7:49:58 PM] Gali Goldman: FOR TODAY'S CHEVRATI, EVERYONE NEEDS EITHER THEIR PHONE OR COMPUTER
[2023-07-14, 7:50:03 PM] Gali Goldman: NO EXCUSES!!
[2023-07-14, 7:50:08 PM] Gali Goldman: computer is better
[2023-07-14, 7:50:29 PM] Gali Goldman: 😇
[2023-07-14, 8:25:25 PM] ~ Uri Oberlander: is there a second shlav of e-vehicle?
[2023-07-14, 8:26:05 PM] Ron: Yea
[2023-07-14, 8:26:05 PM] ~ Shani Avrahami Saraf: Yes
[2023-07-14, 9:54:35 PM] ~ Maisie: image omitted
[2023-07-14, 10:21:33 PM] ~ Noa Franklin: Should ppl stay in their shetach for mishpachot?
[2023-07-14, 10:22:04 PM] ~ Noa Franklin: Hey friends if anyone sees a dry fit long sleeve galil chultzah pls lmk
[2023-07-14, 10:22:11 PM] ~ Noa Franklin: I left it by the shmo and now it is gone 🥲
[2023-07-14, 10:29:49 PM] ~ mai: PEOPLE WITH TAFKIDIM IN THE NEXT HOUR:
- Sweepers: Noa F, Rachel
- Bringing up song boards (including machar): Miriam
- Speaker/Music set up: Omer/Shai
- Hydration squad: Zevi, Dani
- Fruit cutting: Tyler, Mairav, (NEED ONE MORE VOLUNTEER HERE)
[2023-07-14, 10:37:26 PM] ~ Prielle Laniado: tzevet! the janutz is practically empty :( yalla yalla bring your kids
[2023-07-14, 11:06:34 PM] Tyler: I’m abt to shower could someone plz help w fruit
[2023-07-14, 11:44:37 PM] Gali Goldman: Meet in the mo at 11:30 tonight!
[2023-07-14, 11:51:35 PM] ~ Maisie: image omitted
[2023-07-15, 12:03:21 AM] ~ Shelly Kositsky: 🔥🔥❤️‍🔥🙏
[2023-07-15, 12:03:27 AM] ~ Shelly Kositsky: Best cake everrr
[2023-07-15, 12:31:22 AM] ~ Avishai Jacobson: Where the feshers at
[2023-07-15, 1:24:04 AM] ~ Roie Bargil: This message was deleted.
[2023-07-15, 1:28:51 AM] ~ Rachel Oppenheimer: Can someone also tell shai that I am going to shower around 11:10pm? And if they want to go with me to let me know
[2023-07-15, 1:42:28 AM] Yvonne: What number should I put on the laundry bag?
[2023-07-15, 1:42:28 AM] Yvonne: Where would I find that info
[2023-07-15, 1:42:48 AM] ~ Ariella Smith-Eidelman: bonimot 19 + 20 and 21 is tzevet
[2023-07-15, 1:49:39 AM] Yvonne: Okay thank you
[2023-07-15, 2:02:02 AM] Gali Goldman: Chevrati in 30!!
[2023-07-15, 2:29:26 AM] ~ Noa Franklin: Can the chevrati be a bit later👉👈
[2023-07-15, 2:30:23 AM] Gali Goldman: Come to the mo or else
[2023-07-15, 2:30:29 AM] Gali Goldman: To everyone who can
[2023-07-15, 2:36:06 AM] Ron: Where does laundry bags go ?
[2023-07-15, 2:36:30 AM] ~ Ariella Smith-Eidelman: in the truck on the upper kvish
[2023-07-15, 2:44:29 AM] ~ Lila: CHEVRATI
[2023-07-15, 2:48:53 AM] ~ Noa Franklin: Hey can some ppl come help bring the bonimot laundry down?
[2023-07-15, 2:49:13 AM] ~ Noa Franklin: U would actually be my favorite ppl ever
[2023-07-15, 3:00:38 AM] ~ Lila: still need help? i can come
[2023-07-15, 3:02:18 AM] ~ Ariella Smith-Eidelman: whoever has the saycho travel pack
[2023-07-15, 3:02:22 AM] ~ Ariella Smith-Eidelman: give it to me now
[2023-07-15, 3:02:24 AM] ~ Ariella Smith-Eidelman: or ill cry
[2023-07-15, 3:02:46 AM] ~ Ariella Smith-Eidelman: i found it
[2023-07-15, 3:02:46 AM] ~ Noga Goldman: I put it on your desk when we arrived to machaneh
[2023-07-15, 3:02:50 AM] ~ Ariella Smith-Eidelman: please disregard
[2023-07-15, 3:02:56 AM] ~ Noa Franklin: I’m good now but try
[2023-07-15, 3:05:16 AM] ~ Mica: Embarassing
[2023-07-15, 3:31:25 AM] Gali Goldman: image omitted
[2023-07-15, 10:17:06 AM] ~ Maisie: image omitted
[2023-07-15, 12:00:37 PM] ~ Maisie: image omitted
[2023-07-15, 12:01:21 PM] ~ Maisie: image omitted
[2023-07-15, 12:01:57 PM] ~ Maisie: image omitted
[2023-07-15, 12:02:39 PM] ~ Maisie: Please, guys. It’s as simple as bringing a dish to the Mitbach or walking a few feet to put your trash where it belongs.
[2023-07-15, 12:03:34 PM] ~ Maisie: I cleaned all this shit up btw. You’re welcome.
[2023-07-15, 12:38:20 PM] ~ Sadie Quinn: @17786860074 @16043960611 @61450141228 @16044406994 Are any of you able to come to the chadar? You were signed up for breakfast serving and toranut
[2023-07-15, 12:38:51 PM] ~ Sadie Quinn: /Are there any tzevet members awake who can help? I’ve been here since 8 and I need to prep for the round Robin
[2023-07-15, 12:39:41 PM] Mira: I can be there in ten minutes
[2023-07-15, 12:41:14 PM] ~ Sadie Quinn: Thank you!
[2023-07-15, 1:03:56 PM] ~ Sadie Quinn: Come get your 75th Shabbat Seder Yom from the techni! Also round Robin group leaders come get your kid lists! That’s Jane, Jackson, Zev, Shmeppy, Rafi, Lily C, Yvonne, Lily S, Elsbeth, and Mika
[2023-07-15, 1:39:06 PM] ~ Oliver: Omg thank you
[2023-07-15, 2:26:28 PM] Gali Goldman: if you haven't sent me photos from tiyul please do so ASAP!
[2023-07-15, 3:16:47 PM] ~ miriam bohbot: hey. chalutzimot has their final mess tonight and we are low on tzevet because two people are on nofesh and chofesh. is anyone able to help out
[2023-07-15, 3:18:04 PM] ~ Oliver: Me and ilana are in
[2023-07-15, 3:18:22 PM] ~ Avishai Jacobson: I can as well
[2023-07-15, 3:19:15 PM] ~ Ilana Sela: image omitted
[2023-07-15, 5:07:30 PM] ~ Noa Franklin: Hey guys does anyone know where the dongle for the printer ks?
[2023-07-15, 6:03:47 PM] ~ Kiran: Hey need driver ASAP
[2023-07-15, 6:03:52 PM] ~ Kiran: anyone here
[2023-07-15, 6:17:52 PM] Gali Goldman: For what
[2023-07-15, 7:08:12 PM] ~ Sadie Quinn: Asepha notes July 15th:
- Yonni’s Iguana is coming on Thursday, stop by the M-Yad if you have time the next few nights so we don’t have to do all the kishutim on Wednesday night. There will also be a form asking about characters and costumes
- Help make the mo not gross! Pick up a dish or garbage every time you leave
- Thank you everyone for participating in the 75th Shabbat this morning
- You need to be up on time on Saturdays, that means you and your kids need to be around the binyan having had breakfast by 10:30
- Don’t put liquid in garbage bags and don’t let kids change the MYad garbage unsupervised
- Only clean water should go down gutters
- Shoutout to the tiyul specialists for a great tiyul!
- Where was tzevet at Shabbat shira and Rikkud? Please be there on time and with ruach! Be alert especially at transition times
- Tzofimot and Bonimot tzevet need to do their tiyul dishes
- Help the Madatz tzevet by sending Madatz to bed at 1am
- Madatz tzevet will send peula locations for when we get back
- If you’re not the one person staying with the Madatz, come to the mo for an amazing tzevet peula
- DO NOT go into the techni’s desks without permission
- P’kakim have mostly been good during avodah, please keep finding Ezra AND everyone let him know if you’ll be off for avodah so he can find a p’kak to cover
- If you need to switch toranut, decide amongst yourselves and tell Yonni. Send your kids 45 minutes before lunch and dinner (during Zman Sport and Chuggim)
- Return your MYad supplies and let Mira know if you ever make a mess, they would love to help but not on zero notice
- Prop the gender neutral upper bathroom open with a rock during showers (and don’t lose the sign!)
- Don’t promise your kids meds before bringing them to the mirp, also pre-screen them beforehand. The mirp closes at 10! Only bring kids during clinic hours! Return ice packs!
- if techni supplies are low, tell Ariella or fill out an order form
[2023-07-15, 7:17:02 PM] Edden: if you have the pish bowl or golda for your peula location tomorrow, would you be willing to switch with me for the ad gordon? because we have a method that requires us to be in the forest
[2023-07-15, 8:41:04 PM] Yvonne: Can anybody tell me when bonimot bash takeover is? Because I thought it was at Shira right before lunch
[2023-07-15, 8:41:04 PM] Yvonne: But my kids are saying kibbud
[2023-07-15, 8:43:16 PM] ~ Shani Avrahami Saraf: After lunch for sure
[2023-07-15, 8:43:17 PM] ~ Shani Avrahami Saraf: Idk exactly when
[2023-07-15, 8:43:19 PM] ~ Shani Avrahami Saraf: It's just that Shira used to be on the afternoon
[2023-07-15, 8:46:47 PM] Ron: When do we send them for toran ut
[2023-07-15, 8:48:44 PM] ~ mai: 6
[2023-07-15, 9:41:20 PM] ~ Prielle Laniado: tzevet! i know todays dinner looks a little different than usual, but this is a reminder to make sure each table has a madrichol siting at the end!!
[2023-07-15, 10:18:41 PM] ~ mai: send me things for triple M!!!!!!!!!!!
[2023-07-15, 10:28:56 PM] ~ Alex (shmeppy): when is musicale
[2023-07-15, 10:29:10 PM] ~ agustina: tzvet mail is now on the mo ping pong table
[2023-07-15, 10:43:41 PM] ~ Prielle Laniado: can someone on the vaad pls text me!
[2023-07-15, 10:47:22 PM] ~ miriam bohbot: found this in bathroom. leaving it in techni
[2023-07-15, 10:47:43 PM] ~ miriam bohbot: image omitted
[2023-07-15, 11:11:42 PM] ~ Roie Bargil: Does anyone have a bike they would like to lend me for nofesh tonight
[2023-07-15, 11:18:57 PM] ~ Maisie: Is that where it’s going to be delivered every week?
[2023-07-15, 11:21:45 PM] ~ Tal Fisher-Taylor: Chalutzimot and Amelimot tzevet, please send one member of your tzevet to the mirp tonight after havdallah to talk really quick about something. Thanks!
[2023-07-16, 12:22:20 AM] ~ Noa Franklin: Hey y’all the acoustic guitar case us missing, if u see if pls return it to the no
[2023-07-16, 12:22:23 AM] ~ Noa Franklin: Shmo
[2023-07-16, 12:29:23 AM] ~ blue: hey y’all i setup my final mess for my kids in the gezer earlier today but now everything is gone
[2023-07-16, 12:29:34 AM] ~ blue: all the candy, chips, mattresses are gone
[2023-07-16, 12:29:38 AM] ~ blue: and so is my laptop
[2023-07-16, 12:29:53 AM] ~ blue: PLEASE HELP ME I OWE MY KIDS CANDY
[2023-07-16, 12:34:49 AM] ~ Rachel Oppenheimer: Btw ana lost her phone
[2023-07-16, 12:35:21 AM] ~ Rachel Oppenheimer: And really needs it asap
[2023-07-16, 12:36:25 AM] ~ Rachel Oppenheimer: So if you find an iphone with a translucent turquoise-ish case pls let her know
[2023-07-16, 12:50:36 AM] ~ Mikal Stein: Hey there is no tzevet in the chadar!! Pls come now if you’re on
[2023-07-16, 1:27:06 AM] Shai Rubin: https://forms.gle/qAUj3oCyBFJ5HDCE9
[2023-07-16, 1:27:17 AM] Shai Rubin: Character sign-up for Yom Israel!!
[2023-07-16, 1:27:24 AM] Shai Rubin: the costume form will be coming
[2023-07-16, 1:27:51 AM] Shai Rubin: if you want to be a character, please fill out the form ASAP (ideally before Monday)
[2023-07-16, 1:42:35 AM] ~ Jane: if your kids are in lower machaneh pleaseee tell them to be quiet
[2023-07-16, 3:14:05 AM] Rue: Is there anybody in the mo that would like to be an escort
[2023-07-16, 3:15:17 AM] ~ blue: i got u
[2023-07-16, 3:22:19 AM] ~ Zachary Bunim: what’s the code for the fesh stuff locker?
[2023-07-16, 3:23:03 AM] ~ Gavriella TroperHochstein: Top: 860
bottom: 707
[2023-07-16, 1:39:45 PM] Rafi: image omitted
[2023-07-16, 1:41:32 PM] ~ Avishai Jacobson: Can I get someone to help me finish up Chadar Ochel? There’s still a lot of stuff on the front tables and nobody in dish pit
[2023-07-16, 2:23:24 PM] ~ Tal Fisher-Taylor: Did anyone leave their meds in a tiyul medbag by accident? Come see me and I will return them :)
[2023-07-16, 2:33:06 PM] ~ Gal Icek: image omitted
[2023-07-16, 2:49:18 PM] Elsbeth: Hi! Has anyone seen a jbl 4 speaker ? I can’t find mine so if you see one that’s not yours let me know😊
[2023-07-16, 3:07:22 PM] Rafi: image omitted
[2023-07-16, 3:58:36 PM] Yonnie: Scotty, Yair, Ron on lunch toranut, Edden, Eva Zev on dinner toranut!!!
[2023-07-16, 5:46:20 PM] ~ Solomon Bodrug: Is anyone free who would be down to chill in the bakery and portion out today’s kibbud? 🙏🙏🙏
[2023-07-16, 5:49:40 PM] ~ Oliver: Yes
[2023-07-16, 5:58:24 PM] ~ Oliver: Shoot sorry sol I actually have boating in 3 mins
[2023-07-16, 5:58:36 PM] ~ Oliver: I can do after
[2023-07-16, 5:58:42 PM] ~ Solomon Bodrug: ha all good all good
[2023-07-16, 5:58:47 PM] ~ Solomon Bodrug: kibbud is 4:15
[2023-07-16, 5:59:05 PM] ~ Oliver: Dang no sorry
[2023-07-16, 5:59:36 PM] ~ Jane: July 16 tzevet asepha
- remember the lock numbers (which are in the chat). Once you put in the code you have to push the lock, not pull
- You need to tell Ilana or oli before taking the sit on top kayaks. always wear life jackets and tell them how many people are going. NEED PERMISSION
- bonimot showering today
- janusz was a mess after an epep, CLEAN UP AFTER EPEP
- dont let kids in the myad on their own
[2023-07-16, 6:06:46 PM] ~ Noa Franklin: Does anyone on tzevet have Disney+ that they can use for the tochnit erev tn?
[2023-07-16, 6:07:16 PM] ~ Noa Franklin: u can log in on someone elses computer, we just forgot to ask in the asepha
[2023-07-16, 6:07:44 PM] ~ lily cohen: image omitted
[2023-07-16, 6:20:43 PM] ~ Gavriella TroperHochstein: Dear mitbach: can I take 2 potato? For zman madatz.
Love,
Gavi
[2023-07-16, 6:21:20 PM] ~ eli gerut: dear gavi, thanks so much for reaching out. you make take 2 potato exactly. no more no less
love,
mitbach
[2023-07-16, 6:21:44 PM] ~ Gavriella TroperHochstein: dear mitbach,
From where can I take 2 potato?
blessings, Gavi
[2023-07-16, 6:22:20 PM] ~ eli gerut: dear gavi, thanks so much for reaching out. 2 potato are under the sink near the speaker
sincerely,
mitbach
[2023-07-16, 6:22:44 PM] ~ Gavriella TroperHochstein: Dear mitbach,
You’re all the bestest. Thanks very much.
Love,
Gavi
[2023-07-16, 6:22:54 PM] Ron: What time isbonim showering ?
[2023-07-16, 6:23:19 PM] ~ Ariella Smith-Eidelman: After dinner zman chofshi
[2023-07-16, 6:23:33 PM] Ron: Tysm
[2023-07-16, 6:25:42 PM] ~ Noa Franklin: but also for realsies can anyone pls help?
[2023-07-16, 6:27:43 PM] Yvonne: I have it
[2023-07-16, 6:27:46 PM] Yvonne: I can download it
[2023-07-16, 6:35:17 PM] ~ Gavriella TroperHochstein: If there’s a free riff raff member we don’t have enough people to supervise zman madatz
[2023-07-16, 6:35:36 PM] ~ Gavriella TroperHochstein: So please come to the madregot if you can help!
[2023-07-16, 8:02:19 PM] Yonnie: Edden, Eva, and Zev are on toranut for dinner! If you see any of them, remind them!
[2023-07-16, 8:38:31 PM] Shai Rubin: This message was deleted.
[2023-07-16, 9:41:19 PM] ~ mai: Feshers pls come to misrad rosh achshav
[2023-07-16, 10:12:21 PM] ~ Jane: Pack list for Yom Madatz!!!
- towel
- bathing suit
- water
- sun protection (sunscreen, hat, sunglasses)
- left sock, right sock (not a joke)
- chill activities (cards, book, speaker)
- good adittude
[2023-07-16, 10:36:13 PM] ~ Sadie Quinn: Come to the techni if you haven't gotten your stuff for tochnit erev yet!
[2023-07-16, 10:37:30 PM] ~ Sadie Quinn: A reminder that we're not gathering as a whole machaneh first, just find your kids and go to your first station
- Sayarimot: Medura pit
- Chotrimot: AD Gordon
- Shomrimot: Chadar
- Tzofimot: Brecha bleachers
- Bonimot: Pish bowl
[2023-07-16, 11:22:38 PM] ~ scotty: hey gang i lost my green star necklace charm around machaneh somewhere today and i would be so sad to lose it forever, so if anyone finds it pls message me and give it to uri! thanks!
[2023-07-16, 11:58:41 PM] ~ Shelly Kositsky: image omitted
[2023-07-17, 12:00:43 AM] ~ Alex (shmeppy): image omitted
[2023-07-17, 12:01:06 AM] ~ Maisie: What the hell happened?
[2023-07-17, 12:15:54 AM] ~ Uri Oberlander: is rad hayom on time
[2023-07-17, 12:16:30 AM] ~ hannah: feel free to be that guy that is actually nuts
[2023-07-17, 12:18:36 AM] ~ Jane: getting in circle now
[2023-07-17, 12:40:32 AM] Arielle: Hey the AD Gordon mess was my chug I’m cleaning it tonight so sorry
[2023-07-17, 1:05:38 AM] ~ Prielle Laniado: This message was deleted.
[2023-07-17, 1:06:14 AM] ~ Avishai Jacobson: I can
[2023-07-17, 1:21:20 AM] ~ Shani Avrahami Saraf: Avishai can you come do the first sivuv with prielle?
[2023-07-17, 1:21:34 AM] ~ Avishai Jacobson: Yeah
[2023-07-17, 1:21:37 AM] ~ Shani Avrahami Saraf: Ty!
[2023-07-17, 1:21:40 AM] ~ Avishai Jacobson: Where?
[2023-07-17, 1:21:42 AM] ~ Shani Avrahami Saraf: Mirp
[2023-07-17, 1:28:17 AM] ~ Mica: When you’re done putting kids to bed please come help with yummy meerkats kishitum!! Show the madatz how grateful you are for all their help on Yom meyuchad!
[2023-07-17, 1:30:22 AM] India: r fesh ppl still at the slab?
[2023-07-17, 1:30:45 AM] Rafi: Yes
[2023-07-17, 1:41:47 AM] India: is it worth it for me to come or are u guys gonna leave soon
[2023-07-17, 1:42:06 AM] Rafi: Not sure what the vibe is
[2023-07-17, 1:42:15 AM] Rafi: Ppl are on the phone with their families
[2023-07-17, 1:47:59 AM] India: word lmao i’m on my way
[2023-07-17, 2:43:23 AM] Yonnie: Can i get an escort to the mo
[2023-07-17, 2:43:38 AM] ~ Mica: Ya boy
[2023-07-17, 2:43:42 AM] ~ Mica: Which side are you on
[2023-07-17, 2:43:51 AM] Yonnie: Nvm
[2023-07-17, 2:43:57 AM] Yonnie: We good
[2023-07-17, 2:43:58 AM] ~ Mica: Kk
[2023-07-17, 3:11:08 AM] ~ Zevi: Please if you’re not doing anything you should be helping madatz!
[2023-07-17, 3:11:46 AM] ~ Zevi: Only 3 or 4 people have helped
[2023-07-17, 3:12:01 AM] ~ Zevi: And there’s like way more than that many people available
[2023-07-17, 3:15:31 AM] ~ Kiran: Mitbach is closed
[2023-07-17, 4:48:34 AM] ~ Zevi: image omitted
[2023-07-17, 5:42:23 AM] ~ Mika: tyler
[2023-07-17, 11:36:33 AM] India: how long until takeover at mifkad?!
[2023-07-17, 11:39:11 AM] ~ Gavriella TroperHochstein: sometime in the middle
[2023-07-17, 11:46:43 AM] ~ Noa Franklin: Should we bring our stuff now or will we have time after?
[2023-07-17, 11:59:20 AM] ~ Jackson Nozick: Everyone grab food and go to the mo with your stuff
[2023-07-17, 12:01:12 PM] ~ Alex (shmeppy): where do we meet rn
[2023-07-17, 12:02:12 PM] ~ Jackson Nozick: The mo after u got food and ur stuff
[2023-07-17, 12:02:26 PM] ~ Alex (shmeppy): r we supposed to get food?
[2023-07-17, 12:03:28 PM] ~ Mica: No
[2023-07-17, 12:03:34 PM] ~ Mica: Do not come get food
[2023-07-17, 12:03:36 PM] Rafi: Everyone go to the mo with your stuff
[2023-07-17, 12:03:41 PM] ~ Jackson Nozick: Never mind bruh miscommunication I apologize food will be brought to us
[2023-07-17, 12:03:44 PM] Rafi: We will get food later
[2023-07-17, 12:03:50 PM] ~ Jane: GETTING FOOD LATER
[2023-07-17, 12:03:57 PM] ~ Jackson Nozick: But go to the mo now
[2023-07-17, 2:36:55 PM] ~ Roie Bargil: image omitted
[2023-07-17, 2:37:00 PM] ~ Roie Bargil: image omitted
[2023-07-17, 2:43:28 PM] ~ Jane: jenis
[2023-07-17, 7:57:31 PM] ~ maya: image omitted
[2023-07-17, 10:44:40 PM] ~ Gavriella TroperHochstein: Hi please don’t come back to machaneh and interact with kids, it really ruins the madatz’s experience. If you’re worried about specific kids feel free to let madatz tzevet know and we will check on them!
[2023-07-17, 11:50:32 PM] Gali Goldman: Can a few people volunteer to do dishes from today! Thanks!
[2023-07-18, 12:04:23 AM] ~ Lila: feshers we’re getting stuff on our way back asap
[2023-07-18, 12:08:42 AM] ~ Jane: feshers come to misrad rosh rn
[2023-07-18, 12:08:47 AM] Shai Rubin: image omitted
[2023-07-18, 12:09:27 AM] Shai Rubin: If you’re a character, I’ll find you to talk about costumes (or you can find me!)
[2023-07-18, 12:10:18 AM] Tyler: Gay !
[2023-07-18, 12:10:37 AM] Shai Rubin: that’s the idea, yes
[2023-07-18, 12:12:22 AM] Rafi: image omitted
[2023-07-18, 12:13:13 AM] Tyler: They prob had the diarrhoea
[2023-07-18, 12:13:29 AM] ~ Jane: sorry that was me
[2023-07-18, 12:23:10 AM] ~ Gal Icek: Hi if you are going on fesh tonight come to the misrad rosh
[2023-07-18, 12:23:27 AM] ~ Gal Icek: So that the rest of the people can also go on fesh
[2023-07-18, 12:28:03 AM] ~ Talya Stein: Mitbach is on their way
[2023-07-18, 12:28:34 AM] ~ Lila: prielle and i have to stop for gas
[2023-07-18, 12:28:55 AM] ~ Lila: image omitted
[2023-07-18, 12:29:21 AM] ~ Lila: for the movement
[2023-07-18, 12:41:26 AM] ~ blue: please tell madatz that they need to take their stuff from the pool asap:)
[2023-07-18, 12:44:58 AM] ~ Shelly Kositsky: Why is Diarrhoea spelled like that
[2023-07-18, 1:31:49 AM] ~ Tal Fisher-Taylor: Shmira come to mirp! It's time for your first sivuv
[2023-07-18, 1:32:14 AM] ~ Talia Joffe: Coming!
[2023-07-18, 1:48:36 AM] Ron: If anyone saw a salmon colour towel from tofay pls hml
[2023-07-18, 1:48:37 AM] Ron: /a black Nalgene with an I ❤️ israel sticker on it
[2023-07-18, 2:48:52 AM] ~ Talya Stein: Hey is any one in the mo rn?
[2023-07-18, 2:55:30 AM] ~ Talya Stein: Jane and I would adore an escort xoxo
[2023-07-18, 2:56:22 AM] ~ Alex (shmeppy): me and mikal r coming
[2023-07-18, 2:56:44 AM] ~ Lila: 🚨🚨🚨PSA: I AM NOT A LESBIAN🚨🚨🚨
[2023-07-18, 2:57:38 AM] ~ hannah: TWINSIES 🙌🙌🙌🙌
[2023-07-18, 3:05:51 AM] ~ maya: thank you for sharing you are so brave
[2023-07-18, 3:09:38 AM] ~ Talya Stein: Can someone confirm this? Lock not opening
[2023-07-18, 3:09:49 AM] ~ hannah: push it not pull
[2023-07-18, 3:10:00 AM] ~ hannah: it did work when i opened it earlier today!
[2023-07-18, 3:10:07 AM] ~ Talya Stein: Thanks
[2023-07-18, 3:15:41 AM] ~ Maisie: It’s only spelled like that in the UK. Other countries spell it “Diarrhea”.
[2023-07-18, 3:18:25 AM] ~ Jane: diarroa
[2023-07-18, 3:18:28 AM] ~ Jane: diareeeah
[2023-07-18, 3:18:36 AM] ~ Mikal Stein: Diroh
[2023-07-18, 3:18:41 AM] ~ Alex (shmeppy): diyarrohyahh
[2023-07-18, 3:18:51 AM] ~ Alex (shmeppy): dyeoreeah
[2023-07-18, 3:18:53 AM] ~ Maisie: NO. DIARRHEA. >:( <This message was edited>
[2023-07-18, 3:18:57 AM] ~ Jane: deeyareeoh
[2023-07-18, 3:18:59 AM] ~ hannah: dhiarhyuh
[2023-07-18, 3:19:16 AM] ~ Alex (shmeppy): Diarrhea
[2023-07-18, 3:19:23 AM] ~ Gavriella TroperHochstein: dear shmira the madatz bedtime is 12:30
[2023-07-18, 3:19:39 AM] ~ Gavriella TroperHochstein: so if you walk through the gezer please tell them to head to bed
[2023-07-18, 3:19:40 AM] ~ Maisie: image omitted
[2023-07-18, 3:19:47 AM] ~ Prielle Laniado: miss you guys
[2023-07-18, 3:21:01 AM] ~ Uri Oberlander: so sweet
[2023-07-18, 3:21:45 AM] ~ Alex (shmeppy): mikal just died in candy crush🙀🙀🙀
[2023-07-18, 3:23:17 AM] Rafi: What sports can be made into tournaments at machaneh
[2023-07-18, 3:23:25 AM] Rafi: Any ideas
[2023-07-18, 3:23:28 AM] Rafi: OTHER THAN GAGA
[2023-07-18, 3:23:37 AM] ~ Gavriella TroperHochstein: quidditch!
[2023-07-18, 3:23:39 AM] Alias: Gaga
[2023-07-18, 3:23:46 AM] Rafi: thank you gavi 😘
[2023-07-18, 3:23:48 AM] ~ Mica: frolf
[2023-07-18, 3:24:00 AM] ~ Gavriella TroperHochstein: super worm racing
[2023-07-18, 3:24:01 AM] ~ hannah: UTC
[2023-07-18, 3:24:12 AM] ~ hannah: hobby horse riding
[2023-07-18, 3:24:15 AM] ~ Gavriella TroperHochstein: pretend to be worms and raise
[2023-07-18, 3:24:18 AM] ~ Gavriella TroperHochstein: THIS
[2023-07-18, 3:24:26 AM] ~ Gavriella TroperHochstein: *race
[2023-07-18, 3:31:08 AM] ~ Gavriella TroperHochstein: https://www.google.com/search?q=competitive+hobby+horse+riding&oq=competitive+hobby+&aqs=chrome.1.69i57j0i512l2j0i22i30l3j0i390i650l2.2205389700j0j15&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:6e6d1d66,vid:2JTB7m_VRzs
[2023-07-18, 3:31:43 AM] ~ hannah: i keep seeing instagram edits of hobby horse riding its so funny
[2023-07-18, 3:32:09 AM] Rafi: POLL:
Zman sport tomorrow, Tournament Tuesday!
OPTION: Hobby Horse Tournament (12 votes)
OPTION: Kickball Tournament (0 votes)
[2023-07-18, 3:32:21 AM] Rafi: I would love ppl to share their thoughts
[2023-07-18, 4:08:47 AM] Rafi: This message was deleted.
[2023-07-18, 4:17:10 AM] Rafi: image omitted
[2023-07-18, 4:32:41 AM] ~ Jane: thats not me
[2023-07-18, 4:36:20 AM] ~ Prielle Laniado: dear tzevet, may lila and i have an escort please? much thanks, Prielle laniado
[2023-07-18, 4:36:56 AM] ~ Lila: from mo to chofnof
[2023-07-18, 12:43:26 PM] Ron: Any  chance tzevet laundry was somewhere else
[2023-07-18, 12:43:50 PM] Ron: Missing huge bag of clothes hml
[2023-07-18, 12:51:50 PM] ~ Uri Oberlander: 21 is at the madregot
[2023-07-18, 12:51:57 PM] Ron: - grey dickies pants
- black dickies pants
- 2 true religion jeans
- multiple UVIC sweaters
- like 7 pairs of saxx underwear
- etc stuff I can’t remember
Thanks 🙂
[2023-07-18, 12:52:08 PM] ~ Uri Oberlander: did u guys (bonimot tzevet) accidentally take 12
[2023-07-18, 12:52:10 PM] ~ Uri Oberlander: ?
[2023-07-18, 12:52:15 PM] Ron: Not in there
[2023-07-18, 12:52:19 PM] ~ Uri Oberlander: i think we switched up laundry bags
[2023-07-18, 12:52:44 PM] ~ Uri Oberlander: i just put two new 21 bagels at the madregot an hour ago, still no?
[2023-07-18, 12:52:56 PM] Ron: No:(
[2023-07-18, 12:56:11 PM] ~ mai: Ron your whole bag is in fire nation
[2023-07-18, 1:17:05 PM] Ron: My bad
[2023-07-18, 1:20:39 PM] Rue: Hi everyone, Shomrimot tzevet (+ rif raf and pkakim) are on for pesek zman today. I've assigned people to stations but if you have any issues lmk:
Art in the MYAD w/ Mira & Arielle
Jammin’ in the Shmo with Ana & Avishai
Rikkud in the Janusz w/ Zac & Rafi
Swimming at the Brecha with Blue & Yair
Reading and letter writing on the chof w/ Gali & Dani
[2023-07-18, 1:53:05 PM] Rafi: image omitted
[2023-07-18, 1:54:23 PM] ~ hannah: omg this is actually so funny thank u for doing my suggestion 🙌🙌
[2023-07-18, 1:54:44 PM] Rafi: @17787937381 and @17789033776, @12369970051 and @61478581858 , @16046710426 and @16049923495 , @17786782703 and @12369965850 , @16049701816 and @16043960611 come to me at the beginning of the block right away to get ur kid lists.
[2023-07-18, 2:08:22 PM] Rafi: @17789518206 u are replacing Edden cause she is on tikkun plan
[2023-07-18, 2:08:25 PM] Rafi: Olam*
[2023-07-18, 2:16:55 PM] Edden: hi can anyone shower with my kids tonight during zman chofshi after dinner?
[2023-07-18, 2:26:58 PM] ~ blue: i can
[2023-07-18, 2:35:35 PM] Edden: thanks!
[2023-07-18, 3:12:31 PM] Omer: Can anyone shower with the tzofimot boys today after dinner?
[2023-07-18, 3:17:59 PM] ~ Yair Cohen: Yeah I can
[2023-07-18, 3:24:52 PM] ~ hannah: tzevet mail is on the ping pong table in the mo
[2023-07-18, 3:32:12 PM] ~ Zachary Bunim: can you send toranut list possibly?
[2023-07-18, 3:32:54 PM] ~ Zachary Bunim: can someone*
[2023-07-18, 4:07:03 PM] ~ Roie Bargil: Where and when do we go
[2023-07-18, 5:14:57 PM] ~ Shelly Kositsky: Could someone pick me and Mika up from the village at around 4?
[2023-07-18, 5:28:40 PM] Rue: image omitted
[2023-07-18, 5:51:03 PM] ~ Talia Joffe: July 18th asepha notes
 there’s a GI bug going around right now, be on your kids about washing hands!
Don’t let your kids bang things like cups and plates together burning lunch shira (things break)
Who’s the dongle thief?? We need them back
Don’t steal from the technis desks!!!
Ezra is probably off tonight, he’ll send you the name of who to contact for maintenance things
Let’s go hard for “anachnu madrichim”
Count your kids before going to kesher meetings
The misradim are not for dirty dishes!!!
Stop leaving dirty dishes around machaneh
Clean the sevvy!!!
Stop leaving your tea bags in your cups. Throw out the bag before putting your cups away. Also for hot chocolate and coffee- give you mug a little rinsy rinse
No tochnit erev tomorrow night, we’re doing a machaneh wide movie night instead (send rue movie suggestions)
Tell Ariella where your chug is meeting
Check the big calendar in general, but also especially when you’re about to go off!
Text Ezra and Ariella that you’ll be off and missing your avodah/chug
Yom israel is approaching! Kish time!
[2023-07-18, 6:40:16 PM] Omer: @14132309249 @17789855311 the tzofimot are on the lower kvish ready for boating
[2023-07-18, 6:40:58 PM] ~ Noga Goldman: Ezra is on his way
[2023-07-18, 6:41:13 PM] ~ Oliver: Hey we in the fewrry line on our way back
[2023-07-18, 7:41:12 PM] ~ Shelly Kositsky: Can somebody pick me and mika up from the village at 6?
[2023-07-18, 8:00:49 PM] ~ Tal Fisher-Taylor: I'm here now and will be leaving around 530
[2023-07-18, 8:13:32 PM] Alias: Who is running fluent speaker ivrit?
[2023-07-18, 8:14:03 PM] ~ Gal Icek: Mergui
[2023-07-18, 8:14:13 PM] ~ Gal Icek: And they are on their way back
[2023-07-18, 8:17:25 PM] Alias: Thank you
[2023-07-18, 8:39:25 PM] ~ Maisie: What’s the name of the kid who wanted a Lego cake for their birthday?
[2023-07-18, 8:39:50 PM] ~ Maisie: I’m almost done and need to know whose name to write on it
[2023-07-18, 8:48:41 PM] ~ Prielle Laniado: Ava!!
[2023-07-18, 8:50:02 PM] ~ Shani Avrahami Saraf: Sophia r is replacing Leah for toranut
[2023-07-18, 9:01:52 PM] ~ Maisie: image omitted
[2023-07-18, 10:00:24 PM] ~ Theo: Rue removed ~ Theo
[2023-07-18, 10:00:57 PM] ~ Daniel: Rue removed ~ Daniel
[2023-07-18, 10:01:06 PM] Rory Hanna-Ryant: Rue removed Rory Hanna-Ryant
[2023-07-18, 10:01:12 PM] ~ Sammy Herzog: Rue removed ~ Sammy Herzog
[2023-07-18, 10:01:22 PM] ~ scotty: Rue removed ~ scotty
[2023-07-18, 10:01:47 PM] ~ Michelle Worland: Rue removed ~ Michelle Worland
[2023-07-18, 10:02:03 PM] Yarden: Rue removed Yarden
[2023-07-18, 9:49:07 PM] Mira: Hey I’m on chofesh tomorrow but I’m on tornut, can someone cover for me? I would love you for ever and ever
[2023-07-18, 10:08:35 PM] ~ Avishai Jacobson: I can do it if u still need
[2023-07-18, 10:09:13 PM] ~ Avishai Jacobson: I’m the peacock after all :)
[2023-07-18, 10:09:41 PM] Mira: Thank you so so much
[2023-07-18, 10:10:10 PM] ~ Avishai Jacobson: Just lunch or dinner as well?
[2023-07-18, 10:10:48 PM] Mira: Both I think
[2023-07-18, 10:24:35 PM] ~ Avishai Jacobson: Ok will do
[2023-07-18, 10:31:45 PM] Arielle: Come get a Seder yom or tziud for your station for drag night
[2023-07-18, 10:41:05 PM] ~ Maisie: Just letting y’all know that the birthday cakes are on the rack and roll near the bakery.
[2023-07-18, 10:41:22 PM] ~ Maisie: image omitted
[2023-07-18, 10:48:10 PM] ~ Noa Franklin: Can someone on the vaad send me the links to the videos pls
[2023-07-18, 10:55:14 PM] Arielle: https://www.youtube.com/watch?v=V1Etl95iIqQ (definition of drag changing over time)
https://www.youtube.com/watch?v=riLSCStHm9M (Willie Ninja clip from Paris is Burning)
https://www.youtube.com/watch?v=a8I5DpwgD8Y (voguing)
[2023-07-19, 12:11:03 AM] ~ Uri Oberlander: come to the madrigot and bring ur kids!
[2023-07-19, 1:08:34 AM] ~ Sadie Quinn: Can anyone help Yonni and I reset the chadar? I need to go do shmira
[2023-07-19, 1:19:27 AM] Rafi: THANK YOU SO MUCH TO WHOEVER CLEANED THE MIGRASH!! I don’t know who did it but it was super duper kind of you so thank you!
[2023-07-19, 1:19:44 AM] ~ Ariella Smith-Eidelman: Sasa did it :)
[2023-07-19, 2:02:53 AM] Rafi: I will thank him when I get the chance
[2023-07-19, 2:36:02 AM] ~ Noa Franklin: Y’all who has the acoustic guitar
[2023-07-19, 2:36:18 AM] Ezra: Feshers
[2023-07-19, 2:39:50 AM] ~ Shelly Kositsky: Hi everyone, I’m sending this message from Scotty:

Hi Tzevet Gadol, Scotty here. I wanted this message to come from me directly, but unfortunately I was taken out of the tzevet group chat before I could send it. Please do not hold Shelly accountable for passing on this message.
 I’m writing mostly to pass on information about my firing, because I have heard Maz is unwilling to share details. I think it’s important that people aren’t kept in the dark about this situation, especially because of the precedent it sets for machaneh this year.
In summary, these were the reasons I was given for being fired:
The official, contract reason, was ‘repeated insubordination.’
The issues brought up, constituting insubordination, during the firing conversation were:
- The protest at the beginning of the summer, concerning the gender policy
- Speaking poorly of Mazkirut and Maz decisions, directly to them, with other tzevet members, and to chanichimot (when asked for examples of speaking with chanichimot specifically, the only provided was the Peula I ran that day addressing the slides protest)
- Taking up too much space on tzevet gadol, and within my tzevet katan
- Communicating poorly with my tzevet katan
- People felt pressured to agree with my opinions, and uncomfortable disagreeing with me
- Bullying members of tzevet (the only example provided for this was a time when Noga walked over while me and others were having a conversation about the feelings circle, we stopped joking around when she came over, and then she said “Well that was uncomfortable” and we laughed awkwardly)
- The Peula that I ran for my kids that day, concerning the slides protest, protesting in general, and youth agency

The only concrete examples provided for any of this behaviour, despite me asking four times for examples during the conversation, were the protest at the beginning of the summer, the pish about the slides protest, and the conversation Noga came up to. To the best of my recollection, this account should be quite neutral and accurate. (I recorded a voice memo that detailed what was said in the conversation only about an hour afterwards, which I am partially going off of here.) I don’t feel that all of what was said was accurate to my behaviour at camp, but that isn’t really the most important thing here. I also want to say that I was not provided with feedback or warnings about any of the things mentioned in the firing conversation at any point, excluding perhaps a conversation Noga and Ezra and I had about the pish specifically, a couple hours before I was fired.

Going off of this as (unfortunately delayed) feedback, if you have ever felt bullied by me, or like I took up too much space on tzevet, please reach out to me, I’d love to have a conversation with you and offer an apology! That was never my intention, and I was really surprised to hear that during the firing conversation. It deeply matters to me to be able to have good respectful conversations on tzevet, and create welcoming and inclusive space. That was the way I understood that I was behaving, and it’s important to me to hear outside perspectives if you feel that was not the case.
If you have any clarifying questions, or just want to discuss more in depth, please feel free to reach out to me also! My goal with this is to be as transparent as possible. I also encourage you all to have conversations with each other about your thoughts on this situation, which I am sure you are doing anyways.
 I miss all of you, and I’m really sad I wasn’t given the opportunity to say goodbye to the vast majority of you. I really hope that I’ll get to see you guys again and this isn’t our last encounter. <3
I’m also sending along the message that I sent to mazkirut just now, which outlines my thoughts about the situation a bit more in depth. Feel free to give it a read if you want.
All my love, uh!
Scotty
[2023-07-19, 2:40:24 AM] ~ Shelly Kositsky: Also:
To Mazkirut 2023–
First off, I want to make it abundantly clear that criticism about your leadership is not akin to bullying, nor is it a reflection of your individual worth. I hope that you read the following message with open minds. It is a long message, but in the name of dialogue I trust that you will read it anyways.
I stand by what I said behind closed doors, to other members of tzevet about your actions, and speaking my mind should not be a fireable offence.
Every conversation that I have had with any of you was in the name of generating dialogue and creating meaningful change at machaneh. No violent tactics were used, and no words were spoken to any of you about anything other than choices you had made in leadership positions. I took great care to speak clearly and calculatedly and without anger in my voice. However, time and time again, I was left feeling like what I said was received as an ego hit, an attack on you as individuals. As a leadership body in general, but particularly that of a supposedly radical youth movement, it is critical to be able to receive criticism without taking it personally, and reflect on the opinions shared rather than going on the defensive. The fact that you cited conversations I have had with various members of Mazkirut as a reason why you were firing me further enforces the idea that dialogue is not possible within this space.

Once again, there was a deep lack of care present in the way this situation was handled. No previous warnings were given. At no point did any of you make it clear to me that my actions were fireable. I was never given clear feedback, or even a strike, about any of the things that you listed in the firing conversation. How does this represent restorative justice? How does this reflect machaneh values? At what point was I allowed the opportunity to reconsider, to reflect about my actions and the supposed impact on tzevet gadol or mazkirut?
I was ushered out of camp immediately after the firing conversation, without the ability to say goodbye to the majority of tzevet, any of my chanhichimot, or machaneh as a space that I have called home for the past 12 years of my life. I urge you all to think about what you would have felt like in my position. I am deeply grieving.
Did anyone check to make sure I was going to be able to make it back to Vancouver that night? That there was a ferry for me to catch in Nanaimo? That I had a way to pay for myself to get back? Nobody checked in with me to make sure I had somewhere to sleep in Vancouver, nobody offered me dinner. Thank god my phone happened to be fully charged (a rare occurrence at machaneh), otherwise I would have been alone, with no information on ferry schedules, no way to contact someone about getting me home. This also goes for anyone else who is fired at machaneh. This should not be the operating protocol.

During the firing conversation, you said that this was for the good of chanichimot and machaneh, but from what I have heard from my tzevet and other individuals on tzevet gadol, many chanichimot are understandably distraught and confused. I would like all of you to reflect on how this has impacted them, and what positive effects there have been thus far. How have you cared for them in this situation? What support have you provided my tzevet in caring for them? Additionally– how did you think you were going to keep this under wraps? Are you so ashamed of your own decisions that you cannot admit to children that I was fired, you must obscure it as my own decision?
The same thing goes for tzevet: How has this had a good impact on tzevet culture, and tzevet gadol as individuals and as a collective? What message has this sent about the way that mazkirut will treat tzevet members? I guarantee you this will affect your relationship with the majority if not the entirety of tzevet gadol. And what about the extra weight that my tzevet now has to carry, and the upset kids they are left to deal with? Several of them have reached out to me expressing that they are deeply upset by this situation, and the impact it is having on them and the kids.
So many members of tzevet have reached out to me to express upset about this situation and their support over my actions. I know that many more have talked to others besides me about their upset. I hope they bring their concerns and thoughts to you as well. I believe this has a deeper impact than you are aware of.

Additionally, it is bizarre to me that this conversation has centred around my behaviour as an individual, rather than the structural and political issues within the Machaneh space that I am attempting to bring to light. If you are committed to creating machaneh as a radical space, there needs to be space for disagreement, and inquiry into how we can grow. Also, the complete condemnation of protesting within this space is absurd. Why are we, who sing Union Maid and Solidarity Forever and Banks of Marble and so many other songs, resistant to organizing within our own space? Why is it shut down immediately, rather than inquired into, rather than addressed? Why is it taken as a personal offence?
What you have done is send a strong message that anyone who speaks ill of the decisions made by mazkirut, and the environment at machaneh will be dismissed without warning. Is this the dialogue that you supposedly stand for? The reason why there is such division on tzevet, and a growing distrust of mazkirut is not the things me, or anyone else on tzevet is saying about your actions. It is the actions themselves.

The move to fire me goes against everything I thought Machaneh stood for: youth empowerment, collective action, restorative justice, inclusive space, education, dialogue, democracy… I am deeply disappointed in all of you, as representatives of machaneh and what we stand for, as a managing body, and above all, as my peers whom I have grown up with. I really hope that this message generates some reflection for you all.
With hope for a better future at Miriam,
Scotty
[2023-07-19, 3:36:52 AM] ~ Jackson Nozick: This message was deleted.
[2023-07-19, 4:19:53 AM] ~ Jackson Nozick: This message was deleted.
[2023-07-19, 4:22:08 AM] ~ Jackson Nozick: So it's easier to read
[2023-07-19, 4:24:40 AM] ~ Jackson Nozick: This message was deleted.
[2023-07-19, 4:25:01 AM] ~ Uri Oberlander: yoooooo
[2023-07-19, 4:25:22 AM] ~ Jane: jackson stop
[2023-07-19, 4:25:33 AM] ~ Jackson Nozick: Wrong one cause this one is editable
[2023-07-19, 4:30:07 AM] ~ Jackson Nozick: Here's the correct version https://docs.google.com/document/d/1pe_1lOZgFEn5XPwFZdW2VZaj0jPmr_xIrVjyIMYyEBs/edit?usp=drivesdk
[2023-07-19, 12:31:09 PM] ~ Alex (shmeppy): does anyone know how to set the justice league watches
[2023-07-19, 12:31:49 PM] ~ Jackson Nozick: Hold the little button on the side
[2023-07-19, 1:17:24 PM] Ron: If people could help tonight with kish / setup for yom ysrael would be much apreesh 🇮🇱💙
[2023-07-19, 1:17:49 PM] Tyler: No Ron I hate u
[2023-07-19, 1:18:13 PM] Ron: 💙💙
[2023-07-19, 1:35:14 PM] ~ Lila: image omitted
[2023-07-19, 1:35:39 PM] ~ Lila: image omitted
[2023-07-19, 1:45:41 PM] Rafi: image omitted
[2023-07-19, 1:48:07 PM] Rafi: Just realized Tyler will be on kupa trip so someone can replace Tyler thank you
[2023-07-19, 1:48:26 PM] Omer: Can someone make a ramkol saying all tzofimot go to the playground
[2023-07-19, 1:48:27 PM] Omer: Please thank you
[2023-07-19, 3:22:01 PM] Yonnie: image omitted
[2023-07-19, 3:35:56 PM] Yvonne: If anyone sees my phone charger please tell me!! It has my name taped on to it
[2023-07-19, 4:04:58 PM] ~ Mica: was shira called?
[2023-07-19, 4:05:08 PM] ~ Ariella Smith-Eidelman: Yes
[2023-07-19, 4:05:19 PM] ~ Mica: slayzizzle
[2023-07-19, 5:57:36 PM] ~ Talia Joffe: July 19th asepha notes
 stop stealing candy from Ariella and Noga’s desk!!!
Yay for shira (both before and after lunch)!!!! Remember not to sing shira songs too fast so kids can learn and keep up!
Bring back ‘I want it that way’ when washing hands!!
Don’t let kids bang on mirp doors after hours. People are trying to sleep!
Talk to channies about not smearing poop on the toilet seats/bathroom walls
Bring ruach to mifkad in the morning!!
Don’t leave your tea bags in your mugs and give coffee and hot chocolate a rinsy rinse when you’re done!
Garbage will be taken care of soon! There were no garbage bags this morning :(
Yom israel is tomorrow! Come help out tonight for setup/kish tonight. Find maya and she’ll direct you where to go to help out
Painted on cardboard/paper cannot be recycled. Neither can construction paper. Don’t put it in the michzur.
If you are a character for yom israel tomorrow, find shai after the asepha to figure out costumes
Kids are hiding their GI sickness. Ask your kids if they’re having stomach problems
KIDS HAVE TO WASH THEIR HANDS!! Don’t share water bottles, but make sure kids are still drinking
We don’t do the “no more cornbread” announcements at meals. Just tell kids calmly that food is out by table (not solely about cornbread… this is about all foods)
Make sure kids are getting 1 piece of cornbread each
If your kids borrow stuff for tiyul, make sure they give them back to the person
Don’t breathe in the sharticles!!!!
Stop banging plates and bowls and kitchen things together during lunch shira
Come talk to Mairav about running chug Alef and/or bet
Pretend to be old and tired during anachnu madrichimot
Be with your children on yom israel… maya will poop in your bed if you’re not present
Tonight in movie night instead of tochnit erev. If you don’t want to have your kids there, let Sadie or rue know so that they don’t wait for you before playing the movie
In the madrichol Toran “rosh song” at lunch shira we say “prielle Prielle Prielle melafefon gadol” which means big cucumber
[2023-07-19, 5:57:39 PM] Shai Rubin: if you’re a character tomorrow please find me as soon as you can
[2023-07-19, 6:10:53 PM] ~ Jane: 🚨ANNOUNCEMENT🚨 India’s phone named butthole is missing so keep an eye out
[2023-07-19, 8:13:20 PM] ~ Prielle Laniado: bonimot tzevet can i shower with u guys
[2023-07-19, 8:52:52 PM] ~ mai: Yes good w me
[2023-07-19, 10:03:28 PM] ~ Shani Avrahami Saraf: Hi tzevet just wanted to say that we do not need to be panicking about the gi bug! No one is in the mirp for it any longer and most likely it was a false alarm. Please still be vigilant about handwashing, but no need to be freaking out!
[2023-07-19, 10:18:51 PM] ~ Sadie Quinn: ✨🎬MOVIE NIGHT REMINDERS 🎬✨
- If you are planning on coming to movie night, bring your kids to the chadar at 7:45
- Va’ad Youth Indifference is prepping with Gal during the movie
- If your tzevet has urgent planning to do, let me or Rue know and we can arrange for some or all of you to work during the movie. This is NOT, however, an opportunity to just hang out with tzevet
- P’kakim and all other available tzevet members are supervising kids in the chadar!
[2023-07-19, 10:20:08 PM] Rafi: When the emojis don’t fit on one line
[2023-07-19, 10:20:08 PM] Rafi: 🤮🤮🤮
[2023-07-19, 10:20:39 PM] Rafi: (I love Sadie btw)
[2023-07-19, 10:33:57 PM] Shai Rubin: ✨Important costume information ✨
If anyone has any of the following clothing items that they can lend out, they should please bring them to the chadar after putting kids to bed!!
-baggy Adam Sandler-esque clothes for Jane
-a suit jacket for Mergui
-something neon green or lime green for Shmeppy (bring it even if it wouldn’t fit him)
-a sporty headband for Zac
-black sunglasses for Mikal and Lily
-a silver or gold, or otherwise disco-suitable/sparkly top for Rafi
-a long dress for Maya
-something businesslike for Zev
-a bright pink shirt for Yair
-white, grey, or brown robes (or really anything with Moses vibes) for Uri
[2023-07-19, 10:34:24 PM] Shai Rubin: Madatz tzevet, please send this list to the Madatz group chat so they can contribute as well
[2023-07-19, 10:39:12 PM] ~ Mica: What is the movie?
[2023-07-19, 10:39:32 PM] Rue: Your kids should wear their Pyjamas!!!!!
[2023-07-19, 10:48:37 PM] Gali Goldman: Anyone need help with bedtime today?
[2023-07-19, 11:17:30 PM] Cate: The movie is spiderman into the spiderverse
[2023-07-19, 11:23:55 PM] ~ Oliver: GUYS HI LOOK WHAT I FOUND YOU HSVE TO FILL IT OUT PLEASE https://forms.gle/cEPatGRyvSV2E9Xi7
[2023-07-19, 11:24:19 PM] ~ Oliver: its just a tiyul feedbeck form but please do take 5 mins to do it
[2023-07-19, 11:24:37 PM] ~ Oliver: 🙏🙏🙏
[2023-07-19, 11:24:44 PM] ~ Mica: image omitted
[2023-07-19, 11:27:45 PM] ~ hannah: omg actually fantastic reminder
[2023-07-19, 11:28:14 PM] Cate: my retainer wearing as being lacking at camp
[2023-07-19, 11:28:20 PM] Cate: I needed that ty
[2023-07-19, 11:28:59 PM] ~ Jane: 🥰🥰
[2023-07-19, 11:50:01 PM] ~ mai: @17786894559 I have a neon pink shirt
[2023-07-19, 11:50:51 PM] ~ hannah: @61477604777 i have a longish dress
[2023-07-19, 11:51:14 PM] Cate: @16048625227 I have a sports headband
[2023-07-19, 11:54:22 PM] Yonnie: @17788740130 or Lily, i have black sunglasses
[2023-07-19, 11:55:55 PM] Edden: does anyone have black sun glasses for me?
[2023-07-20, 12:00:08 AM] Yonnie: Whoever finds me first may claim my black sunglasses
[2023-07-20, 12:00:48 AM] ~ Uri Oberlander: image omitted
[2023-07-20, 12:01:02 AM] ~ hannah: THATS MY RON
[2023-07-20, 12:15:32 AM] Shir: Hi Yom Israel briefing is at 11:30. Please come to the Myad earlier if you can (:
[2023-07-20, 12:29:50 AM] Cate: Hi everyone
[2023-07-20, 12:30:14 AM] Cate: Ana has lost her phone again and wants me to ask everyone to keep and eye out for it
[2023-07-20, 12:36:53 AM] ~ Tal Fisher-Taylor: Yes
[2023-07-20, 12:41:49 AM] Ron: Anyone take the gazebos from outisde the grofit we need for yom ysrael 🇮🇱🇮🇱
[2023-07-20, 12:56:36 AM] ~ Shani Avrahami Saraf: What time is kima tmrw?
[2023-07-20, 12:56:46 AM] ~ Gal Icek: 8:15
[2023-07-20, 1:35:39 AM] ~ Noa Franklin: Hello mitbach friends, do u have yeast?
[2023-07-20, 1:40:59 AM] ~ Solomon Bodrug: yes
[2023-07-20, 2:06:45 AM] ~ Jane: there is a lot of yelling in lower machaneh rn
[2023-07-20, 2:07:01 AM] ~ Jane: pls stop
[2023-07-20, 2:07:23 AM] Ron: Could someone bring me fairy  light to the chadar pls💙💙🇮🇱
[2023-07-20, 2:21:19 AM] ~ Gal Icek: @tzofimot are you done with bed time? Will you be there for briefing?
[2023-07-20, 2:21:41 AM] Omer: We will be done in five min
[2023-07-20, 2:21:51 AM] Omer: We will be there for briefing
[2023-07-20, 2:22:02 AM] ~ Mikal Stein: Also are bonimot done with bedtime^^
[2023-07-20, 2:22:29 AM] ~ Ariella Smith-Eidelman: Yes
[2023-07-20, 2:24:57 AM] ~ Jackson Nozick: Where is the meeting at
[2023-07-20, 2:25:06 AM] ~ Gal Icek: Chadar
[2023-07-20, 3:32:23 AM] ~ Zevi: image omitted
[2023-07-20, 3:50:01 AM] ~ Mica: This message was deleted.
[2023-07-20, 3:50:18 AM] ~ Zevi: Wrong chat bro
[2023-07-20, 3:50:32 AM] ~ Mica: This message was deleted.
[2023-07-20, 3:50:32 AM] ~ Mica: This message was deleted.
[2023-07-20, 3:50:43 AM] ~ Mica: Damn
[2023-07-20, 3:50:48 AM] ~ Mica: That’s embarrassing
[2023-07-20, 3:51:01 AM] Rafi: Embarrassing
[2023-07-20, 3:53:42 AM] ~ Jackson Nozick: An explanation was needed
[2023-07-20, 4:05:54 AM] ~ Gavriella TroperHochstein: Madatz bedtime is now! If there are any of them still helping with set up, please send them to bed!
[2023-07-20, 12:28:40 PM] ~ Jane: does anyone have a laptop I can borrow for my station
[2023-07-20, 1:23:18 PM] Ron: lunch set up come to chadar to help bring tables / benches up to Janusz!!!!!!!🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱💙💙💙
[2023-07-20, 1:33:34 PM] Ron: Lunch Setup where u at???
[2023-07-20, 1:33:47 PM] Ron: Bring benches to lower kvish
[2023-07-20, 1:34:25 PM] ~ Lila: i’m running a station i’ll come right after!
[2023-07-20, 1:35:42 PM] Ron: Tysm
[2023-07-20, 1:41:24 PM] Ron: image omitted
[2023-07-20, 1:46:28 PM] ~ maya: currently group leading
[2023-07-20, 1:56:47 PM] ~ Noa Franklin: Hey do ppl have JBLs they can use for the dance party?
[2023-07-20, 1:56:56 PM] ~ Noa Franklin: *beach party
[2023-07-20, 1:57:12 PM] ~ Noa Franklin: We wanna connect them to each other so the more the merrier
[2023-07-20, 2:00:16 PM] Ron: Can someone pls locate fairy lights and put them in the chadar
[2023-07-20, 2:01:23 PM] ~ Tal Fisher-Taylor: Yeah you can use mine
[2023-07-20, 2:13:48 PM] ~ Mica: Me. You’re telling me that all jbls can connect to eachother?
[2023-07-20, 2:14:27 PM] ~ Shelly Kositsky: Hey guys me and t stein would love a driver to bring us to the village!!
[2023-07-20, 2:18:58 PM] Elsbeth: Hi. There is a station at the januz during toranut set up
[2023-07-20, 2:18:58 PM] Elsbeth: What should happen with that
[2023-07-20, 2:19:35 PM] ~ Mica: When it says chadar set up on the Seder Yom it actually means janusz
[2023-07-20, 2:49:24 PM] Cate: Beach party setup were I'm the techni office!!
[2023-07-20, 3:04:04 PM] ~ Uri Oberlander: if u see sasa popovic tell him i’m thirsty
[2023-07-20, 3:13:21 PM] ~ Ariella Smith-Eidelman: image omitted
[2023-07-20, 3:36:05 PM] ~ Lila: anyone need me anywhere?
[2023-07-20, 3:38:27 PM] Ron: Anyone have fairy lights
[2023-07-20, 3:40:24 PM] Ron: Or leds
[2023-07-20, 3:40:37 PM] Ron: Purple streamers
[2023-07-20, 3:43:18 PM] ~ Ariella Smith-Eidelman: Ron you should look in the machztan, cheder stereo or you may have to use from people ohelim
[2023-07-20, 3:47:59 PM] Ron: Tysm
[2023-07-20, 4:14:31 PM] ~ Lila: there’s boxes of lights from my chug in the machzan
[2023-07-20, 4:14:44 PM] ~ Lila: but idk if they work
[2023-07-20, 4:52:36 PM] Cate: hi everyone! I lost my water bottle that has my friendship bracelets on it
[2023-07-20, 4:52:36 PM] Cate: and I'm running the friendship braclet making station for the beach party
[2023-07-20, 4:52:36 PM] Cate: it's a blue nalgene that has stickers all over it saying cate brachman
[2023-07-20, 4:52:37 PM] Cate: it's also very noticeable because it has an EXTREMELY ugly chunky beachy friendship braclet on it made of thick twine
[2023-07-20, 4:52:59 PM] Ron: In lost and found!
[2023-07-20, 4:53:07 PM] Ron: At janusz
[2023-07-20, 5:22:08 PM] Ron: Pls come help clean janusz
[2023-07-20, 5:22:21 PM] Ron: Also uri pls bring the car💙🇮🇱
[2023-07-20, 5:22:30 PM] ~ Uri Oberlander: coming
[2023-07-20, 5:25:50 PM] ~ Shelly Kositsky: Can someone pls pick me and talya up from twin between 3-3:30?
[2023-07-20, 5:31:30 PM] ~ Jane: p sure there should be another chotrimot shetach toran for hydrotherapy
[2023-07-20, 5:37:17 PM] ~ mai: Hi tzevet! Just a reminder to pls find me about chug alef and bet for Saturday
[2023-07-20, 5:44:57 PM] ~ Prielle Laniado: image omitted
[2023-07-20, 5:48:03 PM] ~ Uri Oberlander: anyone have eyes on maayan
[2023-07-20, 6:10:45 PM] Shir: can someone from the chotrimot tzevet please go to hydrotherapy if still needed?
[2023-07-20, 6:19:37 PM] ~ Gavriella TroperHochstein: @16048625227 and @16049701816 please come to the misrad techni to be briefed on the peulah
[2023-07-20, 6:42:42 PM] ~ Sadie Quinn: Tzevet go to pish with your kids!
Sayarimot: pish bowl
chotrimot: MYM
Shomrimot: AD Gordon
Tzofimot: Gezer
Bonimot: Golda
One person on each tzevet has been briefed and has the tziud, message me if there are any issues!
[2023-07-20, 10:08:56 PM] ~ Zachary Bunim: any chance anyone can switch me for shmira tonight? you can either do it with yair or get someone else with you. let me know thanks
[2023-07-20, 10:14:58 PM] Mira: If people aren’t busy they should come down to the lower kvish to learn the dance THIS IS SO IMPORTANT‼️‼️
[2023-07-20, 10:47:33 PM] ~ Gal Icek: If you don't put kids to bed after rad hayom you are helping with clean up so stay on the migrash and we will finish it in 20 minutes
[2023-07-20, 10:48:11 PM] ~ Gal Icek: Also come to the migrash and bring your kids
[2023-07-21, 12:26:38 AM] ~ hannah: image omitted
[2023-07-21, 12:51:08 AM] Ron: Thanks to everyone today 💙💙🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱 / madatz tzevet tell them tysm 🇮🇱🇮🇱💙💙💙
[2023-07-21, 12:55:11 AM] ~ Roie Bargil: Hey guys there was a crate with a bunch of water guns in the techni office and it had a water bottle in there, if anyone knows where it’s gone please lmk
[2023-07-21, 1:05:55 AM] ~ Maisie: GUYS INDIA FOUND HER BUTTHOLE!!!
[2023-07-21, 1:06:00 AM] ~ Maisie: :D
[2023-07-21, 1:34:12 AM] India: found butthole y’all
wooooohooooooo
[2023-07-21, 1:36:24 AM] ~ Lila: yaayyyyyy
[2023-07-21, 2:59:51 AM] ~ Jackson Nozick: Bruh
[2023-07-21, 3:09:17 AM] ~ Gal Icek: This message was deleted.
[2023-07-21, 3:27:22 AM] ~ Mica: This message was deleted.
[2023-07-21, 3:28:52 AM] ~ Mica: image omitted
[2023-07-21, 3:43:18 AM] Rue: Kima will be at 9:00am tomorrow just so people know
[2023-07-21, 3:57:35 AM] ~ Maayan: Can 2 people walk me to bed ?
[2023-07-21, 3:57:54 AM] ~ Oliver: Wya?
[2023-07-21, 3:58:04 AM] ~ Maayan: The mo
[2023-07-21, 11:55:08 AM] Tyler: What time kima
[2023-07-21, 11:55:16 AM] ~ Gal Icek: 9
[2023-07-21, 12:13:07 PM] ~ Shelly Kositsky: Whats the update on the big meow
[2023-07-21, 12:20:59 PM] ~ Maisie: Have we named the smol meow yet?
[2023-07-21, 2:07:14 PM] ~ Mica: Where is the projector screen?
[2023-07-21, 2:09:13 PM] ~ Sadie Quinn: Tzevet come to the mo!!!!!
(Unless you are the one person staying with the kids)
[2023-07-21, 2:10:50 PM] ~ Mica: There are the poles but I don’t see the screen itself
[2023-07-21, 2:11:06 PM] Rafi: What is shower schedule today?
[2023-07-21, 2:11:21 PM] ~ Gal Icek: Will be sent before lunch
[2023-07-21, 2:14:34 PM] Yvonne: Umm the bonimot have befriended a mouse
[2023-07-21, 2:17:44 PM] Yvonne: It’s really cute
[2023-07-21, 2:23:49 PM] Yvonne: image omitted
[2023-07-21, 2:28:22 PM] Rafi: Can someone do the last round of sevvy dishes tonight because I’m madrichol toran but I’m off at 3 today. I’ll do dishes before I go off, thank you!!
[2023-07-21, 2:40:12 PM] ~ mai: This message was deleted.
[2023-07-21, 2:40:26 PM] ~ mai: This message was deleted.
[2023-07-21, 2:47:05 PM] ~ mai: image omitted
[2023-07-21, 2:47:06 PM] ~ mai: image omitted
[2023-07-21, 2:49:18 PM] ~ maya: when do dayfesh people get back on
[2023-07-21, 2:50:21 PM] ~ Lila: 3pm
[2023-07-21, 3:22:01 PM] ~ Maisie: image omitted
[2023-07-21, 3:29:42 PM] ~ Maisie: image omitted
[2023-07-21, 4:20:24 PM] ~ Sadie Quinn: Here are the tzevet members assigned to mishpachot today! Before you fight me, please remember that lots of tzevet members are off and I had to balance people between mishpachot.
- Richmond: Shai, Omer, Lily C, Yair
- North Van/Suburbia: Elsbeth, Ilana, Arielle
- Random Canada: Talia, Mira
- USA: Mica, Oliver, Avishai
- Vancouver 1: Zac, Maayan, Edden
- Vancouver 2: Mairav, Lila, Blue
- Vancouver 3: Yvonne, Alias, Uri
- Vancouver 4: Tyler, Mika, Ron
- Vancouver 5: Prielle, Maya, Lily S
- Victoria: Ana, Cate, Zev, Eva
- Israel: Noa B, Mergui, Shir
I will hand out kid lists at the Janusz at 4pm! Let me know if you're not on a mishpacha and I will assign you to one
[2023-07-21, 4:59:58 PM] Zev: Hey, we need 1 person to shower with the girls and 1 person to shower with the boys for tzofimot.
[2023-07-21, 5:16:08 PM] Mira: I’m here at gender neutral if kids need it
[2023-07-21, 5:25:08 PM] ~ Sadie Quinn: I can join the girls
[2023-07-21, 5:42:12 PM] ~ Gal Icek: Come to Cafe kar! But make sure not all of your tzevet is here at the same time 😬
[2023-07-21, 6:37:46 PM] ~ Sadie Quinn: Hot fresh Shabbat sidrei Yom in the techni by the door! Grab one for your tzevet! I couldn’t staple it but it’s two sheets
[2023-07-21, 7:15:30 PM] ~ Mikal Stein: image omitted
[2023-07-21, 7:33:39 PM] ~ Prielle Laniado: is there lactose in the brownies?
[2023-07-21, 9:31:37 PM] ~ maya: fesh girlie pops can we meet
[2023-07-21, 9:37:16 PM] Rue: https://docs.google.com/forms/d/e/1FAIpQLSe7FkMPnwZipoqDw-Fe0M1xU60eLoDFekK6BN_57FCulTi1Sg/viewform
[2023-07-22, 12:14:12 AM] Gali Goldman: chevarti today at 11:30! in the mo!
[2023-07-22, 12:34:23 AM] ~ Talia Joffe: We should start at 12 so all tzevet members can attend at the starting time
[2023-07-22, 12:37:29 AM] ~ Prielle Laniado: This message was deleted.
[2023-07-22, 12:38:39 AM] Gali Goldman: Ok!
[2023-07-22, 1:20:58 AM] ~ Shani Avrahami Saraf: Shmira 👀
[2023-07-22, 1:31:29 AM] ~ Shani Avrahami Saraf: @17786894559 @12674156338 it's time for shmira!
[2023-07-22, 1:57:14 AM] ~ Shani Avrahami Saraf: If anyone has eyes on noa franklin please send them to the mirp
[2023-07-22, 2:04:11 AM] ~ Noa Franklin: Omw!
[2023-07-22, 2:05:09 AM] Edden: if anyone finds an ipod, please give it to me. it is my kid’s
[2023-07-22, 2:23:56 AM] ~ mai: PREP YOUR CHUGEI ALEF
[2023-07-22, 2:24:29 AM] ~ Mica: I actually think 11:30 is better hot take
[2023-07-22, 2:24:37 AM] ~ mai: image omitted
[2023-07-22, 2:29:12 AM] India: chevrati will be 5ish min late
[2023-07-22, 2:29:18 AM] ~ mai: If you can’t run smth here pls let me know right now
[2023-07-22, 2:29:31 AM] Rafi: When is chevrati starting
[2023-07-22, 2:30:54 AM] ~ maya: aussie rikkud?
[2023-07-22, 2:34:11 AM] India: 11:40
[2023-07-22, 2:37:41 AM] ~ Ariella Smith-Eidelman: I thought midnight
[2023-07-22, 2:37:44 AM] ~ Ariella Smith-Eidelman: ?
[2023-07-22, 2:38:12 AM] ~ Uri Oberlander: @16047257054 so amazing how u can run 2 chug bets at once
[2023-07-22, 2:39:41 AM] India: lol nvm ignore this then
[2023-07-22, 2:39:47 AM] India: 12!
[2023-07-22, 2:40:40 AM] ~ Sadie Quinn: Good catch Uri, can anyone run watercolours with Mira?
[2023-07-22, 2:43:07 AM] ~ Prielle Laniado: it’s all been covered!! thanks everyone 😘
[2023-07-22, 2:45:53 AM] Ezra: Of you think you see or here a cougar please call me immediately
[2023-07-22, 2:45:53 AM] Ezra: The cougar was spotted in lower machaneh. You must stay inside
[2023-07-22, 2:45:53 AM] Ezra: Simple.
[2023-07-22, 2:45:58 AM] ~ Mica: Where in lower
[2023-07-22, 2:46:11 AM] ~ Mica: Do people need to stay inside in upper as well?
[2023-07-22, 2:46:19 AM] Rue: Yes
[2023-07-22, 2:47:42 AM] ~ Gavriella TroperHochstein: can people move locations or is it stay where you are until further notice?
[2023-07-22, 2:47:54 AM] ~ Uri Oberlander: bruh i need to shower
[2023-07-22, 2:47:59 AM] ~ Uri Oberlander: and sleep
[2023-07-22, 2:48:38 AM] India: ^
[2023-07-22, 2:49:03 AM] Alias: How long are we in cougar lockdown
[2023-07-22, 2:50:23 AM] ~ maya: should fesh people stay away from machane?
[2023-07-22, 2:50:31 AM] Ezra: It was spotted moving through lower machaneh, this is not a lockdown. Move in large groups. Minimize time outside.
[2023-07-22, 2:50:31 AM] ~ Mica: The people want answers
[2023-07-22, 2:50:47 AM] ~ Mica: Thank you!
[2023-07-22, 2:54:35 AM] Ron: What about if kids need to pee
[2023-07-22, 2:54:59 AM] ~ Mica: Pee pants
[2023-07-22, 2:55:02 AM] Ezra: You should go with them
[2023-07-22, 2:55:09 AM] ~ Gavriella TroperHochstein: imperial guard
[2023-07-22, 2:55:17 AM] ~ Solomon Bodrug: floor hole
[2023-07-22, 2:55:51 AM] ~ Shani Avrahami Saraf: You've heard of tear jar, now meet pee jar
[2023-07-22, 2:57:29 AM] ~ Mica: Tear out their urethras
[2023-07-22, 2:57:43 AM] ~ Shani Avrahami Saraf: Make them drink it
[2023-07-22, 2:57:50 AM] ~ Gavriella TroperHochstein: give the urine as an offering to the cougar
[2023-07-22, 2:57:54 AM] India: should the chevrati be postponed like it prob should right?
[2023-07-22, 2:58:07 AM] ~ Yair Cohen: Is shmira still happening?
[2023-07-22, 2:58:33 AM] ~ Gavriella TroperHochstein: absolutely not! in times of trouble the people need to partay
[2023-07-22, 2:58:55 AM] ~ Gavriella TroperHochstein: but don’t take it from me
[2023-07-22, 2:59:01 AM] ~ Noga Goldman: Yes! 3 person shmira
[2023-07-22, 2:59:01 AM] ~ Gavriella TroperHochstein: I’m not in charge here to be clear
[2023-07-22, 2:59:17 AM] ~ Uri Oberlander: no gavi u are in charge
[2023-07-22, 2:59:59 AM] Tyler: Lol how much of a difference will that make?
[2023-07-22, 3:00:23 AM] ~ Gavriella TroperHochstein: the cougar doesn’t hunt throuples, it’s homophobic
[2023-07-22, 3:00:41 AM] Tyler: Sounds good !
[2023-07-22, 3:01:02 AM] India: so true gaviiii
[2023-07-22, 3:07:01 AM] ~ mai: I need one person to do water colours for chug bet with mira
[2023-07-22, 3:07:12 AM] Ron: I can
[2023-07-22, 3:07:16 AM] ~ mai: Amazing
[2023-07-22, 3:11:31 AM] India: for ppl who r down to get down with the chevrati pls come
[2023-07-22, 3:11:52 AM] ~ Mica: Coming!!!!
[2023-07-22, 3:12:24 AM] ~ Jackson Nozick: Chevrati starting in 10 minutes
[2023-07-22, 3:13:02 AM] ~ Gal Icek: I don't have madrichimot for @shomrimot @bonimot @tzofimot
[2023-07-22, 3:16:08 AM] Omer: Zev and i are in the tzofimot ohelim
[2023-07-22, 3:16:35 AM] ~ Jackson Nozick: Can u ask Zev where the flashlight I gave him is raf wants it back
[2023-07-22, 3:16:49 AM] Gali Goldman: iPod is on ariellas desk
[2023-07-22, 3:17:48 AM] ~ Shelly Kositsky: How does mitbach get up to the mithaus tonight
[2023-07-22, 3:18:17 AM] Gali Goldman: Walk in a group
[2023-07-22, 3:18:20 AM] ~ Talya Stein: Hey guys I just went to the bathroom and missed can someone help me clean up? 🐒🦧
[2023-07-22, 3:18:20 AM] ~ Talya Stein: sticker omitted
[2023-07-22, 3:21:48 AM] ~ Mikal Stein: On my way🙏
[2023-07-22, 3:30:01 AM] Yvonne: I’m feeling as though the cougar specifically likes the pish bowl. Maybe it just needs an hour and half sicha on critical pedagogy and Marxism
[2023-07-22, 3:37:21 AM] Edden: is the sound the cougar alarm?
[2023-07-22, 3:37:35 AM] ~ Mica: He just wants to learn 😩
[2023-07-22, 3:37:53 AM] ~ Gal Icek: It was a air horn but they did not see the couger
[2023-07-22, 4:07:35 AM] ‪+1 (778) 870‑4169‬: Rue removed ‪+1 (778) 870‑4169‬
[2023-07-22, 3:53:36 AM] Rafi: Can there be a cougar alarm?
[2023-07-22, 3:54:04 AM] Rafi: I wanna know
[2023-07-22, 3:54:15 AM] ~ Jackson Nozick: Should be Ariella
[2023-07-22, 4:06:45 AM] Yvonne: If you are part of the group of people around the Shormrimot tzevet pleaseeee lower your volume
[2023-07-22, 4:34:12 AM] ~ maya: tzevet go to bed so ezra can sleep
[2023-07-22, 4:47:17 AM] ~ mai: image omitted
[2023-07-22, 4:51:06 AM] ~ Alex (shmeppy): has anyone seen my airpods, they have an epstein sticker on the back
[2023-07-22, 4:53:00 AM] ~ Alex (shmeppy): nvm
[2023-07-22, 5:09:20 AM] ~ Jane: image omitted
[2023-07-22, 5:13:36 AM] ~ Noa Franklin: image omitted
[2023-07-22, 5:15:42 AM] ~ Uri Oberlander: bait
[2023-07-22, 11:21:52 AM] ~ Zachary Bunim: is gaga happening in the chadar it should kids not be going down?
[2023-07-22, 11:21:52 AM] ~ Zachary Bunim: or*
[2023-07-22, 11:22:10 AM] ~ Sadie Quinn: It is happening but they should come in pairs
[2023-07-22, 11:40:33 AM] ~ Solomon Bodrug: image omitted
[2023-07-22, 11:55:32 AM] ~ Solomon Bodrug: the syrup is beside the cups, just put one scoop in
[2023-07-22, 12:18:09 PM] ~ Alex (shmeppy): does anyone know where the bulk syrup is for refills
[2023-07-22, 12:36:11 PM] ~ Sadie Quinn: image omitted
[2023-07-22, 12:36:20 PM] ~ Sadie Quinn: This message was deleted.
[2023-07-22, 12:36:25 PM] ~ Sadie Quinn: This message was deleted.
[2023-07-22, 12:37:05 PM] ~ Sadie Quinn: This message was deleted.
[2023-07-22, 12:39:09 PM] ~ Sadie Quinn: 2 more reminders:
1) Make sure kids are walking everywhere in groups and are never left outside alone
2) If you were on fesh and left a box of garbage and forks on the techni couch, you should feel ashamed of yourself and consider how I felt dealing with it this morning.
[2023-07-22, 12:40:27 PM] ~ hannah: woke up with travelin soldier in my head @17789033776 this is ur legacy
[2023-07-22, 12:48:04 PM] ~ Zachary Bunim: @14132309249 and @61450141228  should start doing kima if they haven’t already
[2023-07-22, 12:51:29 PM] ~ Sadie Quinn: They are on it!
[2023-07-22, 1:06:28 PM] ~ Sadie Quinn: This message was deleted.
[2023-07-22, 1:18:16 PM] Alias: Does anyone have any nail polish remover I can use
[2023-07-22, 1:29:23 PM] ~ Sadie Quinn: image omitted
[2023-07-22, 1:29:43 PM] ~ Sadie Quinn: image omitted
[2023-07-22, 1:29:49 PM] ~ Sadie Quinn: Okay for real this time
[2023-07-22, 1:53:57 PM] ~ Talya Stein: Mikal lost her phone, if you see one hanging around pls lmk!!! Also where and when are the fishers meeting?
[2023-07-22, 1:54:01 PM] ~ Talya Stein: *feshers
[2023-07-22, 1:54:18 PM] ~ Jane: 11:15 tecnhi
[2023-07-22, 1:54:35 PM] ~ Maisie: Yeppers :3
[2023-07-22, 2:55:48 PM] ~ Sadie Quinn: @17789855311 @12369965850 You are on toranut! Also if anyone else is available we could use some extra help!
[2023-07-22, 2:56:10 PM] ~ hannah: is anyone going to this today
[2023-07-22, 3:50:55 PM] ~ maya: any cougar updates?
[2023-07-22, 5:24:59 PM] ~ hannah: This message was deleted.
[2023-07-22, 6:44:55 PM] ~ eli gerut: hey folks! just wanted to remind ppl that many people who have had birthdays this session didn’t end up receiving their cake that we made for them. mitbach has a list of all bdays! if u have a birthday at camp we know about it and we WILL make you a cake (this is a threat). if you or anyone on your tzevet has a birthday coming up, come check in with anyone on mitbach on their birthday and we will retrieve their cake for you!
[2023-07-22, 7:12:14 PM] Yonnie: Hey does anyone know where the microphone is? I believe we used it for kishutim
[2023-07-22, 7:12:55 PM] ~ Talia Joffe: Twin asepha
Jackson’s proud of everybody (again). He loves you
Madatz are feeling like there’s too much weight on them to bring the ruach at camp. Tzevet step it up!!!
Don’t leave spray paint/exacto knives outside of the myad!!!! Put shit away
Be mindful of how we’re using spray paint. Don’t hotbox the air and wear a mask. And the door and windows of the myad should be close when spray painting
Also stop killing paint brushes!!! Wash them after use
You should not be leaving toranut in the middle of it. You need to be there for all of it
This Shabbat morning was awesome!!!
Send Mairav your funny kid things for triple M!!
Be on for havdallah!!!
Not enough tzevet were at the Shabbat asepha. You need to come to it!!
Madatz should not be alone with kids!
Cougar update: conservation officers are here to make sure camp is safe. They are making a plan with their team. We are buying whistles for every tzevet member, do not use them unless you actually see the cougar and DO NOT give them to channies
If you see a cougar, blow the whistle, get big, and yell. As soon as you can call Ezra (rosh cougar)
Until you hear otherwise we are still going with channies to the bathroom at night. In the day groups are still good.
You can fill empty pop cans with rocks to use as shakers to keep in the tzrif for walking at night (Purim came early)
If you are not on the shomrimot tzevet, it is not ok to pull shomrimot kids out of programming to have sichot with them. Their madrichimot are there to care for them. The kids need to be able to trust their tzevet. This goes for all channies. Direct kids to their tzevet
There needs to be tzevet members at tables during meals!! Check the chadar to see if tables need madrichimot at them
The last order goes out tomorrow!! Get your orders in by tonight if you want them in time for final mess (the order will come by tomorrow night)
Don’t forget final wills!!!
Don’t forget to take your kids birthday cake from the mitbach
Be present for shira and make sure kids are where they need to be during it (specifically shabbat shira)
KEEP THE SEVVY CLEAN!!!
We should not be acting like we’re just here for a job. Kids should think that we’re here cause we want to be there. Don’t talk to them at length about off blocks and fesh, they don’t need to know
If you hear a whistle blowing (cougar alert), don’t go running. There will be a cougar squad that will deal
If you notice that paper towels are empty, refill it! If you notice the garbage is full, stomp it!
We’ve been lacking rosh gadol!! If you see garbage, pick it up!! If you see wandering children, ask where they should be!
There cannot be dishes/food lying around machaneh. They are cougar food!!!
Big day is coming up. You should talk with your tzvatim and decide who’s doing it.
Keep the mo clean. When you leave, take a dish around
[2023-07-22, 7:14:49 PM] ~ Maayan: Madatz peula spaces!
Say- mirpeset
Chot- gezer
Shom- Janusz
Tzof- Golda
[2023-07-22, 8:07:14 PM] Yvonne: Btw my kids will be using the Myad during this madatz peula and the MYM for bb planning so be weary of where you kids go
[2023-07-22, 8:24:48 PM] ~ mai: Send me your triple M things!
[2023-07-22, 8:33:04 PM] Ron: If someone took a charger from the techni with red tape with my name clearly on it pls return asap rocky #🐍 🐍 🐍
[2023-07-22, 8:36:07 PM] Ron: MacBook charger
[2023-07-22, 8:37:19 PM] Mira: The entire “colouring” bin in the myad is missing so we have no markers. If you have/ see the bin pls bring it back to the myad
[2023-07-22, 8:38:13 PM] ~ Gavriella TroperHochstein: I believe I saw it in the techni and the madatz may have taken it for their pish. When they clean up we’ll make sure they bring it back to the myad
[2023-07-22, 8:38:45 PM] Mira: It was missing before twin but it would be great if that was it
[2023-07-22, 9:33:21 PM] Cate: I didn't realize that u guys made me a cake until today !! I'm sorry!! Pls don't put it in the 7/11 yet because I have a plan for it for tomorrow
[2023-07-22, 9:34:42 PM] ~ Oliver: *hey! Someone has my speaker. It was used for the neuro diversity thing and disappeared after*
[2023-07-22, 9:35:10 PM] ~ Oliver: *it is a beats pill, black, exactly like rues and dept black*
[2023-07-22, 9:36:16 PM] ~ Oliver: *if you see it, please return it to me, it’s a very expensive speaker and I’d like to find it before chanis leave, I have a feeling if they leave it’s not being found*
[2023-07-22, 9:37:02 PM] ~ Oliver: image omitted
[2023-07-22, 9:37:47 PM] ~ Oliver: It’s missing part of the charging flap on the back
[2023-07-22, 9:37:53 PM] ~ Oliver: And a little banged up
[2023-07-22, 9:38:12 PM] Cate: ok well update I found out that my cake has all been eaten before I even found out I had a cake LMAO
[2023-07-22, 9:40:57 PM] Tyler: :(
[2023-07-22, 9:44:12 PM] Cate: haha it's sad but its also funny too so it's ok
[2023-07-22, 9:44:49 PM] Edden: is anyone able to sleep on the right side of mirp tzrif (girls) tonight?
[2023-07-22, 9:45:48 PM] ~ Sadie Quinn: Some of you know already, but Jonah from Cornerstone (a conference of Jewish camps that Miriam sends people to) is visiting tonight and tomorrow, feel free to say hi if you see him!
[2023-07-22, 9:50:27 PM] ~ Noa Franklin: Hey friends! Can anyone help us set up and disassemble musicale and medura?
[2023-07-22, 9:50:52 PM] ~ Noa Franklin: Esp take it apart
[2023-07-22, 9:51:48 PM] ~ Jane: I’m sure i’ll be able to sleep there tonight
[2023-07-22, 9:51:48 PM] ~ Noa Franklin: Esp drivers
[2023-07-22, 9:55:49 PM] ~ mai: PLEASE DO THIS I CAN'T RUN AROUND AND FIND YOU I SEE WHO READS THESE MESSAGES I ONLY HAVE FROM SHOMRIMOT
[2023-07-22, 10:07:04 PM] ~ Noa Franklin: Hey friends if ppl have a sec can they pls help carry the drum set to the Janusz
[2023-07-22, 10:07:41 PM] Gali Goldman: Hi this is time sensitive! I need someone to take over my tafkid at medura and musicale organizing the skits at the beginning! I need to go do something
[2023-07-22, 10:07:55 PM] ~ Sadie Quinn: I need to eat and but I can be there in 5
[2023-07-22, 10:08:06 PM] ~ Noa Franklin: Ty!
[2023-07-22, 10:13:02 PM] ~ Noa Franklin: Guys like fr can ppl come
[2023-07-22, 10:13:10 PM] ~ Noa Franklin: There r two of us and many parts of the drumset
[2023-07-22, 11:09:53 PM] ~ hannah: image omitted
[2023-07-22, 11:15:19 PM] ~ Solomon Bodrug: Someone PLEASE record yonni’s performance 🙏 🙏 🙏
[2023-07-22, 11:19:08 PM] ~ hannah: please!!!
[2023-07-23, 12:59:31 AM] ~ Tal Fisher-Taylor: Cam everyone send their kids for meds
[2023-07-23, 12:59:48 AM] ~ Tal Fisher-Taylor: Or can someone walk with me to deliver them?
[2023-07-23, 1:12:45 AM] ~ Sadie Quinn: I can if you still need someone
[2023-07-23, 1:13:18 AM] ~ Tal Fisher-Taylor: I just realized they're probably all in the chadar
[2023-07-23, 1:46:19 AM] ~ Roie Bargil: Hi this is uri, I lost my phone and would love if u see it for it to be returned. It is a red iPhone 8 with a cracked screen protector, with a yellow smiley face on the back
[2023-07-23, 1:54:17 AM] ~ Uri Oberlander: this was meant to be sent 4 hours ago. i found my phone thx tho
[2023-07-23, 1:54:32 AM] ~ Roie Bargil: No worries
[2023-07-23, 2:12:22 AM] ~ mai: Tzevet who has a watch they can lend to my kids for tmrw pls lmk!!! 🙏🙏🙏😝😝😝
[2023-07-23, 2:12:57 AM] ~ Maayan: I do
[2023-07-23, 2:13:34 AM] ~ mai: You can pls give to me in the morning 🤘
[2023-07-23, 2:23:12 AM] ~ Tal Fisher-Taylor: Me too
[2023-07-23, 3:08:43 AM] ~ Prielle Laniado: who is awake right now and can walk some feshers
[2023-07-23, 3:09:09 AM] ~ Noa Franklin: When/where?
[2023-07-23, 3:09:24 AM] ~ Prielle Laniado: now to chofnof
[2023-07-23, 3:09:28 AM] ~ Noa Franklin: Omw!
[2023-07-23, 3:09:38 AM] ~ Prielle Laniado: i love you
[2023-07-23, 3:09:43 AM] ~ Mikal Stein: Coming down
[2023-07-23, 3:10:18 AM] ~ Mikal Stein: Sike
[2023-07-23, 3:21:35 AM] ~ maya: image omitted
[2023-07-23, 3:22:11 AM] ~ Gavriella TroperHochstein: is that Bec??
[2023-07-23, 3:22:19 AM] ~ Zevi: No that's Zevi
[2023-07-23, 3:26:27 AM] ~ Avishai Jacobson: Can someone switch me out of the evening part of madrichol Toran tomorrow
[2023-07-23, 11:46:15 AM] Rafi: image omitted
[2023-07-23, 12:12:28 PM] Gali Goldman: Hi! Today is a special day🫢 at 3:40 make sure you have a bag ready with the following things in it:
1. Towel
2. Chill stuff
3. Speaker (optional)
4. Water bottle (mandatory!!!!!)
5. Sunscreen
6. A branch
7. Lip balm
8. A left sock

See you all soon, vaad Tarbut💗
[2023-07-23, 12:58:56 PM] Rafi: Also bring final will supplies!!!!
[2023-07-23, 12:59:04 PM] Rafi: Very important
[2023-07-23, 3:28:56 PM] ~ Noa Franklin: Hey friends there was a computer charger in the techni labeled “Noa F” and now it is gone
[2023-07-23, 3:29:42 PM] ~ Noa Franklin: It was stowed away w the can openers and is not for public use
[2023-07-23, 3:29:53 PM] ~ Noa Franklin: Pls whoever took it pls put it back in the misrad techni
[2023-07-23, 4:08:24 PM] Mira: If your kids aren’t in bonimot or tzofimot pls try to keep them out of the myad!!! bonim bash is today so the myad is kinda off limits.
[2023-07-23, 4:09:54 PM] Ron: Someone is snaking chargers not chill 🐍🐍🐍🐍
[2023-07-23, 4:14:37 PM] ~ Noa Franklin: Like for realsies that shit is expensive
[2023-07-23, 6:13:48 PM] ~ Talia Joffe: July 23 asepha notes
Scrap paper bin in only for paper that can be used again (only has writing on one side of the page)
KEEP THE SEVVY CLEAN
Someone stole the “colouring” box from the myad shelves. Please return it, we need it. If you’re taking something from the myad, don’t take the whole box.
 If you use up supplies, tell Mira so they can order more
If you’re eating in the myad, clean up after yourself
Make accusations against kids for kangaroo court by tonight
Keep machaneh clean!! Don’t leave garbage or dishes around. Hold tzevet and kids accountable!! Make kids throw out yogurt cups and granola bar wrappers
Rosh gadol it up!!! Techni points ARE happening
You cannot drink your kupa beverages outside where kids can see you
Stop stealing shit from the technis desks
Yay ruach!!! Keep it up
We’re meeting at the bus at BB takeover at 3:45
Play up takeover for the Bonimot!! “Hell no we won’t go!!!” It up
Don’t leave your coffee and tea mugs on the tables in the chadar. They should go in the sevvy
Slow down when singing at shira so people can keep up and understand. Also tell kids to keep it slow too
Kupa is great and fun and sexy, but keep in mind that Yerbas at like $4 a can and they really cut into kupa when we’re buying a bunch. Use kupa responsibly
Final mess will happen where kids have designated places to be in (cougar and thunderstorm safety). Movies will be running in the chadar until sunrise. Kvutzot can claim designated spaces for organized activities
 Don’t misgender your channies (or anyone at machaneh). Correctly people kindly if they mess up
Put in your kupa percentages!!
 Cougar update: no cougar sightings since yesterday morning at 2:30am. If you see something, say something. We’re not cougar clear for the next week (unless we catch it before then). We’re still being careful, and especially at dusk. Cougars are most active during dusk and dawn
If you are madrichor Toran, wake up!! And you and gaga pit toran get to hang out in the morning Yayy
Tell your kids that we haven’t seen the cougar, but we’re still being careful and walking in pairs
You can explain the trap to your kids if they ask about it. Just say it’s there to humanely catch the cougar
Remind kids to walk in pairs. If you see someone walking alone, buddy up with them
Pay attention to make sure kids aren’t wandering off from group activities
If you need the bus, you need to let Ezra know at least 2 days in advance
If you are on medura superstar you need to be at the medura pit!! Kids cannot be there unsupervised
If you see people that you don’t recognize on camp property, approach them in pairs and then let either noga or Ezra know
Please be present, on, and with your kids when you are on. Count your kids!!!
If you have gear in your bags from tiyul, return it to the grofit
[2023-07-23, 6:36:18 PM] ~ Mica: Is takeover at the madregot?
[2023-07-23, 6:37:11 PM] ~ Mica: This message was deleted.
[2023-07-23, 6:39:13 PM] Zev: Janusz I think
[2023-07-23, 6:39:14 PM] Ron: Janusz
[2023-07-23, 6:39:20 PM] Ron: Send kids to janusz achshav!!!!!
[2023-07-23, 7:09:00 PM] ~ Gavriella TroperHochstein: The bus is leaving now. If you want to come with tzevet, you must come to the bus now!
[2023-07-23, 7:14:25 PM] ~ Uri Oberlander: where is the bus going
[2023-07-23, 7:14:38 PM] ~ Prielle Laniado: twin
[2023-07-23, 7:53:24 PM] ~ Kiran: Hey folks, could I get a ride from the ferry (: I’ll be in at 5:30
[2023-07-23, 7:58:48 PM] ~ Kiran: No longer need a ride
[2023-07-23, 8:15:15 PM] ~ Maisie: Hey, I’m decorating a cake for a kid named Brennan. What sort of thing should I put on the cake?
[2023-07-23, 8:21:04 PM] ~ Maisie: Please guys, I gotta know or I won’t be able to decorate this cake effectively
[2023-07-23, 8:21:37 PM] ~ Maisie: If no one answers soon imma just put a comb on the damn thing
[2023-07-23, 8:23:57 PM] Arielle: Space theme
[2023-07-23, 8:26:01 PM] Arielle: Also it’s brennen w an e
[2023-07-23, 9:32:35 PM] ~ Maisie: image omitted
[2023-07-24, 12:13:47 AM] ~ Zevi: image omitted
[2023-07-24, 12:18:24 AM] ~ Zevi: Also did anyone pick up a small gold ring at Twin near the end? One of my kids lost it
[2023-07-24, 12:28:16 AM] India: yo fesh ppl
[2023-07-24, 12:28:25 AM] India: This message was deleted.
[2023-07-24, 12:28:45 AM] India: where r u guys gonna be located
[2023-07-24, 12:33:52 AM] ~ Dani: I'm fine with meeting in the mo. But I'm not quite ready yet, I'm going to move the alcohol to the chof nof lock box and move my stuff to the chof nof.
[2023-07-24, 12:34:09 AM] ~ Dani: I'll bring the snacks too.
[2023-07-24, 12:34:18 AM] ~ Dani: To our meeting place
[2023-07-24, 12:35:03 AM] India: word i’m not meeting y’all quite yet
[2023-07-24, 12:35:20 AM] India: r yall gonna be at the slab or platform?
[2023-07-24, 12:59:21 AM] ~ Sadie Quinn: Send Kangaroo Court accusations for your kids!!!
[2023-07-24, 1:00:59 AM] ~ Solomon Bodrug: Hello Tzevet, mitbach has a nofesh tonight so the mitbach will be fully closed at 11:00! Please do not hang out in there and make messy 😤 If you need to use the mitbach for anything beforehand, be quick and clean up after yourself please 🙏
[2023-07-24, 1:01:10 AM] ~ Solomon Bodrug: Love, mitbach
[2023-07-24, 1:02:22 AM] ~ Gavriella TroperHochstein: Dear shmira (and tzevet):
Madatz bedtime tonight is midnight. If you see them awake and about after 11:45, please send them to bed!
Love,
Madatz tzevet
[2023-07-24, 1:03:07 AM] ~ Oliver: hi!
[2023-07-24, 1:03:13 AM] ~ Oliver: Love, Olviver
[2023-07-24, 1:03:35 AM] ~ Ana: Hi Oliver!
[2023-07-24, 1:09:50 AM] Ron: Would any kind Samaritan volunteer for shmira tonight me and lila switched and then I covered someone thinking i switched it but it wasn’t would much apreesh💖💖💖💖and will etransfer u 25$
[2023-07-24, 1:17:38 AM] Ron: Actually can someone do it for maya cus I’m currently alone doing it
[2023-07-24, 1:24:57 AM] ~ Shelly Kositsky: Just caught my 2 favourite tzevet members hooking up in the mo :) so happy for you guys ❤️‍🔥🔥🥰
[2023-07-24, 1:25:34 AM] ~ Gavriella TroperHochstein: rumor form…?
[2023-07-24, 1:27:15 AM] ~ Oliver: https://docs.google.com/forms/d/e/1FAIpQLSdFgLTktS_picGCQhkvh9ffCZ2KqaNCZ4unkrck_fRTx1OBIg/viewform
[2023-07-24, 1:30:12 AM] ~ Shani Avrahami Saraf: We need one person to do shmira with Ron! You don't have to have done it before
[2023-07-24, 1:30:17 AM] ~ Shani Avrahami Saraf: You'll get a candy
[2023-07-24, 1:33:17 AM] Tyler: Does any1 have a pic of the fesh schedule
[2023-07-24, 1:34:59 AM] ~ Oliver: it me!
[2023-07-24, 1:38:57 AM] Tyler: Fun fact for the squad: I lost my very important Fanny pack that holds my wallet(possibly) and my journal from this and last summer. If u find it u can literally keep the entire Fanny pack as a reward I just really need my items 👍 it has no distinctive features other than its grey and has a sexy extra pocket on the outside. Please keep an eye out ❤️
[2023-07-24, 1:39:46 AM] ~ Zevi: Go and get ‘er!
[2023-07-24, 1:40:11 AM] ~ Zevi: GET ‘ER??? I HARDLY KNOW HER
[2023-07-24, 1:40:32 AM] ~ Gavriella TroperHochstein: knowing you have your fanny pack is enough reward for us all Tyler, we’ll all keep an eye out
[2023-07-24, 1:40:45 AM] ~ Alex (shmeppy): 😭😭😭
[2023-07-24, 1:40:48 AM] ~ Alex (shmeppy): bro responded to his own message
[2023-07-24, 1:41:17 AM] Cate: Hello everyone
[2023-07-24, 1:41:18 AM] Cate: My kids are trying to fall asleep its SUPER late and we can hear people screaming on the yanush
[2023-07-24, 1:41:19 AM] Cate: The music is also EXTREMELY loud. I closed all the windows to make it quiter and we can still here everything very well( this was a desperate measure because now it smells of extreme sweaty feet🤮)
[2023-07-24, 1:41:22 AM] Cate: so please turn the music down and be quieter! thank u!
[2023-07-24, 1:41:28 AM] ~ Oliver: Tyler??????? I HARDLY KNOWER
[2023-07-24, 1:41:32 AM] ~ Oliver: SUPER?????
[2023-07-24, 1:41:50 AM] ~ Oliver: QUIETER???
[2023-07-24, 1:41:56 AM] Tyler: VERY TRUE
[2023-07-24, 1:43:08 AM] Cate: I can do shmira with u!
[2023-07-24, 1:44:28 AM] Cate: Also the yanush is super lound right now and we can hear the music super clearly and screaming even with the windows closed and my kids need to go to bed cause its SUPER late for them
[2023-07-24, 1:44:30 AM] ~ Shani Avrahami Saraf: Thanks Cate but we got one
[2023-07-24, 1:44:35 AM] ~ Shani Avrahami Saraf: !!
[2023-07-24, 1:45:30 AM] Cate: I even had to close the windows In here( which was a desperate decision because it now smells of extreme sweaty feet🤮)
[2023-07-24, 1:46:28 AM] Cate: who ever is at the yanush can u please turn the music down and remind your kids ppl are trying to sleep! ty!!
[2023-07-24, 1:47:19 AM] Cate: np!! I've never done shmira before but would LOVE to do it! So if anyone ever needs someone lmk:)
[2023-07-24, 2:08:46 AM] Cate: whoopsies! I just realized I sent my please be quiet messages twice. It was because I thought my data didn't send them so I rewrote them HAHA.
[2023-07-24, 2:10:07 AM] Cate: but I wasn't kidding. The smell was SO bad I swear it could be a health hazard at this point 😭
[2023-07-24, 2:11:01 AM] Ron: Arielle volunteered but thank
Uuuu💙💙
[2023-07-24, 2:19:53 AM] ~ Maayan: Can someone walk me and yair to the mo?
[2023-07-24, 2:20:02 AM] ~ mai: yeah coming
[2023-07-24, 2:20:15 AM] Tyler: This message was deleted.
[2023-07-24, 2:20:22 AM] ~ hannah: OLIVER??? I HARDLY KNOW HER!!!
[2023-07-24, 2:24:08 AM] ~ Avishai Jacobson: Can someone walk us to the mo
[2023-07-24, 2:25:27 AM] ~ Prielle Laniado: is anyone going to brush up in the mains soooooon? i need a buddy
[2023-07-24, 3:18:30 AM] ~ Zachary Bunim: the dishes in the chadar belong to the shomrimot from our epaep. they are not washed because the mitbach is closed. THEY WILL BE DONE TMRW MORNING so please don’t come after us. we will do them before chadar ochel aleph starts
[2023-07-24, 3:58:45 AM] ~ Avishai Jacobson: Can someone escort us to the mo
[2023-07-24, 3:59:26 AM] ~ Lila: coming
[2023-07-24, 4:46:21 AM] Ron: image omitted
[2023-07-24, 4:48:48 AM] ~ Maisie: (￣▽￣;) やめてください。
[2023-07-24, 11:20:21 AM] Tyler: When kima
[2023-07-24, 11:20:28 AM] ~ Gal Icek: Now
[2023-07-24, 11:20:34 AM] Tyler: Lit
[2023-07-24, 11:20:40 AM] ~ Gal Icek: Mifkad at 8:45
[2023-07-24, 11:35:50 AM] ~ Shani Avrahami Saraf: So good to see that they've survived the cougar this far
[2023-07-24, 12:41:18 PM] ~ Sadie Quinn: Shoutout to the chotrimot for being the only tzevet to send me an accusation for their kvutza! We need more accusations BY LUNCH!
[2023-07-24, 1:15:02 PM] ~ Oliver: *HELLO TZEVET, BEFORE THE CHANIS LEAVEM, MAKE SURE THEY HAVE CLEARED THEIUR HIKING BAGS, AS WELL AS YOUR OWN BAGS.*
[2023-07-24, 1:21:42 PM] Cate: I will make sure to tell my kids to clear *THEIUR* hiking bags🥰
[2023-07-24, 1:23:53 PM] Cate: before they *leavem* camp
[2023-07-24, 1:29:40 PM] ~ Noa Franklin: Hey tzevet, especially feshers!!!  The bonimot will be at the slab btw 12-1 so pls do fesh activities elsewhere during that time
[2023-07-24, 2:34:34 PM] ~ Maisie: image omitted
[2023-07-24, 2:48:53 PM] ~ Mika: hi guys i lost my water bottle its silver tall metal and has lots of cool stickers if u see it or have seen it plz tell me thanks🙌
[2023-07-24, 2:55:01 PM] ~ Ana: ^^very important water bottle!!
[2023-07-24, 2:56:38 PM] ~ Mika: yes
[2023-07-24, 2:56:40 PM] ~ Mika: it is
[2023-07-24, 3:04:28 PM] ~ Oliver: *hey! Someone has my speaker. It was used for the neuro diversity thing and disappeared after* *if you see it, please return it to me, it’s a very expensive speaker and I’d like to find it before chanis leave, I have a feeling if they leave it’s not being found*
[2023-07-24, 3:04:30 PM] ~ Oliver: image omitted
[2023-07-24, 3:06:06 PM] ~ Sadie Quinn: Tzevet (except tzevet Madatz) come to the mo!!!
[2023-07-24, 3:07:25 PM] ~ Ariella Smith-Eidelman: Please come to the mo now !!
[2023-07-24, 3:07:50 PM] ~ Zevi: Rif raf to janusz!
[2023-07-24, 3:30:55 PM] ~ Mica: Should we end the fashion show now?
[2023-07-24, 3:31:04 PM] ~ Uri Oberlander: no
[2023-07-24, 3:31:04 PM] ~ maya: no
[2023-07-24, 3:31:04 PM] ~ Ariella Smith-Eidelman: Is it over ?
[2023-07-24, 3:31:07 PM] ~ maya: keep stalling
[2023-07-24, 3:31:09 PM] Tyler: No
[2023-07-24, 3:31:12 PM] ~ Ariella Smith-Eidelman: We need like 10 more mins
[2023-07-24, 3:31:16 PM] ~ Mica: Seder Yom says over at 12:30
[2023-07-24, 3:31:18 PM] ~ Mica: Okey doke
[2023-07-24, 3:32:44 PM] ~ Gavriella TroperHochstein: ok we’re doing rikkud but there are only 2 tzevet members rn so if riff raff could come would be great
[2023-07-24, 3:33:02 PM] ~ Ariella Smith-Eidelman: Ok
[2023-07-24, 3:39:45 PM] ~ hannah: the doc that was sent is from last year, no?
[2023-07-24, 3:46:42 PM] ~ Zevi: Fashion show is done, how much longer until asepha is done?
[2023-07-24, 3:46:47 PM] ~ Ariella Smith-Eidelman: its done
[2023-07-24, 3:47:01 PM] ~ Gal Icek: It's packing time now
[2023-07-24, 3:52:16 PM] ~ Prielle Laniado: toranut list?
[2023-07-24, 3:52:57 PM] ~ Ilana Sela: image omitted
[2023-07-24, 3:59:13 PM] ~ Zevi: image omitted
[2023-07-24, 4:00:07 PM] ~ Mica: @tzofimot tzevet the madatz lent some hiking boots to your kids and haven’t gotten them back
[2023-07-24, 4:02:32 PM] Tyler: image omitted
[2023-07-24, 4:03:14 PM] ~ Mica: I will check thank u
[2023-07-24, 4:05:06 PM] Tyler: Also Zev says he put them in the grofit last week
[2023-07-24, 4:05:13 PM] Tyler: So mayb check there
[2023-07-24, 4:06:07 PM] ~ Gal Icek: image omitted
[2023-07-24, 4:11:53 PM] Tyler: Water bottle belongs to child in chalutzimot
[2023-07-24, 4:16:23 PM] ~ Tal Fisher-Taylor: image omitted
[2023-07-24, 4:22:27 PM] Mira: Yom israel tye-dye is ready! Tzevet should come with their kids to pick it up from the myad
[2023-07-24, 4:50:25 PM] Tyler: Can any1 shower w the tzofimot after lunch
[2023-07-24, 5:01:04 PM] ~ Noa Franklin: Is it lunch now?
[2023-07-24, 5:01:27 PM] ~ Gavriella TroperHochstein: yes!
[2023-07-24, 5:18:03 PM] ~ Shani Avrahami Saraf: Is there an asepha today?
[2023-07-24, 5:21:41 PM] ~ Ariella Smith-Eidelman: Yea in the gezer
[2023-07-24, 5:33:55 PM] ~ Solomon Bodrug: image omitted
[2023-07-24, 5:41:57 PM] ~ Tal Fisher-Taylor: Lila is with a child here and will not be at the asepha
[2023-07-24, 6:01:34 PM] ~ Mikal Stein: image omitted
[2023-07-24, 6:29:08 PM] Elsbeth: That’s mine!! Thank you so much. Been looking for it
[2023-07-24, 6:31:13 PM] ~ Noa Franklin: Hey y’all I made this hodaah at the asepha but I really really need my computer charger back
[2023-07-24, 6:31:38 PM] ~ Noa Franklin: It’s labeled “Noa F” and lives in the misrad techni, if u see it pls return it
[2023-07-24, 6:43:16 PM] Tyler: image omitted
[2023-07-24, 6:43:29 PM] ~ hannah: YIPPIE!!!
[2023-07-24, 6:43:38 PM] ~ Maisie: YAY
[2023-07-24, 6:47:10 PM] Gali Goldman: Can someone pls take photos of the carnival?? Thx
[2023-07-24, 7:46:47 PM] ~ Sadie Quinn: Anyone know where the cat/cougar mask is? We need it for kangaroo court, maybe watch for it while your kids are packing...
[2023-07-24, 7:52:22 PM] ~ Noa Franklin: Can someone supervise gender neutral showers right now?
[2023-07-24, 7:52:22 PM] ~ Noa Franklin: Urgent!!!!
[2023-07-24, 7:52:22 PM] ~ Noa Franklin: Right now right now
[2023-07-24, 7:56:24 PM] ~ Talia Joffe: July 24 tzevet asepha
Shani is on call tonight! Let her sleep through the night!! If kids feel sick, send them to bed! Only wake Shani up if there is vomit, lots of blood, broken bones, extreme pain, or other actual emergencies. We want Shani to sleep yayyyy
The shmo is closed! A window broke last night. Also, just respect the shmo.
People’s devices have been going missing. Shits expensive. Stop taking peoples things. If you have noa’s computer charger please give it back
It’s time for t shirts and photos to be given to children. They’re in the bayit. Pick them up for your kids!
Be mindful of noise levels tonight. People are still going to be trying to sleep tonight, so be respectful
Please be nice to the madatz!!! Speak to them kindly
Please also be mindful about boundaries with madatz! No private sichot in secluded locations. Keep your mouth off the madatz, it’s not attractive!!!
If you have time to have private sichot with kids that aren’t your kids, you aren’t doing your job. Consider power dynamics within these convos, not ok!!
If you consume substances, you simply cannot be anywhere on machaneh other than the mo and the chofnof
All substances on fesh NEED to be put directly back into the lock box. They cannot live anywhere else on machaneh
If a tzevet member asks you to do a thing, just trust them and help them out
Be more careful about phones in front of kids! We’ve gotten too loosey-goosey
Big day meeting is today during dinner in the mo
Anything left in the grofit is getting thrown out. Don’t leave your stuff in there unless you want to lose it. The grofit isn’t a garbage room, don’t just dump your shit in there
Final mess doc is finished! Check it!! Also, set your alarms. You need to be awake for your final mess shift, people are depending on you
[2023-07-24, 7:56:38 PM] ~ Talia Joffe: Whoops forgot to send the notes earlier
[2023-07-24, 7:59:48 PM] ~ Ariella Smith-Eidelman: The janusz is where Vancouver and Victoria kids should put their stuff it is labelled and taped off so hopefully it’s clear !
[2023-07-24, 8:00:01 PM] ~ Ariella Smith-Eidelman: Nanaimo kids should put their stuff in the sifria
[2023-07-24, 8:01:52 PM] ~ Gavriella TroperHochstein: still need this?
[2023-07-24, 8:26:53 PM] ~ maya: when does their stuff/ours need to be there by
[2023-07-24, 8:50:15 PM] Omer: Also do they have time tmrw morning to put their sleeping bags in their suitcases
[2023-07-24, 8:50:17 PM] Ron: Anyone wanna unschedule me for 4am binyan I was shmira yesterday when I shouldn’t have been and bonimot tzevet wasn’t there to choose
[2023-07-24, 8:50:36 PM] ~ Ariella Smith-Eidelman: nope anything they leave in their tzrif tonight they are carrying with them tmrw
[2023-07-24, 8:51:38 PM] ~ Uri Oberlander: hi if anyone was driving and accidentally hit the bike rack and accompanying bikes, pls lmk.
[2023-07-24, 8:51:51 PM] ~ Uri Oberlander: in the last 6 days
[2023-07-24, 8:53:35 PM] ~ Uri Oberlander: or, if u maybe borrowed a bike from the bike rack no knowing who’s it was
[2023-07-24, 8:56:12 PM] ~ Uri Oberlander: pls lmk. there was around $100 worth of damage done to my bike in the past couple days, i would really appreciate it if u know anything to take ownership, thx
[2023-07-24, 9:01:43 PM] ~ maya: what time is this
[2023-07-24, 9:02:10 PM] ~ Ariella Smith-Eidelman: Before the tochnit erev starts
[2023-07-24, 9:04:20 PM] Tyler: Shomrimot tzevet what is y’all’s plan for tn
[2023-07-24, 9:47:06 PM] Ezra: https://docs.google.com/document/d/1nnqCDAMr-XG7qq_eHk_Ass5NElugDpUJxmpMTYig8ko/edit?usp=sharing
[2023-07-24, 10:23:07 PM] ~ hannah: @ chotrimot tzevet ur kid max has a birthday cake!! it’s finished so whenever u wanna grab it 💕💕🦅
[2023-07-24, 10:25:14 PM] Ron: ?????
[2023-07-24, 10:31:37 PM] ~ Uri Oberlander: thank you!!
[2023-07-24, 10:38:38 PM] ~ maya: if anyone sees shelly send her to the tzof shetach
[2023-07-24, 10:45:54 PM] ~ Uri Oberlander: she is coming
[2023-07-24, 10:47:40 PM] ~ Uri Oberlander: ron i can switch with u
[2023-07-24, 10:50:45 PM] ~ Talia Joffe: Does someone have spare sunglasses for Mikal?
[2023-07-24, 10:54:56 PM] Alias: Yeah
[2023-07-24, 10:56:26 PM] ~ Uri Oberlander: i’m 2-4 at the madrigot
[2023-07-24, 10:57:47 PM] Edden: thank you!!
[2023-07-24, 11:01:19 PM] Ron: Thanks uri you a real 1 fr fr 🙏💯
[2023-07-24, 11:42:13 PM] ~ Uri Oberlander: anyone seen a tzevet 2021 nalgene with a black diamond climbing carabiner? it also has a green robes skeleton playing the banjo on it. if u see it lmk!! it’s mine, thx
[2023-07-24, 11:45:21 PM] ~ mai: Did someone just text me asking if the pink shirt is mine? Because it is! Idk why you unsent it but I would like it back 🙏
[2023-07-25, 12:21:19 AM] ~ Mika: image omitted
[2023-07-25, 12:44:48 AM] ~ Prielle Laniado: can anyone from mitbach confirm that sayarimot can take a cucumber for a epeap pleeeeease
[2023-07-25, 12:49:23 AM] ~ maya: mitbach people pleasdeeeee
[2023-07-25, 12:55:28 AM] Yonnie: Go for it
[2023-07-25, 12:56:08 AM] Tyler: Yonni can I also have a cucumber for personal reasons?
[2023-07-25, 1:00:14 AM] Yonnie: Just wash it before putting it back
[2023-07-25, 1:00:34 AM] Tyler: Thanks!
[2023-07-25, 1:01:00 AM] ~ Dani: Does anyone know when sandwich making is?
[2023-07-25, 1:15:02 AM] Ezra: mitbach
[2023-07-25, 1:15:40 AM] ~ Ariella Smith-Eidelman: You are stupid
[2023-07-25, 1:15:59 AM] Ezra: Why?
[2023-07-25, 1:16:11 AM] ~ hannah: get his ass!!!!
[2023-07-25, 1:16:18 AM] ~ Ariella Smith-Eidelman: Cause the questions said when
[2023-07-25, 1:16:19 AM] ~ Ariella Smith-Eidelman: Not where
[2023-07-25, 1:16:25 AM] ~ Ariella Smith-Eidelman: You silly billy
[2023-07-25, 1:30:36 AM] ~ Roie Bargil: any way we can turn on the lights for the lower kvish like outside the myad?
[2023-07-25, 1:30:42 AM] ~ Roie Bargil: They turned off just now
[2023-07-25, 1:31:02 AM] ~ Gavriella TroperHochstein: Light switch is just inside the myad door
[2023-07-25, 1:31:08 AM] Mira: Yeah there’s a lightswitch
[2023-07-25, 1:32:16 AM] ~ Roie Bargil: Thanks
[2023-07-25, 2:00:21 AM] ~ Mica: image omitted
[2023-07-25, 2:02:59 AM] ~ Mica: What time is mifkad tomorrow?
[2023-07-25, 2:03:01 AM] ~ Shani Avrahami Saraf: This is exactly how I used to imagine the tooth fairy
[2023-07-25, 2:28:09 AM] Rue: Hello! The Uhaul must be loaded! If you’re not doing anything rn please PLEASE go to the Uhaul
[2023-07-25, 2:43:03 AM] ~ Uri Oberlander: can they put stuff on the uhaul first thing tomorrow?
[2023-07-25, 2:49:25 AM] Edden: no
[2023-07-25, 3:01:34 AM] ~ Jackson Nozick: Edden and Jane come down right now it's 12 and ur late I'm so cold ⌛⏰⌚
[2023-07-25, 3:08:14 AM] Shir: Can anyone please come help Dani and I make sandwiches for tomorrow please come
[2023-07-25, 3:23:26 AM] ~ maya: if anyone who isn’t doing anything feels like bringing me a coffee to the gezer i would love you forever
[2023-07-25, 3:34:22 AM] ~ Mica: Shmeppy kicked a dog spread the word
[2023-07-25, 3:34:30 AM] ~ Mica: I hear from a reliable source
[2023-07-25, 3:35:02 AM] ~ Alex (shmeppy): no i didn’t
[2023-07-25, 3:35:05 AM] ~ Roie Bargil: I saw it
[2023-07-25, 3:35:10 AM] ~ Roie Bargil: It’s crying
[2023-07-25, 3:40:21 AM] ~ Jane: WTF U CANT DO THAT
[2023-07-25, 3:42:46 AM] ~ Mica: Yeah seriously. That is messed up. Evil evil he’s evil.
[2023-07-25, 3:44:57 AM] ~ maya: good call
[2023-07-25, 3:52:17 AM] ~ Tal Fisher-Taylor: Is there a maz still up?
[2023-07-25, 3:52:26 AM] ~ Ariella Smith-Eidelman: yes we are all in the bayit
[2023-07-25, 3:52:29 AM] ~ Noga Goldman: Yes
[2023-07-25, 3:53:54 AM] ~ Maisie: Shmeppy I thought you were my friend (´；Д；)
[2023-07-25, 4:02:12 AM] Yonnie: When will his reign of terror end??
[2023-07-25, 4:05:27 AM] ~ maya: do mads have to walk up children or can they just go in buddies
[2023-07-25, 4:08:29 AM] ~ Noga Goldman: We gotta walk em up. Prielle and lila are on walking kids to bed
[2023-07-25, 4:17:28 AM] Cate: image omitted
[2023-07-25, 4:17:34 AM] Cate: image omitted
[2023-07-25, 4:17:44 AM] Cate: Hello everyone!!
[2023-07-25, 4:18:30 AM] Cate: shir, dani and I made the most scrumptious sandwiches for kid drop off tommorow! So PLEASE DON'T EAT THEM
[2023-07-25, 4:19:31 AM] ~ Maisie: (￣▽￣) thanks for the spam
[2023-07-25, 4:33:55 AM] ~ Jane: edden and I just ate all of them on shmira woopsie
[2023-07-25, 4:34:05 AM] Edden: oops
[2023-07-25, 4:34:27 AM] Edden: they were delicious
[2023-07-25, 4:36:02 AM] ~ Noa Franklin: How is kima gonna work tomorrow?
[2023-07-25, 4:40:50 AM] Yvonne: Kima at 7
[2023-07-25, 4:48:25 AM] Cate: @17788706904 will we have a Victoria kid drop off briefing tomorrow?
[2023-07-25, 4:49:34 AM] ~ Shani Avrahami Saraf: Hello everyone I know I said I was on call tonight but I lied. Please wake up Tal for any emergencies that come up between now and kima.
[2023-07-25, 4:54:13 AM] ~ Ariella Smith-Eidelman: image omitted
[2023-07-25, 4:56:28 AM] ~ Maisie: If anyone sees my apple wired earbuds gimme them back please 🐍🐍🐍
[2023-07-25, 5:04:36 AM] ~ maya: whoever is meant to be replacing me in the gezer YOU ARE SO INCREDIBLY LATE OMG SHAME SHAME SHAME
[2023-07-25, 5:07:23 AM] ~ Lila: same for movies! @12368821635 please come with your laptop cause i wanna go to bedddddd
[2023-07-25, 5:08:15 AM] ~ maya: @17789885915 @12369965850 @17786860074 or @16043960611 that’s one of you
[2023-07-25, 5:08:18 AM] ~ Lila: or literally anyone who has a laptop with an hdmi port or dongle please come i need my laptop back
[2023-07-25, 5:25:18 AM] ~ Lila: @12368821635 please come to the chadar
[2023-07-25, 6:55:55 AM] ~ Avishai Jacobson: Can someone walk me to the Chadar
[2023-07-25, 6:56:04 AM] ~ Avishai Jacobson: I don’t want to get eaten tonight
[2023-07-25, 6:56:27 AM] ~ Avishai Jacobson: I’m in polka dot
[2023-07-25, 7:04:03 AM] Mira: I’ll stand and watch you walk over
[2023-07-25, 7:05:39 AM] ~ blue: can someone come tap me out in the gezer
[2023-07-25, 7:05:48 AM] ~ blue: please 🙏
[2023-07-25, 7:06:43 AM] ~ lily cohen: same but from binyan
[2023-07-25, 7:06:48 AM] ~ lily cohen: like plz
[2023-07-25, 7:11:33 AM] ~ blue: please i wanna sleep
[2023-07-25, 7:11:40 AM] ~ blue: and i’m going back for kid drop off
[2023-07-25, 7:11:42 AM] ~ blue: SAVE ME!!
[2023-07-25, 7:35:56 AM] ~ hannah: sorry i thought they were mine lol they’re at the foot of ur bed
[2023-07-25, 7:36:30 AM] ~ Avishai Jacobson: @17789855311 where are you
[2023-07-25, 10:13:42 AM] Ron: When is mifkad
[2023-07-25, 10:15:16 AM] ~ Uri Oberlander: 730
[2023-07-25, 10:15:25 AM] Ezra: https://docs.google.com/document/d/1nnqCDAMr-XG7qq_eHk_Ass5NElugDpUJxmpMTYig8ko/edit?usp=drivesdk
[2023-07-25, 10:15:50 AM] Ezra: Fake news
[2023-07-25, 10:16:00 AM] ~ Gavriella TroperHochstein: 8:40
[2023-07-25, 10:16:16 AM] Ezra: Once you've been approved by a member maz send you kids to the chadar for breakfast
[2023-07-25, 10:17:08 AM] ~ Uri Oberlander: oops
[2023-07-25, 10:17:15 AM] ~ Uri Oberlander: damn that’s really late
[2023-07-25, 10:17:26 AM] ~ Uri Oberlander: this was unclear
[2023-07-25, 10:19:25 AM] ~ Uri Oberlander: so breakfast is before mifkad boker
[2023-07-25, 10:19:40 AM] ~ Gavriella TroperHochstein: yeet
[2023-07-25, 12:56:54 PM] ~ Ariella Smith-Eidelman: video omitted
[2023-07-25, 12:58:28 PM] ~ Maisie: Yeah, that seems like a Solomon thing to do
[2023-07-25, 1:24:57 PM] ~ Mica: Can we turn the music down? Now is the madatz nap time
[2023-07-25, 1:25:14 PM] ~ Uri Oberlander: also tzevet nap time!
[2023-07-25, 1:25:29 PM] ~ Mica: Please
[2023-07-25, 1:28:28 PM] ~ Gavriella TroperHochstein: Ariella! We don’t take videos or photos of tzevet members embarrassing themselves!
[2023-07-25, 1:58:33 PM] ~ Shani Avrahami Saraf: Are drop off people.on the Gabe ferry rn?
[2023-07-25, 1:59:37 PM] ~ maya: yessir
[2023-07-25, 1:59:48 PM] ~ Shani Avrahami Saraf: Wahoo
[2023-07-25, 2:00:01 PM] ~ maya: see y’all never 🥰🤩🤣
[2023-07-25, 2:00:05 PM] ~ Solomon Bodrug: I’m not embarrassed 🙈
[2023-07-25, 2:01:08 PM] ~ Sadie Quinn: Team Victoria didn’t make it on 😢
[2023-07-25, 2:01:24 PM] Dan: Oh no!
[2023-07-25, 2:03:55 PM] Cate: That means u have an extra hour of packing time before we see u🥳🥳
[2023-07-25, 5:45:58 PM] ~ Ana: Lily Roie and maya have a safe flight home!!! ❤️❤️❤️
[2023-07-25, 5:46:18 PM] ~ Ana: You have made a really amazing impact on machaneh Miriam!!!
[2023-07-25, 5:46:23 PM] ~ Ana: All my love ❤️❤️❤️
[2023-07-25, 5:46:31 PM] ~ Uri Oberlander: faxxxxxx
[2023-07-25, 5:48:05 PM] ~ Ana: * @61478581858 @61450141228 @61477604777
[2023-07-25, 6:02:01 PM] Mira: Is it possible for people doing mitzur to come help grab some recycling from the myad?
[2023-07-25, 6:22:57 PM] Mira: Hello sexy people this is Tyler. Michzur should come and grab a big sexy pile of cardboard (and more!) from the myad :)
[2023-07-25, 6:23:06 PM] Mira: Pretty please
[2023-07-25, 11:55:06 PM] ~ Mikal Stein: MOVIE NIGHT starting now😼😼😼 watching napoleon dynamite you do not wanna miss it
[2023-07-25, 11:55:35 PM] ~ Mikal Stein: Come to the chadar and get cozy🫶
[2023-07-26, 12:05:24 AM] ~ Roie Bargil: I’m coming I’ll just be a bit late
[2023-07-26, 12:05:40 AM] ~ Uri Oberlander: NOOOO😭😭
[2023-07-26, 12:06:19 AM] Rafi: 💀💀💀😭😭😭
[2023-07-26, 12:12:39 AM] ~ Maisie: 🗿
[2023-07-26, 12:14:35 AM] ~ Jane: i can tell you picked the movie
[2023-07-26, 12:39:20 AM] ~ Shani Avrahami Saraf: Bonimot and madatz who need meds should come get them in the next 20 mins!
[2023-07-26, 12:39:30 AM] ~ Shani Avrahami Saraf: And if you take meds you should also take them before 10
[2023-07-26, 1:53:16 AM] ~ ➕Ziv Mergui✖️: image omitted
[2023-07-26, 1:53:57 AM] Mira: I peed in the walk in
[2023-07-26, 1:54:04 AM] Mira: NOOOOO
[2023-07-26, 1:54:07 AM] Rafi: Thank you so much
[2023-07-26, 1:54:19 AM] Dan: 🤮🤮🤮
[2023-07-26, 1:54:28 AM] ~ Maisie: 🗿
[2023-07-26, 1:54:35 AM] Alias: Mira that’s disgusting how could you
[2023-07-26, 1:54:55 AM] ~ Maisie: Alias aren’t you in there with them?
[2023-07-26, 1:55:08 AM] ~ Maisie: Why are you still surprised
[2023-07-26, 1:55:25 AM] Mira: I didn’t pee I promise
[2023-07-26, 1:55:43 AM] Dan: Mira 10:53 pm...
[2023-07-26, 1:55:49 AM] Dan: lmao 🤣🤣🤣
[2023-07-26, 1:57:09 AM] Mira: Okay I pee only a little
[2023-07-26, 1:57:14 AM] Mira: Oopsie
[2023-07-26, 2:02:24 AM] ~ Noa Franklin: When’s kima tomorrow?
[2023-07-26, 2:04:48 AM] ~ Ariella Smith-Eidelman: 9
[2023-07-26, 2:16:41 AM] Mira: Reminder that spray paint CANNOT be used inside the mayd. It’s so super bad and stinky and dangerous pls don’t do it!! Spray paint is an outdoor activity.
[2023-07-26, 4:38:37 AM] ~ Tal Fisher-Taylor: Miss you guys ❤️
[2023-07-26, 4:41:12 AM] ~ Uri Oberlander: miss u too tal❤️
[2023-07-26, 12:23:42 PM] ~ Maisie: That’s not very food safe 🗿 <This message was edited>
[2023-07-26, 12:34:18 PM] ~ Jackson Nozick: image omitted
[2023-07-26, 12:47:03 PM] Ron: image omitted
[2023-07-26, 12:47:20 PM] ~ hannah: 🐍🐍🐍🐍
[2023-07-26, 12:47:56 PM] ~ Maisie: There’s a snake in my boot!
[2023-07-26, 1:28:07 PM] ~ Shani Avrahami Saraf: If anyone sees zac tell him to come to the mirp
[2023-07-26, 3:47:11 PM] Rue: https://docs.google.com/document/d/1uaG5qxbwkkvdPeQvM6JjEAGxBfDW3cWFY7kwTXJA0Yk/edit?usp=sharing
[2023-07-26, 4:03:48 PM] ~ mai: GIVE ME MY PINK TOP BACK PLS PLS PLS I KNOW SOMEONE BORROWED IT FOR YOM MEYUCHAD
[2023-07-26, 6:17:18 PM] Ron: Hodaah: Don’t forget tonight is the start of Tisha B’av if you are planning to fast 🕍
[2023-07-26, 6:28:17 PM] ~ Noa Franklin: The fast starts at 9:01 and ends at 9:47 tomorrow
[2023-07-26, 6:28:22 PM] ~ Noa Franklin: This message was deleted.
[2023-07-26, 6:29:55 PM] ~ Noa Franklin: *9:01pm tonight - 9:47pm tomorrow
[2023-07-26, 8:47:16 PM] Ron: Hey what theatre are you guys in
[2023-07-26, 8:47:35 PM] ~ eli gerut: 5
[2023-07-26, 10:22:45 PM] ~ Mikal Stein: image omitted
[2023-07-26, 10:36:56 PM] ~ mai: image omitted
[2023-07-26, 10:37:21 PM] Dan: #SLAY
[2023-07-26, 11:08:57 PM] ~ Mica: image omitted
[2023-07-26, 11:09:48 PM] Rue: Zevi’s knee crease
[2023-07-26, 11:10:03 PM] ~ Gavriella TroperHochstein: close but no cigar
[2023-07-26, 11:10:28 PM] Rue: Zevi’s forehead crease
[2023-07-26, 11:11:47 PM] ~ Gavriella TroperHochstein: getting warmer…
[2023-07-26, 11:12:01 PM] ~ Ariella Smith-Eidelman: Zevi’s chin crease
[2023-07-26, 11:12:30 PM] ~ Gavriella TroperHochstein: less close
[2023-07-26, 11:12:38 PM] ~ Mica: Like REALLY close
[2023-07-26, 11:13:02 PM] ~ Ariella Smith-Eidelman: Zevi’s cheek crease
[2023-07-26, 11:13:05 PM] Dan: Zevi's armpit
[2023-07-26, 11:13:06 PM] Dan: ?mm
[2023-07-26, 11:13:44 PM] ~ Gavriella TroperHochstein: ding ding ding 🛎️
[2023-07-26, 11:14:12 PM] ~ Mica: Sort of
[2023-07-26, 11:14:21 PM] ~ Mica: It’s the skin next to his eyebrows pinched
[2023-07-27, 1:05:50 AM] Yvonne: What are the numbers for laundry?
[2023-07-27, 1:06:03 AM] ~ Ariella Smith-Eidelman: Above the order form thing
[2023-07-27, 1:08:59 AM] Ron: What the laundry number for nitzanim ???
[2023-07-27, 1:19:38 AM] Alias: Wouldn’t you like to know
[2023-07-27, 1:29:11 AM] Ron: Question mark
[2023-07-27, 1:29:38 AM] ~ Gal Icek: .
[2023-07-27, 1:30:11 AM] Rafi: Nitz isn’t there
[2023-07-27, 1:30:38 AM] ~ Ariella Smith-Eidelman: ok what did nitz do last session?
[2023-07-27, 1:30:54 AM] Shai Rubin: we wrote “NITZ” on the bag
[2023-07-27, 1:31:26 AM] Ron: Thanks🙂
[2023-07-27, 2:42:20 AM] ~ Maayan: Hey for whoever’s making Chloe in madatz’s birthday cake tmr can the cake say happy birthday pookie ?
[2023-07-27, 2:45:01 AM] ~ Maayan: image omitted
[2023-07-27, 2:46:53 AM] Yvonne: What’s kima?
[2023-07-27, 2:47:30 AM] ~ Ariella Smith-Eidelman: 9 - and it is a shower day so you can shower before or after programming !
[2023-07-27, 2:50:50 AM] ~ Ariella Smith-Eidelman: this is a lie there is gonna be a designated shower block tmrw
[2023-07-27, 2:50:52 AM] ~ Ariella Smith-Eidelman: dont do this
[2023-07-27, 12:37:36 PM] Tzevet 2023 & ME 🧬👩‍🔬🌀: ~ Gal Icek added ~ Joanna, ~ Nicole, and ‪+1 (206) 484‑1020‬
[2023-07-27, 3:14:17 AM] Arielle: Can we still take a shower before programming
[2023-07-27, 3:17:08 AM] ~ Ariella Smith-Eidelman: yes as long as you are at bfast on time
[2023-07-27, 3:17:11 AM] ~ Ariella Smith-Eidelman: at 9:30
[2023-07-27, 1:06:37 PM] ~ Ariella Smith-Eidelman: Come to the Janusz!!
[2023-07-27, 3:16:32 PM] ~ Tal Fisher-Taylor: Can someone pick me up from ferry please?
[2023-07-27, 3:18:02 PM] ~ Lila: we’re swimming before showers come
[2023-07-27, 4:01:41 PM] ~ Mica: image omitted
[2023-07-27, 5:20:14 PM] ~ hannah: chloe’s cake is done @ madatz tzevet
[2023-07-27, 5:25:54 PM] ~ mai: Hello Jews! Here is a feedback form for Shabbat from first session. I would love for you to fill it out! https://forms.gle/MBxn8sCeihNgcGFg9
[2023-07-27, 5:38:41 PM] ~ Mica: Techni is available again thank you!
[2023-07-27, 5:41:46 PM] ~ Ariella Smith-Eidelman: can someone in the chadar please text the picture of the chuggim board for this session
[2023-07-27, 5:41:47 PM] ~ Ariella Smith-Eidelman: ?
[2023-07-27, 5:42:31 PM] ~ Oliver: image omitted
[2023-07-27, 5:42:40 PM] ~ Ariella Smith-Eidelman: thank you
[2023-07-27, 5:52:07 PM] Dan: lmao who added nba youngboy
[2023-07-27, 5:52:24 PM] ~ Alex (shmeppy): ron fs
[2023-07-27, 5:53:13 PM] Ron: It was the bonim but I’ll run it for them tbh
[2023-07-27, 6:12:48 PM] ~ Mikal Stein: image omitted
[2023-07-27, 6:12:52 PM] ~ Mikal Stein: Raphy
[2023-07-27, 6:13:07 PM] Rafi: Bruh
[2023-07-27, 6:13:14 PM] Rafi: That’s so unfortunate
[2023-07-27, 6:14:29 PM] ~ Mikal Stein: image omitted
[2023-07-27, 6:14:33 PM] ~ Mikal Stein: Mairov
[2023-07-27, 6:14:41 PM] Dan: That is zac!!!
[2023-07-27, 6:14:53 PM] Dan: So cool right?!?;
[2023-07-27, 6:15:09 PM] ~ mai: 🦤
[2023-07-27, 6:16:14 PM] Rue: Hafsaka until 3:30!
[2023-07-27, 6:26:38 PM] ~ Gavriella TroperHochstein: Here are the madatz for each tzevet! Please welcome them to your tzevet!

Amelimot:
Sivan
Sahra
Lola

Chalutzimot:
Ayelet
Bec
Adao
Liad

Sayarimot:
Clem
Gemma
Reuben
Jascha

Chotrimot:
Sunny
Allison
Elias
Chloe
Molly

Shomrimot:
Ariel
Sophie
Nina
Grace

Tzofimot:
Ella
Siena
Talia
Jacob
[2023-07-27, 6:27:37 PM] ~ agustina: shomrimot stacked 👑
[2023-07-27, 6:29:39 PM] Dan: Amel better 🐨
[2023-07-27, 6:37:12 PM] ~ Monty: Come to chadar 👹
[2023-07-27, 6:37:42 PM] ~ Monty: 🫨
[2023-07-27, 6:37:56 PM] Dan: 🪤🪤🪤
[2023-07-27, 7:20:48 PM] ~ Ariella Smith-Eidelman: 10 more mins to vaad presentations!!!
[2023-07-27, 8:15:23 PM] Dan: Where is Chuggim planning?
[2023-07-27, 8:16:11 PM] ~ Ariella Smith-Eidelman: Chadar
[2023-07-27, 8:18:39 PM] Dan: This means come to chadar :)
[2023-07-27, 8:18:49 PM] Dan: Like now!
[2023-07-27, 8:21:18 PM] Rafi: ⚠️⚠️a lot of people have been asking me to order things sports related. If you have ideas I would love to hear them but please text me privately so I can actually keep track of them and order them. THANK YOU⚠️⚠️
[2023-07-27, 8:52:04 PM] ~ mai: Can someone send a picture of the seder yom for the day?
[2023-07-27, 9:05:08 PM] Dan: image omitted
[2023-07-27, 9:05:13 PM] Dan: Sorry for the delay!
[2023-07-27, 9:10:35 PM] ~ Alex (shmeppy): image omitted
[2023-07-27, 9:15:06 PM] Rue: Hi hi, if anyone has questions during this block Sadie and I will be in the chadar!
[2023-07-27, 9:15:47 PM] Yvonne: Are we running an aliyah bet peula the day after?
[2023-07-27, 9:15:50 PM] Yvonne: Or our own
[2023-07-27, 9:16:06 PM] ~ Gal Icek: Aliya bet peula
[2023-07-27, 9:16:32 PM] Yvonne: Okay okay
[2023-07-27, 9:16:33 PM] Yvonne: Thanks
[2023-07-27, 9:16:34 PM] Yvonne: Anddddd
[2023-07-27, 9:16:50 PM] Yvonne: Are we running a peula on the 8th if we leave for tiyul on the 9th?
[2023-07-27, 9:16:53 PM] Rafi: https://forms.gle/RgBeT9iQjWt5tmu6A
[2023-07-27, 9:17:01 PM] ~ Sadie Quinn: Yes!
[2023-07-27, 9:17:56 PM] Rafi: Please fill this out again if u didn’t because u weren’t here or if u didn’t cause u were off. Also please text me if u weren’t off for zman sport first session but now u are so I can take u off my list.
[2023-07-27, 9:21:33 PM] ~ mai: Bump!
[2023-07-27, 9:32:50 PM] ~ Maisie: Dan why the fuck did you react with the drooling emoji 🗿
[2023-07-27, 9:38:52 PM] ~ Maisie: 😧
[2023-07-27, 9:57:42 PM] Dan: Ayyo does anyone specifically want to do Shmira with me. If so PM me :)
[2023-07-27, 10:12:30 PM] ~ Maisie: What’s the chevrati?
[2023-07-27, 10:40:39 PM] ~ Ariella Smith-Eidelman: Ur mom
[2023-07-27, 10:41:26 PM] ~ Maisie: I’m gonna getcha. (๑•ૅㅁ•๑)
[2023-07-27, 10:46:08 PM] ~ Ariella Smith-Eidelman: Meet in the chadar at 8:15
[2023-07-27, 11:02:35 PM] Ron: If you see true religion jeans somewhere pls hml
[2023-07-27, 11:05:53 PM] Dan: Did you lose them? Or you are tryna buy some?
[2023-07-27, 11:08:40 PM] ~ Oliver: Psa that if u shave ur pubes in the bathroom u should wipe the toilet seat
[2023-07-27, 11:13:23 PM] ~ Oliver: Gotta go thrugh the jungle to take a shit gah dam
[2023-07-27, 11:13:49 PM] ~ hannah: also if you cut your hair in the mains u should clean up the hair after
[2023-07-27, 11:18:20 PM] ~ Ariella Smith-Eidelman: COME TO THE CHADAR NOW
[2023-07-27, 11:18:35 PM] ~ Ariella Smith-Eidelman: YOU HAVE TIME TO GET READY AFTER
[2023-07-27, 11:18:47 PM] ~ Noga Goldman: Get your tuchas in the binyan
[2023-07-28, 2:00:28 AM] Ezra: Catheter
[2023-07-28, 2:00:55 AM] ~ Ariella Smith-Eidelman: Jaguar
[2023-07-28, 2:01:08 AM] ~ Talia Joffe: I barely know her
[2023-07-28, 3:23:12 AM] ~ Maisie: I barely know har
[2023-07-28, 3:28:25 AM] Mira: Are people on clean up?
[2023-07-28, 3:29:28 AM] ~ Alex (shmeppy): yes idk where they r
[2023-07-28, 3:30:02 AM] Dan: Hi guys I am supposed to be on clean up Im exhausted tho
[2023-07-28, 3:30:09 AM] Dan: Can anyone help for me
[2023-07-28, 3:30:18 AM] Dan: If not I'll do a side quest back
[2023-07-28, 3:39:31 AM] ~ Alex (shmeppy): who tf is cleaning up
[2023-07-28, 3:39:33 AM] ~ Alex (shmeppy): do we have to
[2023-07-28, 3:40:07 AM] ~ Prielle Laniado: @17785352161 @17786782703 @16047882125
[2023-07-28, 3:42:28 AM] ~ Zevi: A crew is being gathered to help clean up but if you’re there and heading back you should take some stuff
[2023-07-28, 3:42:29 AM] ~ Prielle Laniado: !!!!!!!!!!!
[2023-07-28, 3:42:31 AM] India: ya had to do something and now i’m gonna clean
[2023-07-28, 3:53:25 AM] Ron: image omitted
[2023-07-28, 3:53:28 AM] Ron: Um
[2023-07-28, 3:54:24 AM] India: there’s no way ron and i can clean up alone so don’t be shy to come to the platform for some good vibes
[2023-07-28, 4:28:11 AM] Ron: Collective responsibility who
[2023-07-28, 4:39:52 AM] India: This message was deleted.
[2023-07-28, 4:41:08 AM] India: audio omitted
[2023-07-28, 4:41:17 AM] Ron: Side eye
[2023-07-28, 4:42:55 AM] Edden: if anyone finds a purple hamsa necklace please give it to me
[2023-07-28, 4:50:08 AM] ~ Tal Fisher-Taylor: Jam container and yogurt cups are not garbage!!! Recycle!!!
[2023-07-28, 11:54:08 AM] Dan: @ any maskirut that are awake pm me ASAP!!
[2023-07-28, 11:56:29 AM] Dan: No longer urgent still need to talk to one tho
[2023-07-28, 12:31:16 PM] ~ Tal Fisher-Taylor: Nitz tzevet come to mirp for rotations!!
[2023-07-28, 12:31:57 PM] ~ Tal Fisher-Taylor: But grab breakfast first
[2023-07-28, 1:39:54 PM] Dan: @ chalutzimot tzev Mirp in 5 mins!!
[2023-07-28, 2:10:13 PM] Ron: Can anyone drive me to south delta for pickup / will I be reimbursed a 90$ cab ride
[2023-07-28, 2:29:48 PM] Shai Rubin: https://forms.gle/wCTnySa4p81TWA2U6
Please fill this out before rikkud tonight so Omer and I know whether or not we should teach a dance tonight!!
[2023-07-28, 3:00:42 PM] ~ Mica: Madatz are actually staying in tzevet planning until lunch pass it on
[2023-07-28, 4:10:10 PM] ~ Eli: image omitted
[2023-07-28, 4:10:34 PM] ~ Lyrie Murad: image omitted
[2023-07-28, 4:10:35 PM] ~ Lyrie Murad: image omitted
[2023-07-28, 4:10:40 PM] ~ Lyrie Murad: Caption contest
[2023-07-28, 4:13:47 PM] Dan: Tzevet "bonding" experiences 🥰
[2023-07-28, 4:14:18 PM] ~ Eli: image omitted
[2023-07-28, 4:38:27 PM] ~ Kiran: I need a ride from the ferry, is anyone available and willing?
[2023-07-28, 4:55:26 PM] ~ Shani Avrahami Saraf: Chotrimot tzevet to the mirp pls!
[2023-07-28, 5:18:20 PM] ~ Mikal Stein: https://docs.google.com/forms/d/e/1FAIpQLSdFgLTktS_picGCQhkvh9ffCZ2KqaNCZ4unkrck_fRTx1OBIg/viewform
[2023-07-28, 5:20:08 PM] ~ Mikal Stein: SEND THEM IN FOLKS😼😼😼
[2023-07-28, 5:21:54 PM] ~ Mikal Stein: I better see some good gossip soon. Bump bump bump
[2023-07-28, 5:27:29 PM] ~ Shani Avrahami Saraf: @16478550311 time to come to the mirp!
[2023-07-28, 5:27:41 PM] ~ Shani Avrahami Saraf: If anyone sees Karly send em over
[2023-07-28, 5:28:57 PM] Ron: Anyone got a chulza I can borrow for pick up
[2023-07-28, 5:29:54 PM] ~ Mikal Stein: This form will close at 6 pm tonight‼️‼️
[2023-07-28, 6:15:27 PM] ~ Ariella Smith-Eidelman: shomrimot tzevet can one of you come talk to me about your order form!
[2023-07-28, 6:58:11 PM] Ezra: sayarimot tzevet
[2023-07-28, 6:58:17 PM] Ezra: text me who is going back
[2023-07-28, 7:11:34 PM] ~ Monty: @15035604496 LOL
[2023-07-28, 7:27:28 PM] ~ Joanna: https://docs.google.com/forms/d/e/1FAIpQLSdFgLTktS_picGCQhkvh9ffCZ2KqaNCZ4unkrck_fRTx1OBIg/viewform
[2023-07-28, 7:27:31 PM] ~ Joanna: Get them in!!!
[2023-07-28, 8:32:11 PM] Rafi: After feedback everyone should change into a bathing suit and meet at the lower kvish
[2023-07-28, 8:32:30 PM] Dan: Ok
[2023-07-28, 8:49:12 PM] ~ Ariella Smith-Eidelman: Tzevet who is going to do kid pick up tmrw we are meeting at 6:45 for the briefing in the mo
[2023-07-28, 8:49:33 PM] Dan: Does Victoria go to?
[2023-07-28, 8:58:13 PM] ~ Alex (shmeppy): everyone change into bathing suits and be prepared to boat/swim (hair wet and everything) and meet at the lower kvish at 6:15
[2023-07-28, 9:00:54 PM] ~ Alex (shmeppy): WEAR WATER SHOES!!!
[2023-07-28, 9:03:17 PM] ~ Jane: ☝️🤓 what if i dont have water shoes
[2023-07-28, 9:03:47 PM] Dan: Actually same tho
[2023-07-28, 9:03:56 PM] Dan: I forgot to bring them 😭😭
[2023-07-28, 9:04:21 PM] ~ Monty: Do the shoes have to have a closed back
[2023-07-28, 9:04:26 PM] ~ Monty: Like can I wear slides
[2023-07-28, 9:05:20 PM] Rafi: If u are already down there
[2023-07-28, 9:05:28 PM] Rafi: Please start bringing the sit on tops down
[2023-07-28, 9:10:40 PM] Alias: Is there enough time for Vancouver people to do chevarti and get to the meeting or should we not go
[2023-07-28, 9:10:58 PM] ~ Ariella Smith-Eidelman: The meeting will happen at dinner instead n
[2023-07-28, 9:11:02 PM] ~ Ariella Smith-Eidelman: !
[2023-07-28, 10:33:39 PM] ~ Shani Avrahami Saraf: Where is briefing happening?
[2023-07-28, 10:33:57 PM] ~ Noga Goldman: The mo
[2023-07-28, 10:47:17 PM] Ezra: https://docs.google.com/document/d/1IOIKC_1ZNDp4Xg794fcQhF95zVANnHhn8JDZjIzXcKw/edit?usp=sharing
[2023-07-28, 10:48:04 PM] Ezra: https://docs.google.com/document/d/1IOIKC_1ZNDp4Xg794fcQhF95zVANnHhn8JDZjIzXcKw/edit?usp=sharing
[2023-07-28, 11:21:36 PM] ~ Monty: When does rikkud start?
[2023-07-28, 11:22:43 PM] ~ Noga Goldman: Now!
[2023-07-28, 11:22:56 PM] ~ Monty: Weeeee
[2023-07-28, 11:27:18 PM] Tyler: Has anybody seen my sexy astrology notebook?
[2023-07-28, 11:27:25 PM] Tyler: She was used to aid in rolling last night
[2023-07-28, 11:35:31 PM] ~ Mikal Stein: Get ur butts up to rikkud
[2023-07-29, 12:07:24 AM] Dan: Where is medura musicale?
[2023-07-29, 1:17:50 AM] ~ Sadie Quinn: Chevrati in the mo at 10:30! Move your stuff and come on down!
[2023-07-29, 1:25:42 AM] ~ Prielle Laniado: ITS GONNA BE SO FUN EVERYONE SHOULD COME
[2023-07-29, 1:26:30 AM] ~ Zevi: Madatz tzevet is coming we’re just putting our kids to bed we’ll be there in like 30 min
[2023-07-29, 1:26:43 AM] ~ Sadie Quinn: It is… TZEVET RUMOUR NIGHT!!! Get hyped!!!
[2023-07-29, 1:26:59 AM] ~ Mica: SO HYPED
[2023-07-29, 1:31:10 AM] ~ Monty: YAY some of us are still putting stuff away but on our way
[2023-07-29, 1:32:11 AM] ~ Ariella Smith-Eidelman: Can you text when it’s actually starting !
[2023-07-29, 1:32:18 AM] ~ Ariella Smith-Eidelman: Or can we just start at 11?
[2023-07-29, 1:32:46 AM] ~ Mica: Yeah 11!
[2023-07-29, 1:58:47 AM] ~ Joanna: 2 more minutes!!!!! Come to the mo!!!
[2023-07-29, 2:00:29 AM] ~ Mikal Stein: STARTING NOWWWWW
[2023-07-29, 2:00:44 AM] ~ Zevi: Coming
[2023-07-29, 2:06:53 AM] ~ Eli: image omitted
[2023-07-29, 2:10:04 AM] ~ Joanna: Chevrati is starting in 1 min!!!!
[2023-07-29, 3:14:59 AM] ~ Mica: https://bdsmtest.org/select-mode
[2023-07-29, 3:17:37 AM] ~ Mica: image omitted
[2023-07-29, 3:17:54 AM] ~ Mica: image omitted
[2023-07-29, 3:20:29 AM] Dan: This message was deleted.
[2023-07-29, 3:21:15 AM] ~ Maisie: Amogus
[2023-07-29, 3:35:19 AM] ~ Maisie: I’m leaving. You guys are too loud/horny >:(
[2023-07-29, 3:46:38 AM] Rafi: http://ricepuritytest.com
[2023-07-29, 10:30:32 AM] ~ Roie Bargil: Need to settle a debate - for the knock knock chant is it “I love to bake cake” or “I love a picnic”
[2023-07-29, 10:47:32 AM] Yonnie: "I love a picnic", derived from "I love an orgy"
[2023-07-29, 10:48:20 AM] ~ Roie Bargil: Ok I got heavily pranked
[2023-07-29, 12:59:59 PM] ~ Tal Fisher-Taylor: If you did laundry at mirp please come get it!!!!!!!!
[2023-07-29, 1:24:32 PM] ~ maya: image omitted
[2023-07-29, 1:27:52 PM] Dan: What is this?!?! That shop looks both aesthetically pleasing and delicious 😋
[2023-07-29, 1:28:00 PM] Omer: Omg im coming sorry im late
[2023-07-29, 1:32:12 PM] India: ice cream chain in israel
[2023-07-29, 1:32:27 PM] Dan: OMG YUMM
[2023-07-29, 1:36:56 PM] ~ maya: she slays constantly
[2023-07-29, 1:42:26 PM] ~ Talia Joffe: image omitted
[2023-07-29, 2:01:40 PM] Rue: If you're not going to Vancouver pls come to chadar rn
[2023-07-29, 2:06:48 PM] ~ Tal Fisher-Taylor: If you broke your walkie clip and still have the pieces being it to me and I can fix it @14038162542
[2023-07-29, 2:10:31 PM] Tyler: YES I JUST LEFT BUT KEEP HER SAFE AND SECRET PLZ
[2023-07-29, 2:28:09 PM] ~ Sadie Quinn: I’m in the chadar if anyone has questions about peulot etc
[2023-07-29, 2:38:34 PM] ~ Ariella Smith-Eidelman: Please send Chuggim descriptions by tonight or I am gonna make them up !!
[2023-07-29, 3:06:53 PM] ~ oli: image omitted
[2023-07-29, 3:06:55 PM] ~ oli: who watch
[2023-07-29, 3:07:05 PM] ~ oli: come get from mitbach
[2023-07-29, 3:09:40 PM] ~ Ariella Smith-Eidelman: Big day people when you to the big ferry just wait for me outside
[2023-07-29, 3:10:15 PM] ~ Ariella Smith-Eidelman: And get receipts from the taxis
[2023-07-29, 4:54:10 PM] ~ Alex (shmeppy): image omitted
[2023-07-29, 5:07:15 PM] ~ maya: he’s the love of my life
[2023-07-29, 5:41:23 PM] ~ Tal Fisher-Taylor: Could a amelimot tzevet with a notebook come to mirp for a minute when they get a chance please
[2023-07-29, 5:41:51 PM] Dan: Of course
[2023-07-29, 5:57:08 PM] ~ Lila: whoever left a mess in the mo bathroom 1. please check in with the mirp 2. please clean up after yourself so others don’t have to 🕺
[2023-07-29, 6:00:26 PM] Ron: Ilysm
[2023-07-29, 6:56:04 PM] ~ Joanna: nitzanimot-sayarimot have a bag of gloves for bed checks! Please don’t throw them away! They are on the top shelves!
[2023-07-29, 7:28:28 PM] Ezra: image omitted
[2023-07-29, 7:32:39 PM] Ezra: image omitted
[2023-07-29, 8:34:48 PM] ~ Monty: Do we have big day sign ups or room haggling now?
[2023-07-29, 8:34:58 PM] ~ Gal Icek: Ya
[2023-07-29, 8:35:03 PM] ~ Gal Icek: Room haggling
[2023-07-29, 8:35:19 PM] ~ Gal Icek: One person from each tzevet to come to the techni
[2023-07-29, 9:12:37 PM] ~ Ariella Smith-Eidelman: Reminder to send these!!
[2023-07-29, 9:20:52 PM] Rue: Come to the chadar
[2023-07-29, 9:28:22 PM] Rue: https://docs.google.com/document/d/1P7fo9PEOf_YksTi5_20mPOOIRUsTXpfDWwoG9_Ji9yo/edit?usp=sharing
[2023-07-29, 10:30:51 PM] ~ Talya Stein: If you were put on toranut pls don’t run away!!!! It’s really shitty!!!
[2023-07-29, 10:36:52 PM] ~ oli: just slayed birthday cake duty harder than the mitbach has ever seen before jackson ur a lucky dude
[2023-07-29, 11:01:46 PM] ~ blue: image omitted
[2023-07-29, 11:17:22 PM] ~ Gal Icek: @meerkat manor your things are in the misrad techni
[2023-07-29, 11:20:51 PM] ~ Zevi: image omitted
[2023-07-29, 11:22:31 PM] Dan: OOOH YEAHHHH
[2023-07-29, 11:24:14 PM] Ezra: Kima is at 8:45
[2023-07-29, 11:47:46 PM] ~ Jackson Nozick: Thank u very much I'm sure it's delicious
[2023-07-29, 11:55:17 PM] ~ Ariella Smith-Eidelman: https://docs.google.com/document/d/1tug-3FMn6fGwBXAanUeXT6Bp8b7ws-a5ETcZmOXozT0/edit
[2023-07-29, 11:55:39 PM] ~ Ariella Smith-Eidelman: driving schedule for this session! laundry is not for sure with timing and I will add the tochniot erev before it is printed out :)
[2023-07-30, 12:00:41 AM] ~ Sadie Quinn: Are we showering tonight/tomorrow?
[2023-07-30, 12:01:31 AM] Ezra: Yes! You can shower tonight or before breakfast tmr
[2023-07-30, 12:14:11 AM] ~ Monty: Also is the movie happening?
[2023-07-30, 1:04:35 AM] ~ Jackson Nozick: Yes like around 7 people are watching super bad in the chadar
[2023-07-30, 1:06:03 AM] Yvonne: Would anyone like to shower tmr morning before breakfast? Like 8:20?
[2023-07-30, 1:06:46 AM] Edden: yes
[2023-07-30, 1:06:53 AM] Edden: in uppers?
[2023-07-30, 1:07:21 AM] ~ Gal Icek: If anyone wants to do kima tomorrow lmk
[2023-07-30, 1:10:35 AM] Edden: what time do people want to go chof swimming tonight?
[2023-07-30, 1:11:32 AM] Dan: As soon as the madatz are done I am down 👇
[2023-07-30, 1:12:00 AM] ~ Jackson Nozick: Bruh I just showered 5 minutes ago 💀
[2023-07-30, 1:46:49 AM] ~ Joanna: I’ll do kima!
[2023-07-30, 1:47:10 AM] ~ Alex (shmeppy): no joanna don’t i’m not there and i don’t wanna miss it
[2023-07-30, 1:47:25 AM] Ron: ^
[2023-07-30, 1:47:30 AM] Rafi: ^
[2023-07-30, 2:14:37 AM] ~ Gavriella TroperHochstein: is that noise coming from us?
[2023-07-30, 2:15:08 AM] ~ Gavriella TroperHochstein: *godawful noise
[2023-07-30, 2:15:20 AM] Dan: I am wearing noise cancelling headphones
[2023-07-30, 2:15:26 AM] Dan: So I do not know
[2023-07-30, 2:16:57 AM] ~ Maisie: Why bother answering then?
[2023-07-30, 2:18:17 AM] ~ Joanna: I love my fans but the show must go on!!
[2023-07-30, 2:18:46 AM] ~ Gavriella TroperHochstein: does anyone know how to call in a noise complaint? I know it’s hypocritical but this girl’s gotta get up early
[2023-07-30, 2:19:19 AM] Dan: Yeah you can call Nanaimo bylaw
[2023-07-30, 2:19:46 AM] ~ Gavriella TroperHochstein: hmm seems like too much effort
[2023-07-30, 2:20:00 AM] ~ Gavriella TroperHochstein: thank you all for your support
[2023-07-30, 2:20:20 AM] Dan: image omitted
[2023-07-30, 2:20:40 AM] Dan: Hey it's got one star on Google maps!
[2023-07-30, 2:29:46 AM] ~ Ana: CAKE TIME
[2023-07-30, 2:29:54 AM] ~ Ana: CAKE CAKE CAKE
[2023-07-30, 2:30:00 AM] ~ Ana: CHADAR CHADAR CHAR
[2023-07-30, 2:30:11 AM] ~ Ana: ACHSHAV ACHSAV ACHSHAV
[2023-07-30, 2:30:13 AM] ~ Monty: Were coming!!!
[2023-07-30, 2:30:17 AM] ~ Monty: We’re
[2023-07-30, 2:30:25 AM] ~ Monty: 🤌
[2023-07-30, 2:31:28 AM] ~ Mica: BRUH BRUH BRUH
[2023-07-30, 3:21:15 AM] ~ Ana: Small thing: I have lost my black water bottle which is not ideal. It has some stickers on it and I miss it dearly. Also I lost my journal it looks kinda like a notebook and it’s light and has flowers on it
[2023-07-30, 3:21:37 AM] ~ Ana: Lmk if you happen to see them floating around
[2023-07-30, 3:21:45 AM] ~ Ana: Thanks for reading
[2023-07-30, 11:44:12 AM] ~ Ariella Smith-Eidelman: I am still missing music appreciation, retirement and tidepool descriptions !! Please send today!
[2023-07-30, 11:52:12 AM] Yvonne: Ahhhh okay I’ll write one!!
[2023-07-30, 12:32:37 PM] ~ Lila: 🚨Did anyone happen to move a kids backpack from monica somewhere? 🚨
[2023-07-30, 1:08:11 PM] ~ Maayan: For anybody that was not there during chalutz when we went over how to not put your mouth on the madatz (aka boundaries with madatz) we’re having a super fun sicha about it during lunch!!!!
[2023-07-30, 1:22:18 PM] ~ Kiran: Whoever left this there
[2023-07-30, 1:22:23 PM] ~ Kiran: image omitted
[2023-07-30, 1:22:23 PM] ~ Kiran: image omitted
[2023-07-30, 1:37:17 PM] Zev: image omitted
[2023-07-30, 1:37:49 PM] Zev: image omitted
[2023-07-30, 1:42:00 PM] ~ Gal Icek: image omitted
[2023-07-30, 1:42:08 PM] ~ Gal Icek: image omitted
[2023-07-30, 1:44:30 PM] ~ Eli: image omitted
[2023-07-30, 1:44:36 PM] ~ Eli: image omitted
[2023-07-30, 1:45:02 PM] ~ Gal Icek: Let us know if these are your stuff
[2023-07-30, 1:45:42 PM] ~ Eli: If any of these towels look like they might belong to you please come to the bayit
[2023-07-30, 1:46:28 PM] ~ Jane: image omitted
[2023-07-30, 1:46:29 PM] ~ Jane: image omitted
[2023-07-30, 1:46:29 PM] ~ Jane: image omitted
[2023-07-30, 1:46:30 PM] ~ Jane: image omitted
[2023-07-30, 1:46:30 PM] ~ Jane: image omitted
[2023-07-30, 1:46:30 PM] ~ Jane: image omitted
[2023-07-30, 1:46:31 PM] ~ Jane: image omitted
[2023-07-30, 1:46:31 PM] ~ Jane: image omitted
[2023-07-30, 1:48:15 PM] ~ Jane: image omitted
[2023-07-30, 1:48:18 PM] ~ Jane: image omitted
[2023-07-30, 1:49:16 PM] Zev: image omitted
[2023-07-30, 1:50:44 PM] Zev: image omitted
[2023-07-30, 1:51:06 PM] ~ Jane: image omitted
[2023-07-30, 1:51:06 PM] ~ Jane: image omitted
[2023-07-30, 1:51:07 PM] ~ Jane: image omitted
[2023-07-30, 1:51:07 PM] ~ Jane: image omitted
[2023-07-30, 1:51:08 PM] ~ Jane: image omitted
[2023-07-30, 1:51:08 PM] ~ Jane: image omitted
[2023-07-30, 1:51:09 PM] ~ Jane: image omitted
[2023-07-30, 1:51:20 PM] Zev: image omitted
[2023-07-30, 1:51:27 PM] Zev: image omitted
[2023-07-30, 1:52:14 PM] ~ Jane: image omitted
[2023-07-30, 1:52:16 PM] ~ Jane: image omitted
[2023-07-30, 1:52:53 PM] Zev: image omitted
[2023-07-30, 1:53:03 PM] ~ Jane: image omitted
[2023-07-30, 1:55:57 PM] ~ Tal Fisher-Taylor: Louis?
[2023-07-30, 1:56:39 PM] ~ Maayan: I’m pre sure those r itai’s old hiking boots that were donating to tiyul
[2023-07-30, 1:56:48 PM] ~ Eli: image omitted
[2023-07-30, 1:56:54 PM] ~ Eli: image omitted
[2023-07-30, 1:59:23 PM] Rue: Try to stay out of the binyan hallway if you can, it was just mopped
[2023-07-30, 1:59:59 PM] Zev: image omitted
[2023-07-30, 2:00:11 PM] ~ Jane: image omitted
[2023-07-30, 2:02:04 PM] ~ hannah: omg i was looking for this
[2023-07-30, 2:02:30 PM] ~ Monty: If someone could come help me refill the mop water that would be so amazing I’m in the lowers
[2023-07-30, 2:04:12 PM] ~ Gal Icek: image omitted
[2023-07-30, 2:05:19 PM] ~ Zachary Bunim: that’s mine!
[2023-07-30, 2:08:28 PM] ~ Gal Icek: image omitted
[2023-07-30, 2:08:50 PM] ~ Gal Icek: image omitted
[2023-07-30, 2:27:06 PM] ~ Jackson Nozick: image omitted
[2023-07-30, 2:27:30 PM] Rue: Big calendar: https://docs.google.com/document/d/1S9hk1aYXBsgfuStAxYEjH-v1EtB2rsSuoIVrNKf93d4/edit?usp=sharing
[2023-07-30, 3:08:28 PM] Yvonne: Hey tzevet the bonimot had a thing outside the far ohel that we used for shoes and peoples shoes and kids shoes were in fact on it. Someone has stolen it and taken the shoes off, we want it back
[2023-07-30, 4:22:53 PM] Dan: If no one claims can I have this it's sick
[2023-07-30, 4:35:27 PM] ~ Prielle Laniado: mine is the one with the van on it!!
[2023-07-30, 5:46:17 PM] Alias: When I went for kid pickup I left my earrings at home, and I’m worried about them healing over, does anyone have studs I can borrow till my sister shows up to give me new ones
[2023-07-30, 5:48:15 PM] ~ hannah: do they have to be studs? i have dangly ones
[2023-07-30, 6:13:50 PM] Alias: It’s mostly for snoozing in dangly bits get caught get torn
[2023-07-30, 6:14:25 PM] ~ hannah: ah i think all mine dangle 😢😢
[2023-07-30, 7:05:10 PM] ~ Gavriella TroperHochstein: I might have some small rings you can borrow
[2023-07-30, 7:49:35 PM] Cate: Thier are stud earrings in the jewelry making box in the myad!!
[2023-07-30, 8:26:38 PM] Yonnie: Hello riff raff please be in the chadar for toranut at 6!
[2023-07-30, 8:45:35 PM] Dan: Bro text me back 😭
[2023-07-30, 9:06:38 PM] ~ hannah: dear tzevet: if you saw or will see the cake i just decorated, yes, i am (sort of) an art major, and actually i go to community college so asking “how the hell did you get admitted into art school” is not a relevant question. thanks!
[2023-07-30, 9:12:09 PM] Ron: If u see a light blue Nalgene pls hml
[2023-07-30, 9:12:17 PM] ~ Lila: this is mine!!
[2023-07-30, 9:14:25 PM] Ron: image omitted
[2023-07-30, 9:15:53 PM] ~ agustina: did things get taken off the drying lines?
[2023-07-30, 9:16:47 PM] ~ Jane: yes
[2023-07-30, 9:20:30 PM] ~ Maisie: 🐍🐍🐍🐍
[2023-07-30, 9:23:12 PM] Alias: Life saver
[2023-07-30, 9:55:28 PM] ~ Maisie: Just so everyone in the amelimot tzevet knows, my little sister Rosa often forgets that there’s vegetarian options at the front table and doesn’t eat enough. Please make sure to remind her :3
[2023-07-30, 11:56:29 PM] ~ Zevi: If any sees a MacBook Pro computer charger lmk it has my name on it!
[2023-07-31, 12:06:00 AM] ~ Avishai Jacobson: image omitted
[2023-07-31, 12:15:42 AM] ~ Sarah: tzofimot you guys swimming now ? i will be at the pool
[2023-07-31, 12:43:45 AM] Zev: Should they wake us up in the middle of the night for bathroom still?
[2023-07-31, 12:44:27 AM] Ezra: Sayarimot and under yes they should wake up a madrich
[2023-07-31, 12:44:37 AM] Ezra: above that you or a buddy
[2023-07-31, 12:54:05 AM] ~ Oliver: Mine
[2023-07-31, 12:54:15 AM] ~ Oliver: Also mine
[2023-07-31, 1:26:36 AM] Rafi: Can someone switch with me I’m madrichol toran on the 16th but I am off
[2023-07-31, 1:27:28 AM] Rafi: I’m doing shmira twice within 4 days of eachother so if someone wants to switch with auggie and I for august 4th that would be great
[2023-07-31, 1:27:41 AM] Rafi: You can message me privately for either of these things
[2023-07-31, 1:45:16 AM] Rafi: We found someone to switch!
[2023-07-31, 1:45:44 AM] ~ Ariella Smith-Eidelman: GIF omitted
[2023-07-31, 1:46:02 AM] Rafi: 🦶🏼
[2023-07-31, 4:26:39 AM] ~ Maisie: image omitted
[2023-07-31, 10:28:29 AM] ~ hannah: omg so sorry i totally forgot @16044406994 ur cake is in the mitbach :((
[2023-07-31, 12:50:32 PM] ~ Solomon Bodrug: image omitted
[2023-07-31, 12:53:04 PM] ~ Zachary Bunim: that’s mine thanks sol
[2023-07-31, 12:55:37 PM] ~ Ariella Smith-Eidelman: image omitted
[2023-07-31, 1:02:35 PM] Rafi: image omitted
[2023-07-31, 1:17:58 PM] ~ Jane: image omitted
[2023-07-31, 1:31:04 PM] Dan: Cool where's the board? Techni?
[2023-07-31, 1:38:58 PM] Gali Goldman: Hi everyone! I'm sending a link for everyone on tzevet to fill out about yom madatz and bonimot bash!! Please fill it out by tonight if you want to have input! https://docs.google.com/forms/d/e/1FAIpQLScpH3FEKIdynzH4VLBtkf6ZbWOH7VwJATF3Aaly5OBBEs9acQ/viewform?usp=pp_url
[2023-07-31, 1:42:18 PM] Gali Goldman: ALSO! Another reminder because this is a new session :) I'm here to help with bedtime if people need help! Just ask me and i'll probably be available 🐑🐙🦀
[2023-07-31, 1:44:02 PM] Mira: I’m also happy to help out putting kids to bed!
[2023-07-31, 1:44:32 PM] ~ Sadie Quinn: Same!
[2023-07-31, 1:47:13 PM] ~ Ilana Sela: ME TOO!
[2023-07-31, 1:55:41 PM] Rue: Hi, I forgot to add kesher meetings to the Seder yom so here we go:
- Chotrimot have their kesher meeting during elections (1:00pm) and will be on for zman madatz
- Amel, Chalutz, Say, Bon have their kesher meetings at the start of zman madatz (3:30)
- Shom and Tzof have their kesher meetings in the middle of zman madatz (3:50)
- Nitz should find a time to meet with Ezra after you put your kids to bed
[2023-07-31, 1:56:20 PM] ~ Oliver: I’m not
[2023-07-31, 1:56:24 PM] ~ Oliver: Jk
[2023-07-31, 1:56:32 PM] ~ Oliver: That would be hype
[2023-07-31, 2:13:27 PM] ~ Ariella Smith-Eidelman: Shomrimot I am missing all your chuggim requests !!
[2023-07-31, 2:31:59 PM] ~ Ariella Smith-Eidelman: also can someone on sayarimot tzevet come talk to me about chuggim after pish :)
[2023-07-31, 2:33:09 PM] ~ Ariella Smith-Eidelman: and chalutzimot tzevet!
[2023-07-31, 3:27:57 PM] Tyler: If you are on for zman sport nitz are only allowed to be at grounders, soccer, and rikkud. If that’s not ur station and they r there send them away !
[2023-07-31, 4:13:50 PM] ~ Maisie: Sad news everyone. Peewee Herman passed away last night.
[2023-07-31, 4:13:52 PM] ~ Maisie: https://www.nbcnews.com/news/us-news/paul-reubens-actor-best-known-pee-wee-herman-dies-70-rcna97343
[2023-07-31, 4:14:12 PM] Dan: May his memory be a blessing 🙏
[2023-07-31, 4:14:26 PM] ~ Maisie: This message was deleted.
[2023-07-31, 5:14:37 PM] ~ mai: Hello hello I’m madrichol toran on the 6th and I’m on chofesh. Could someone trade with me?
[2023-07-31, 5:28:52 PM] Zev: Where is the key to the sports shed?
[2023-07-31, 5:29:04 PM] Rafi: No key
[2023-07-31, 5:29:07 PM] Rafi: Just code
[2023-07-31, 5:29:11 PM] Rafi: 124
[2023-07-31, 5:29:38 PM] Rafi: Please do not share that with chanis cause stuff keeps going missing
[2023-07-31, 5:29:54 PM] ~ Gavriella TroperHochstein: I can do it
[2023-07-31, 5:40:17 PM] ~ Sarah: tzofimot, i will be at the chof right now whenever ur ready. for real this time😁
[2023-07-31, 6:00:20 PM] ~ Maisie: If anyone knows where Rosa is, can you get her to meet me at the picnic benches?
[2023-07-31, 6:00:50 PM] ~ Maisie: She was sent with some stuff for me.
[2023-07-31, 6:12:19 PM] ~ Talia Joffe: July 31st tzevet asepha
Refresher on mirp: pre-screen your kids! Ask what’s up with them. Have they drank water??? Make them drink water! Try to wait till clinic hours to bring them. Know WHY they want to go to the mirp and use your judgment about bringing them. Always go with your kids to the mirp. Remind your kids and yourself to take meds and drink water! Don’t leave your kids at the mirp unless the medics tell you you’re good
Mira has started an myad wish list for supplies! It’s in the myad above the sign out sheet! If you’ve finished something or want something, write it down and put it in the wish list bag so mira can get it!!! (Not including supplies for pish or tochnit erev, you have to get those yourself)
If you have little/new kids, explain to them what shmira is!!
Sadie is around to help you prep/run your peulot!!! Use her as a resource
Let riff raff put your kids to bed!! We miss them!!
Stop banging utensils in the chadar! Shit breaks and it’s expensive
Don’t go into the walk in!! There are problems with the fridge and we need to keep it cold! Unless the mitbach has given you explicit permission, don’t go in!
If you have a kid who is sick/crying in a corner/not where we think they should be, you need to let the people that are supposed to be with them know. This goes especially for things where kvutzot are split up!
Keep track of the nice laminated anaf signs. Make sure they get returned where they need to go
Keep the machzan clean and organized please! And don’t take things that are not explicitly for you!! Also check the machzan before ordering things, there might be things in there that you can take and don’t have to order
Tiyul is in 8 days!!! We’re doing things NOT last minute, plan shit for your kids!! Don’t just make it chill time the whole time, do fun things and activities with them! Make them excited about the outdoors! The tiyul specialist will ask you about your activities in your tiyul briefing! Be prepared
Be aware of your noise levels at night!!! Kids are in bed, be respectful!
You’re killing it, great job!! - Ezra
If you need help with ivrit, let gal know!! She’ll be in the techni office and is happy to help!
The Melavot are not your first line of defence for upset kids. It’s the madrichols job to check in with your kids and make sure they are ok. We should not be accounting for every sad kid. Tzevet should support and be there for them! Supporti if sad kids is an incredible way to bond with your children! If it’s really intense we are there to help, but tzevet should be there first. If you want to talk through how to support sad kids with us for a refresher, please do!! We’d be happy to talk with you about strategies.
We’re blowing through kupa a little too fast. Consider the difference between need vs want and also just use discretion. Try to slow down with how much you order at a time. Also, nicotine is expensive and is eating up a lot of our kupa. India has proposals to mitigate this: 1) buying loose Tobacco and rolling our own 2) buying 1-2 reusable vapes and getting pods to share between us. Let them know what you think! If you have questions, feel free to talk to India about it
We can order some food and drinks through Sysco! Write on the order form to order through the mitbach and Ariella can facilitate that
There have been fuck ups with substances being in places that they CANT be around machaneh and also feshed people being in places that they CANT be around machaneh. That is incredibly not ok and simply can’t happen. We need to all take responsibility in making sure that things annd people are hidden and not anywhere where kids are. Substances are a privilege that can be taken away if these fuck ups keep happening
[2023-07-31, 6:19:11 PM] Gali Goldman: Vaad Tarbut!! Make yourselves known I’m trying to make a group chat and we’re meeting at dinner⭐️
[2023-07-31, 6:37:12 PM] ~ Ariella Smith-Eidelman: Hi just a small hodaa - it is really hard for us to get ramen because most of it is may contain nuts which we do not eat on camp property so there is no guarantees for ramen, please also pass this message along to the madatz!!
[2023-07-31, 6:37:22 PM] Elsbeth: Me
[2023-07-31, 6:54:12 PM] ~ Ira Spiegelman: Me
[2023-07-31, 6:54:23 PM] ~ Tal Fisher-Taylor: Also may contain seafood which multiple people are anaphylactic to
[2023-07-31, 6:55:22 PM] Dan: This might not be considered ramen but Knorr makes some allergy friendly rice noodle cups that are completely fine and easy to find at most grocery stores.
[2023-07-31, 6:55:35 PM] Dan: No nuts no seafood no allergens
[2023-07-31, 8:57:36 PM] ~ Maisie: One of the major downsides of the kids being back is that you have to check before you sit on any toilet because there’s a 70% chance that a channie didn’t aim and pissed all over the seat.
[2023-07-31, 9:00:21 PM] ~ Eli: Are ppl that have chofesh tmrw meet at dinner to discuss?
[2023-07-31, 9:08:38 PM] ~ Gal Icek: The chofesh starts tomorrow at 6:30
[2023-07-31, 9:08:53 PM] ~ Gal Icek: And it starts with a meeting in the misrad rosh
[2023-07-31, 9:09:14 PM] Tyler: Could u pretty plz send a pic of the fesh calendar
[2023-07-31, 9:09:30 PM] ~ Gavriella TroperHochstein: The calendar is actually in the tzevet folder!
[2023-07-31, 9:09:35 PM] ~ Eli: Oh thank u
[2023-07-31, 9:09:59 PM] ~ Gal Icek: https://docs.google.com/document/d/1O15WCvznsVZYoS8EDEwn4lpzhW9xrTglBpJ2IWBsbtU/edit?usp=drivesdk
[2023-07-31, 10:59:05 PM] Rafi: If u haven’t found yours u could check here
[2023-07-31, 11:09:08 PM] Rafi: image omitted
[2023-08-01, 12:03:55 AM] ~ Monty: Anyone who doesn’t have kids amelimot may need some help for bedtime
[2023-08-01, 12:03:56 AM] ~ Monty: If anyone would like to come HAAAAAANG
[2023-08-01, 12:03:57 AM] ~ Monty: would appreciate the help
[2023-08-01, 12:04:12 AM] Mira: I can!
[2023-08-01, 12:04:28 AM] Mira: When is their bedtime?
[2023-08-01, 12:08:55 AM] Dan: Like now!
[2023-08-01, 12:09:01 AM] Dan: Just brushing teeth 🪥
[2023-08-01, 12:09:06 AM] Mira: Coming!
[2023-08-01, 12:28:01 AM] Rue: @15036199003 and @17785352161 you’re madrichol toran and gaga put toran respectively tmr
[2023-08-01, 12:29:01 AM] ~ Noa Franklin: Can anyone help w Dan and alias’s side of the pee tzrif?
[2023-08-01, 12:29:03 AM] ~ Noa Franklin: Pretty please
[2023-08-01, 12:29:32 AM] ~ Noa Franklin: For bedtime
[2023-08-01, 12:41:00 AM] Dan: Ok. :)
[2023-08-01, 12:42:44 AM] ~ Sadie Quinn: Do you still need help?
[2023-08-01, 12:42:58 AM] Dan: Nope :)
[2023-08-01, 12:43:06 AM] Dan: Lyrie is here
[2023-08-01, 12:58:08 AM] ~ Tal Fisher-Taylor: image omitted
[2023-08-01, 12:58:39 AM] ~ Ira Spiegelman: Quality meming
[2023-08-01, 1:05:35 AM] Ezra: image omitted
[2023-08-01, 1:09:54 AM] ~ Jane: image omitted
[2023-08-01, 1:17:43 AM] ~ Prielle Laniado: cyst is cysting
[2023-08-01, 1:45:09 AM] ~ Maisie: Apparently Rosa gave some stuff she was supposed to give me to “a tall guy with curly hair” whoever it is, do you mind bringing it to the mo?
[2023-08-01, 1:53:09 AM] ~ karly: image omitted
[2023-08-01, 2:32:56 AM] ~ Tal Fisher-Taylor: Did someone lose two American five dollar bills
[2023-08-01, 2:33:21 AM] ~ Gavriella TroperHochstein: it was Zevi! I think
[2023-08-01, 2:33:40 AM] ~ Gavriella TroperHochstein: @15038408297
[2023-08-01, 2:38:15 AM] ~ Zevi: No but I’ll take it 😍
[2023-08-01, 2:42:20 AM] Dan: Yes I did
[2023-08-01, 2:42:22 AM] Dan: Omg
[2023-08-01, 2:42:31 AM] Dan: That was kuppah I was supposed to give to Ariella
[2023-08-01, 2:42:37 AM] Dan: Where did you find it?
[2023-08-01, 2:43:35 AM] ~ Maisie: Well, whoever it is, those are my birthday gifts.
[2023-08-01, 2:43:42 AM] Dan: No!
[2023-08-01, 2:43:50 AM] Dan: 😡😡😡
[2023-08-01, 2:43:54 AM] Dan: 🤬🤬
[2023-08-01, 2:44:15 AM] ~ Maisie: What…?
[2023-08-01, 2:44:32 AM] ~ Maisie: Dan what’s crawled up your ass?
[2023-08-01, 2:45:32 AM] Dan: Sarcasm lol
[2023-08-01, 2:45:55 AM] ~ Maisie: Okay…?
[2023-08-01, 2:46:24 AM] ~ Zevi: Cake in mitbach for Auggie’s bday!
[2023-08-01, 2:46:37 AM] ~ Lila: cominggggg
[2023-08-01, 2:49:30 AM] ~ agustina: image omitted
[2023-08-01, 2:50:06 AM] ~ Lila: image omitted
[2023-08-01, 2:50:59 AM] ~ Maisie: image omitted
[2023-08-01, 2:51:34 AM] ~ Monty: video omitted
[2023-08-01, 2:52:26 AM] ~ Maisie: image omitted
[2023-08-01, 3:33:31 AM] ~ mai: Zac said my meme wasn’t funny
[2023-08-01, 3:33:35 AM] ~ mai: #hated
[2023-08-01, 12:52:32 PM] ~ Jane: image omitted
[2023-08-01, 1:45:50 PM] Rafi: @16046710426 @16048625227 (blue) @17787937381 @16047257054 (green) @12369970051 @nadav (yellow) @17789518206 @16047882125 (red) @16049701816 @972504796600 (white) @17785352161 @12369970056 (black)
[2023-08-01, 1:46:16 PM] Rafi: Here are group leaders for Gaga tournament zman sport
[2023-08-01, 1:46:24 PM] Rafi: If u aren’t on a group add yourself to one
[2023-08-01, 1:46:47 PM] Rafi: And change into your colors at some point before zman sport and then at the beginning of zman sport get your kid lists
[2023-08-01, 3:07:08 PM] ~ Gavriella TroperHochstein: is lowers useable? The chains are up
[2023-08-01, 3:07:15 PM] ~ Ariella Smith-Eidelman: yes
[2023-08-01, 3:07:19 PM] ~ Ariella Smith-Eidelman: it was just from avodah
[2023-08-01, 3:52:53 PM] Rue: image omitted
[2023-08-01, 4:06:13 PM] Ezra: https://chat.whatsapp.com/LR03gL7IEe61jAz2u4bOKX
[2023-08-01, 4:06:20 PM] Ezra: for those that are not in it
[2023-08-01, 4:09:44 PM] ~ Tal Fisher-Taylor: video omitted
[2023-08-01, 5:12:38 PM] ~ Solomon Bodrug: image omitted
[2023-08-01, 5:42:22 PM] ~ Maisie: Hey, while you guys are all there, lemme make a quick Hoda’a.
[2023-08-01, 5:43:23 PM] ~ Maisie: if you’re the “tall man with curly hair” that my little sister Rosa gave all my birthday gifts to, please give them to me, it would be greatly appreciated.
[2023-08-01, 5:43:53 PM] ~ Maisie: Please pass this message around the mirpeset
[2023-08-01, 5:44:31 PM] ~ Noga Goldman: Will do
[2023-08-01, 6:02:18 PM] ~ Talia Joffe: August 1st tzevet asepha
We’re moving to online order forms!! There’s a link to the order form in the tzevet group chat. It’s 1 item per submission. You have any questions, ask Ariella
Ezra and Noga say great job!
Don’t come early to the asepha until we’ve zman chofshi-d. stay in the chadar until lunch is over
When someone is putting up a shin, all of tzevet should do the same to shush kids
If you are the tall man with curly hair, give Maisie her birthday gifts
Don’t let kids mess with frozen tables, it’s becoming mean
There always needs to be a tzevet member at a table with kids during meals
Our wells are now dry, which means we are buying water. We are back to being super careful about water conservation
Trump just got indicted and is facing criminal charges yayyyy
When the toranut announcement comes on, make sure everyone shuts up and listens so kids can hear who’s on toranut and go to toranut
We’re showering tomorrow with our kids. It’s time to have the shower talk with your kids today
There is a vape graveyard in the cupboard above the sink in the mo. Recycle your dead vapes in the cupboard so they can be properly disposed of
Put in your kupa numbers!!!!
[2023-08-01, 6:05:35 PM] Mira: Mine! My dad sent me my middle school glasses because he thought I forgot them
[2023-08-01, 6:09:08 PM] ~ Mikal Stein: This message was deleted.
[2023-08-01, 6:09:50 PM] Alias: Couldn’t handle the rocket dog style
[2023-08-01, 6:13:01 PM] ~ Zevi: It’s in dry storage on the rack on the left!
[2023-08-01, 6:13:21 PM] ~ Maisie: Thank you!
[2023-08-01, 6:14:27 PM] ~ Zachary Bunim: if there are any kids that go by a different name than their forms say PLEASE TEXT ME PRIVATELY so i can change them for mishpachot lists
[2023-08-01, 6:16:54 PM] Dan: W Dad frlz
[2023-08-01, 6:17:26 PM] ~ Joanna: @17789521343 @16043601876 @17788740266 @17788740266 @17788706904 @16042504541 @16043651302 @15038408297 @16047167869 @veronica @sorry if I missed you! #youknowwhoyouare meet at upstairs of mirp at 11/11:30pm for #somethingspecial
[2023-08-01, 6:49:43 PM] Dan: Because I am off tn can someone help the guys side of the amelimot cabin?
[2023-08-01, 6:50:22 PM] ~ Maayan: @17786894559 u need to be at the Janusz rn
[2023-08-01, 6:56:45 PM] Dan: Is there showers tmrw?
[2023-08-01, 6:59:24 PM] ~ Ariella Smith-Eidelman: Yes
[2023-08-01, 7:50:35 PM] Yvonne: Is there a kvutza using the pool during ivrit tmr?
[2023-08-01, 8:14:00 PM] Mira: Is chuggim meeting at the janusz or our spaces?
[2023-08-01, 8:14:12 PM] ~ Ariella Smith-Eidelman: Janusz
[2023-08-01, 8:28:34 PM] Tyler: Where is myad meeting?
[2023-08-01, 8:39:39 PM] ~ Noa Franklin: Can someone in chalutzimot tzevet come to the shmo pls?
[2023-08-01, 9:00:31 PM] ~ Gavriella TroperHochstein: Please send your chanichimot to toranut
[2023-08-01, 9:00:49 PM] ~ Gavriella TroperHochstein: just ask your chug if anyone’s on toranut
[2023-08-01, 9:03:31 PM] ~ Oliver: I’m gonna be at tochni erev would I still be able to make it?
[2023-08-01, 9:03:51 PM] ~ Oliver: Or will they go to bed before it’s fully wrapped up
[2023-08-01, 9:04:31 PM] ~ Gavriella TroperHochstein: Their bedtime is right after rad hayom
[2023-08-01, 9:05:03 PM] ~ Gavriella TroperHochstein: so you can definitely do both
[2023-08-01, 9:06:13 PM] ~ Oliver: Ok I’ll do it!
[2023-08-01, 9:06:55 PM] ~ Eli: I have toranut tmr but my chofesh is starting this evening can someone cover for me?
[2023-08-01, 9:14:33 PM] ~ Monty: HELLO those who were talked to by vaad hatzagah today come to techniiiiii👹👹👹👹🫨🫨🫨🫨
[2023-08-01, 9:14:44 PM] ~ Monty: 👹
[2023-08-01, 9:33:57 PM] ~ Sarah: yes chalutzimot
[2023-08-01, 9:37:00 PM] ~ Maisie: image omitted
[2023-08-01, 9:41:12 PM] Rue: https://docs.google.com/forms/d/e/1FAIpQLSe7FkMPnwZipoqDw-Fe0M1xU60eLoDFekK6BN_57FCulTi1Sg/viewform
[2023-08-01, 9:43:19 PM] ~ Joanna: So beautiful!!!! ❤️❤️❤️
[2023-08-01, 10:10:59 PM] ~ mai: GO CHANGE CHANGE INTO YOUR MEERKAT CLOTHES 🐒🙀🐕
[2023-08-01, 10:19:25 PM] ~ Zachary Bunim: which family is which colour?
[2023-08-01, 10:22:33 PM] ~ Oliver: Whiskers brown
[2023-08-01, 10:24:30 PM] ~ Zevi: Sports shed password?
[2023-08-01, 10:24:35 PM] Dan: 124
[2023-08-01, 10:35:27 PM] ~ mai: If you haven’t taken a seder yom come now!!!
[2023-08-02, 12:42:14 AM] ~ Joanna: Kvutz 69!! Upstairs of mirp around 11/11:30! Mostly when maz is done! SEE YOU ALL THERE!
[2023-08-02, 12:42:32 AM] ~ Joanna: image omitted
[2023-08-02, 1:00:05 AM] ~ Ariella Smith-Eidelman: There is an order on the floor of the techni please don't touch it I will unpack it tmrw morning!!! If you need something urgently text me please pass this along to the madatz
[2023-08-02, 1:41:19 AM] Edden: message for people on fesh tomorrow night: my kids are having an epaep tomorrow and we’re taking them to the slab. so please go to the platform instead (at least in the earlier portion of the night)
[2023-08-02, 1:42:19 AM] Tyler: Cant wait to fesh at slab !!
[2023-08-02, 1:47:43 AM] ~ Mikal Stein: image omitted
[2023-08-02, 1:48:16 AM] Ezra: What is that
[2023-08-02, 1:56:10 AM] ~ Mica: Blue jizz
[2023-08-02, 1:56:15 AM] ~ Gavriella TroperHochstein: looks like toilet cleaner?
[2023-08-02, 1:56:24 AM] ~ Mica: No it’s blue jizz
[2023-08-02, 1:56:43 AM] ~ Gavriella TroperHochstein: of course silly me
[2023-08-02, 1:57:23 AM] ~ Joanna: Smurf’s at it again!!
[2023-08-02, 1:57:26 AM] ~ Gavriella TroperHochstein: I’m watching Dune in the misrad rosh if anyone wants to join me
[2023-08-02, 1:58:05 AM] ~ blue: yup it’s my jizz
[2023-08-02, 2:05:46 AM] ~ Joanna: 69!! Head to Merp in 7 min!!!
[2023-08-02, 2:12:54 AM] ~ Shani Avrahami Saraf: image omitted
[2023-08-02, 2:13:45 AM] ~ Mica: Just to put on everyone’s radar for tomorrow night: madatz really need your help with Josh tomorrow night! They have done so much work for special days this year so show them how grateful you are for that by helping them in return! If that means not staying up crazy late tonight please keep that in mind ❤️
[2023-08-02, 2:14:08 AM] ~ Mica: Josh means KISH
[2023-08-02, 2:14:17 AM] ~ Gal Icek: image omitted
[2023-08-02, 2:14:48 AM] ~ Gavriella TroperHochstein: Happy birthday Gal!!!
[2023-08-02, 2:16:44 AM] ~ Gal Icek: Thanks 🥰
[2023-08-02, 2:17:57 AM] ~ Lila: yeah the chalutzimot
[2023-08-02, 2:24:09 AM] ~ Alex (shmeppy): video omitted
[2023-08-02, 2:33:02 AM] Dan: Fuckkkkkk
[2023-08-02, 2:33:05 AM] Dan: Also
[2023-08-02, 2:33:08 AM] Dan: Can we get an usher
[2023-08-02, 2:33:11 AM] Dan: At lower kvish
[2023-08-02, 2:44:42 AM] Zev: What time do you wake up for gaga pit toran
[2023-08-02, 2:45:14 AM] Dan: 6AM!!;
[2023-08-02, 2:45:16 AM] Dan: Yayayayay
[2023-08-02, 2:45:19 AM] Dan: Have fun!
[2023-08-02, 2:45:24 AM] Dan: It's tiring!
[2023-08-02, 2:46:22 AM] ~ Monty: Yay!
[2023-08-02, 2:48:41 AM] ~ Monty: Hey guys! Would anyone be willing to switch out their shmira blocks with maayan and I’s block tomorrow night? Someone on my tzevet will be on nofesh and maayan won’t be able to sleep in cause of YM we would super appreciate it🙏🏻🙏🏻
[2023-08-02, 2:50:42 AM] Edden: does anyone on rif raf want to scare my kids tomorrow night during an epaep?
[2023-08-02, 2:55:05 AM] ~ Prielle Laniado: hello! i’m on gaga pit toran this saturday, and i’m wondering if anyone would like to switch 🥰🥰 text me
[2023-08-02, 3:06:40 AM] Omer: image omitted
[2023-08-02, 10:42:40 AM] ~ Maisie: Why are smurfs bopping like bunnies in uppers?
[2023-08-02, 10:43:24 AM] ~ Maisie: image omitted
[2023-08-02, 11:18:27 AM] Dan: Of course I'd be happy to help!!!
[2023-08-02, 12:31:13 PM] ~ Gavriella TroperHochstein: Hi tzevet! The madatz will NOT be in your peulot this morning. They are working on “other things” (hmm suspicious)
[2023-08-02, 1:30:18 PM] Rafi: image omitted
[2023-08-02, 1:45:39 PM] ~ Prielle Laniado: image omitted
[2023-08-02, 1:48:05 PM] Rafi: image omitted
[2023-08-02, 2:54:47 PM] ~ Mica: Does anyone have gum that they can deliver to the misrad Rosh?
[2023-08-02, 2:55:10 PM] ~ Mica: I’m desperate
[2023-08-02, 2:56:08 PM] ~ Mica: Ariellas a hero
[2023-08-02, 3:51:53 PM] ~ karly: video omitted
[2023-08-02, 3:52:36 PM] ~ Zachary Bunim: is there anyone that can shower with the bonimot boys after lunch?
[2023-08-02, 3:53:14 PM] ~ Maisie: image omitted
[2023-08-02, 3:56:07 PM] ~ Nadav: Toranut?
[2023-08-02, 3:56:13 PM] ~ Ira Spiegelman: Toranut list?
[2023-08-02, 4:04:32 PM] ~ agustina: whos running gender neautral showers
[2023-08-02, 4:04:40 PM] Mira: I can
[2023-08-02, 4:15:16 PM] ~ Maisie: image omitted
[2023-08-02, 5:38:07 PM] ~ Shani Avrahami Saraf: @bonimot tzevet kat is showering in the mirp
[2023-08-02, 5:40:13 PM] Gali Goldman: India and Sadie you have mail in the bayit!
[2023-08-02, 5:42:25 PM] Gali Goldman: Also! There are a bunch of madatz packages in the bayit can someone come collect please😁
[2023-08-02, 5:56:04 PM] ~ Talia Joffe: August 2nd tzevet asepha
 tomorrow in yo momma!! Help the datz with kish tonight!!!
Please charge speakers in the techni office when you’re done using them!! People need them
We need 1 person to help with Amelimot bedtime! Talk to Alias
Things with paint on it cannot be michzur-ed. Consider the things you put in the michzur, kids see it
The health inspector is coming tomorrow! We REALLY need things to be kept clean, especially washrooms and the mitbach. If you don’t have to be in the mitbach, don’t go in tomorrow. The sevvy might be closed tonight, if it’s not, keep it insanely clean
Remind kids to be respectful and careful while entering the chadar
Enforcing a “eat eat go go!” Atmosphere isn’t constructive and can be super stressful for kids. Just be mindful that food can be hard for kids and be respectful about that
If you’re at a table and see a kids refusing to eat, let their tzevet know so they can keep track of it
Bring Ezra the avodah signs!! If you lost yours, make a new one
You need to make sure your kids are doing their anaf jobs! Check up on the kids and make sure it’s happening
[2023-08-02, 5:57:24 PM] ~ Ariella Smith-Eidelman: For chuggim we are meeting in the janusz again for the last time with final kid lists!!
[2023-08-02, 5:58:51 PM] Gali Goldman: If Amelimot still need help with bedtime I’m available!
[2023-08-02, 6:00:24 PM] Dan: Ayyo whoever just showered in lowers stole almost all of my axe body wash and left it almost empty
[2023-08-02, 6:00:26 PM] Dan: Not cool
[2023-08-02, 6:00:30 PM] Dan: It was full
[2023-08-02, 6:00:40 PM] Dan: Same with the shampoo
[2023-08-02, 6:10:02 PM] ~ Gal Icek: Thanks!
[2023-08-02, 6:22:46 PM] Rue: Shomrimot and chalutzimot kesher meetings will be in the misrad rosh
[2023-08-02, 6:23:06 PM] ~ Prielle Laniado: This message was deleted.
[2023-08-02, 6:35:50 PM] ~ Zachary Bunim: for ivrit today the bonimot will go to the locations that are set for today and will be running their own activities and all you need to do is supervise. we will see how it goes today and please let me know if you have feedback for them thanks!
[2023-08-02, 7:11:24 PM] Rafi: image omitted
[2023-08-02, 7:13:39 PM] ~ Gal Icek: image omitted
[2023-08-02, 7:16:55 PM] Ron: Mood
[2023-08-02, 8:27:49 PM] Dan: image omitted
[2023-08-02, 9:17:45 PM] Alias: image omitted
[2023-08-02, 9:21:30 PM] Tyler: Rq stop leaving tea bags in ur cups it’s not hard to walk to garbage. ALSO leaving hot chocolate powder in ur cup is not cool. Leaving hot chocolate powder on ur spoon is more not cool. Luv y’a
[2023-08-02, 9:45:10 PM] ~ Solomon Bodrug: ☝️🙏
[2023-08-02, 9:50:58 PM] ~ Ana: Does anybody wanna be Nina Simone?
[2023-08-02, 9:51:01 PM] ~ Ana: Text me if so
[2023-08-02, 9:51:05 PM] ~ Ana: Todah
[2023-08-02, 9:53:17 PM] ~ Ana: Ok someone already took out ignore this message
[2023-08-02, 9:53:58 PM] Tyler: Omg luv her
[2023-08-02, 10:10:12 PM] Mira: If kids need gender neutral shower somebody else has to run it, I’m off
[2023-08-02, 10:16:49 PM] India: come to techni to get tings for tochnit erev!!!!
[2023-08-02, 10:20:44 PM] Dan: Yo ppls I need a speaker for da coolest tochnit TN hml like ASAP yaayay
[2023-08-02, 10:25:23 PM] ~ Ana: hi Seder yoms are available
[2023-08-02, 10:32:43 PM] India: audio omitted
[2023-08-02, 10:33:26 PM] ~ Ana: Hatzagot printed
[2023-08-02, 10:55:06 PM] Dan: I'm so confused
[2023-08-02, 10:55:18 PM] Dan: Is music sampling at mym or pish bowl
[2023-08-02, 10:55:22 PM] Dan: I've been told both
[2023-08-02, 10:55:26 PM] Dan: I'm at the mym
[2023-08-02, 10:57:55 PM] ~ Ana: Mym
[2023-08-02, 10:58:05 PM] ~ Ana: And meet at janush
[2023-08-02, 11:01:47 PM] ~ Zevi: Does someone have a belt I could borrow
[2023-08-02, 11:10:59 PM] ~ Oliver: Hi in the future @16043601876 if you could scedual the showers for after I have to poop tha would be great
[2023-08-02, 11:11:26 PM] Tyler: Poop in shower!
[2023-08-02, 11:11:39 PM] Tyler: Stomp down drain!
[2023-08-02, 11:17:32 PM] ~ hannah: 🍅
[2023-08-02, 11:35:50 PM] ~ Mica: Can someone from the vaad help with rotations
[2023-08-02, 11:35:52 PM] ~ Mica: There is a lot of confusion
[2023-08-02, 11:36:56 PM] ~ Gavriella TroperHochstein: if someone sends me locations I can call them if that would help
[2023-08-02, 11:37:14 PM] ~ Mica: The locations changed
[2023-08-02, 11:37:32 PM] ~ Mica: So people now don’t know where to go
[2023-08-02, 11:43:26 PM] ~ Gavriella TroperHochstein: hi tochnit erev, I have the locations, just tell me when to call them!
[2023-08-03, 12:11:22 AM] Edden: a reminder to feshers: DO NOT BE AT THE SLAB TONIGHT
[2023-08-03, 1:23:31 AM] ~ Gavriella TroperHochstein: when you’re done with bedtime/asefa laila please PLEASE come help the madatz in the myad, even if it’s just for a few minutes!! It will mean the world to them and make them feel so much better about tomorrow!
[2023-08-03, 1:28:12 AM] ~ Eli: image omitted
[2023-08-03, 1:30:53 AM] ~ Eli: image omitted
[2023-08-03, 1:35:00 AM] Dan: ME WHEN THE MEME IS STRAIGHT FACTZ
[2023-08-03, 1:46:02 AM] ~ Mica: Can kids coming back from epaep please be quite, younger kids are trying to sleepy
[2023-08-03, 1:48:36 AM] Mira: Can me and Shai get an escort to the Mo? I’m worried about walking past madatz
[2023-08-03, 1:49:48 AM] ~ Zevi: Yes
[2023-08-03, 1:50:10 AM] ~ Zevi: Where are you?
[2023-08-03, 1:50:31 AM] ~ Jane: what time did madrichol toran wake up yesterday
[2023-08-03, 1:50:46 AM] Mira: Close to camp, be there soon
[2023-08-03, 1:50:54 AM] ~ Zevi: K
[2023-08-03, 1:51:55 AM] Mira: Here
[2023-08-03, 2:18:57 AM] ~ Zachary Bunim: can we get an escort?
[2023-08-03, 2:23:29 AM] ~ Oliver: Wya
[2023-08-03, 2:23:38 AM] ~ Zachary Bunim: we’re good now
[2023-08-03, 2:23:43 AM] ~ Zachary Bunim: thanks tho
[2023-08-03, 2:25:33 AM] Dan: 6am!
[2023-08-03, 2:27:29 AM] ~ Jane: You’re Joe King
[2023-08-03, 2:27:43 AM] Dan: Nope!
[2023-08-03, 2:27:52 AM] Dan: Good lucccckkkk
[2023-08-03, 2:37:23 AM] ~ Mica: More tzevet help please! There are at least a hundred tzevet member this session by my count so we should have more than 5 helping ❤️
[2023-08-03, 2:37:32 AM] ~ Mica: Shout out to the tzevet members already helping
[2023-08-03, 2:48:04 AM] ~ Maisie: image omitted
[2023-08-03, 2:50:31 AM] ~ Gavriella TroperHochstein: We need at least 4 tzevet to help carry mattresses! If you are not doing bedtime or in a meeting please come find Ella in the binyan and she will direct you
[2023-08-03, 2:55:48 AM] ~ Maisie: image omitted
[2023-08-03, 3:14:33 AM] ~ Zevi: More tzevet helpers please!
[2023-08-03, 3:16:58 AM] India: comin soon!
[2023-08-03, 3:17:47 AM] ~ Gavriella TroperHochstein: please keep in mind the madatz CARRIED Yom meuchad last session and work their butts off for us all and tomorrow will be a day off for you! Help them make YOUR day off possible!
[2023-08-03, 3:30:43 AM] Tyler: Could someone pretty please come grab me
From chofnof to go pee
In mo
[2023-08-03, 3:31:11 AM] Tyler: Or is the scary bathroom in chof nic working now?
[2023-08-03, 3:36:08 AM] Tyler: Update found pee buddies
[2023-08-03, 4:48:18 AM] India: lola from madatz needs black sunglasses!! if u have it would be so swag if u could let her borrow em
[2023-08-03, 4:48:35 AM] India: find her in the morning :)
[2023-08-03, 11:31:24 AM] ~ Gavriella TroperHochstein: if anyone has yellow or khaki pants Siena can borrow, that would be amazing
[2023-08-03, 11:49:17 AM] ~ maya: image omitted
[2023-08-03, 12:28:50 PM] Dan: Yo where we meeting and at what time
[2023-08-03, 12:28:55 PM] Gali Goldman: Meet in the mo!
[2023-08-03, 12:29:01 PM] Gali Goldman: Get your stuff and go there
[2023-08-03, 12:29:06 PM] Gali Goldman: DO NOT GRT FOOD FIRST
[2023-08-03, 12:33:35 PM] ~ Monty: Should we pack first
[2023-08-03, 12:34:20 PM] Gali Goldman: Yes
[2023-08-03, 12:43:01 PM] ~ agustina: so unchill
[2023-08-03, 12:53:35 PM] Edden: if anyone finds a pink one piece bathing suit, please give it to me
[2023-08-03, 12:53:52 PM] ~ Avishai Jacobson: Lowkey valid tho
[2023-08-03, 1:18:16 PM] Gali Goldman: If you don’t come to the mo rn you will miss the bus
[2023-08-03, 2:03:30 PM] ~ Joanna: image omitted
[2023-08-03, 2:04:53 PM] ~ Mica: You have to go
[2023-08-03, 2:40:14 PM] Gali Goldman: We have a green bag in the car
[2023-08-03, 3:18:57 PM] ~ Monty: video omitted
[2023-08-03, 7:48:15 PM] Gali Goldman: Can we bring someone computer to the community centre????
[2023-08-03, 7:48:34 PM] Gali Goldman: Anyone!!
[2023-08-03, 9:51:59 PM] Alias: Any one have a pair of headphones I can borrow for the night. I’ll give you a ebic high five
[2023-08-03, 9:59:21 PM] Yvonne: I have my computer here
[2023-08-03, 10:00:18 PM] ~ Maisie: image omitted
[2023-08-03, 10:03:08 PM] ~ Maisie: image omitted
[2023-08-03, 10:04:02 PM] ~ Maisie: image omitted
[2023-08-03, 10:05:41 PM] ~ Maisie: image omitted
[2023-08-03, 10:05:55 PM] ~ Maisie: image omitted
[2023-08-03, 10:06:50 PM] ~ Maisie: image omitted
[2023-08-03, 10:17:18 PM] ~ Monty: image omitted
[2023-08-03, 11:05:18 PM] Alias: image omitted
[2023-08-03, 11:05:19 PM] Alias: image omitted
[2023-08-04, 12:13:55 AM] ~ Prielle Laniado: it would be REALLY helpful if people could help unload the car! it’s by the AD gordon
[2023-08-04, 12:17:33 AM] ~ Maisie: image omitted
[2023-08-04, 12:17:45 AM] ~ Maisie: image omitted
[2023-08-04, 12:17:55 AM] ~ Maisie: image omitted
[2023-08-04, 12:18:01 AM] ~ Maisie: image omitted
[2023-08-04, 12:25:33 AM] ~ Oliver: _*AMELIMOT AND CHALUTZIMOT TZEVET*_:your tiyul briefing will be _*tomorrow, as in friday*_ this will happen *during lunch*. be sure to get food early and come to the *grofit* _as soon as possible_. we dont have a ton of time and thertes a lot to go over, so dont be late please. *_this meeting is a MUST ATTEND for amchatz tzevet and the rif raf on their tiyul alike_*
[2023-08-04, 12:30:40 AM] ~ oli: ayelet cake done!!
[2023-08-04, 12:31:18 AM] ~ oli: whoever her tzevet is can you please figure out a way to serve it! preferably not in the mitbach we’ve had a very busy day and really need it not to be a huge mess!!
[2023-08-04, 12:31:39 AM] ~ oli: i am closing early today so i can fesh like the bad boy i am
[2023-08-04, 12:32:33 AM] ~ oli: and again: bad day in the bach this is a fantastic night to do a really good job cleaning up after yourself please and thank you! i want to be able to enjoy my evening like y’all were able to enjoy your day <33333
[2023-08-04, 12:32:55 AM] ~ Ariella Smith-Eidelman: Who is doing tzevet dishes from dinner ?
[2023-08-04, 12:33:51 AM] ~ Gavriella TroperHochstein: We’ll come grab it after rad hayom, it’s madatz so we might be a minute but we’ll try to hurry
[2023-08-04, 12:34:34 AM] ~ oli: cake is on bottom left shelf of freezer!
[2023-08-04, 12:45:18 AM] ~ Jane: heyy sayarimot would love some help with bedtime
[2023-08-04, 12:45:54 AM] Gali Goldman: i can come help
[2023-08-04, 12:45:57 AM] Gali Goldman: what tzrif?
[2023-08-04, 12:49:40 AM] ~ Talya Stein: Yo feshers wya
[2023-08-04, 12:49:55 AM] ~ Talya Stein: Mitbach wants to join if y’all are game!
[2023-08-04, 12:51:58 AM] ~ Prielle Laniado: silhouette
[2023-08-04, 12:51:59 AM] ~ Prielle Laniado: !
[2023-08-04, 12:54:07 AM] ~ Ira Spiegelman: Come to platform!
[2023-08-04, 12:54:42 AM] ~ Ira Spiegelman: Except we’re going to surf right now sike
[2023-08-04, 1:17:06 AM] Dan: Where do I go for Shmira
[2023-08-04, 1:17:08 AM] Dan: To stat
[2023-08-04, 1:18:24 AM] Dan: Nvm @16042305933 can u come Mirp ASAP
[2023-08-04, 1:20:40 AM] ~ Ira Spiegelman: Where is the guitar that was brought for yom madatz
[2023-08-04, 1:20:44 AM] ~ Ira Spiegelman: It is needed
[2023-08-04, 1:21:09 AM] Dan: I really need someone to sleep in pea trizf guys side tn
[2023-08-04, 1:21:12 AM] Dan: I'm doing Shmira
[2023-08-04, 1:29:14 AM] ~ Tal Fisher-Taylor: Where are you
[2023-08-04, 1:41:48 AM] ~ Solomon Bodrug: platform
[2023-08-04, 1:41:57 AM] ~ Solomon Bodrug: we got guitar
[2023-08-04, 1:42:23 AM] ~ Tal Fisher-Taylor: Oh I really thought it was for bedtime
[2023-08-04, 2:12:36 AM] ~ karly: Does anyone want to come walk me back to camp from the platform?:)
[2023-08-04, 2:12:53 AM] Dan: Yeah!
[2023-08-04, 2:12:58 AM] Dan: Sure
[2023-08-04, 2:13:04 AM] Dan: Coming
[2023-08-04, 2:13:15 AM] Dan: Wait
[2023-08-04, 2:13:35 AM] Dan: Rafis going instead
[2023-08-04, 2:13:50 AM] Rafi: Are u still all the way at the paltoflrm
[2023-08-04, 2:13:55 AM] ~ karly: Yes
[2023-08-04, 2:13:55 AM] Rafi: Platform?
[2023-08-04, 2:14:11 AM] Rafi: Do u want me to come all the way there
[2023-08-04, 2:23:00 AM] ~ Avishai Jacobson: I’m on dayfesh tomorrow but I’m scheduled for lunch toranut can someone switch me
[2023-08-04, 2:23:04 AM] ~ Avishai Jacobson: Please
[2023-08-04, 2:58:51 AM] ~ Zevi: Just letting people know that the madatz should be sleeping in their shetach tonight so if they’re in your tzrif ohel kick em out and send them to the madatz ohel
[2023-08-04, 3:00:43 AM] ~ Gavriella TroperHochstein: For shmira there should be 12 madatz in each ohel
[2023-08-04, 3:59:45 AM] ~ Ira Spiegelman: Would anyone escort some of us on fesh from the chofnof to the mo
[2023-08-04, 4:03:04 AM] ~ Dani: I can
[2023-08-04, 4:03:23 AM] ~ Lila: thank you!
[2023-08-04, 4:03:46 AM] ~ Dani: No problem
[2023-08-04, 10:17:32 AM] ~ Talya Stein: If somebody hasn’t filled in yet, we’d really appreciate the help since it’s Shabbat so that means hella dishies!!!
[2023-08-04, 12:36:42 PM] ~ Avishai Jacobson: ^^^
[2023-08-04, 12:39:31 PM] ~ Lyrie Murad: I think I can do it!
[2023-08-04, 1:03:46 PM] ~ Monty: @day feshers wanna meet in the techni for an update
[2023-08-04, 1:15:22 PM] ~ Ariella Smith-Eidelman: Feshers there is a car if y’all want one now
[2023-08-04, 1:15:29 PM] ~ Monty: Omg slay
[2023-08-04, 1:15:43 PM] ~ Monty: That would be awesome we’ll come up
[2023-08-04, 1:38:00 PM] Ron: image omitted
[2023-08-04, 1:38:21 PM] Ron: image omitted
[2023-08-04, 1:38:28 PM] Dan: Shabbat Shalom 🪬
[2023-08-04, 1:38:44 PM] Ron: image omitted
[2023-08-04, 1:39:09 PM] Ron: image omitted
[2023-08-04, 1:39:13 PM] Ron: image omitted
[2023-08-04, 1:40:44 PM] Cate: ron ur so inspiring
[2023-08-04, 1:41:00 PM] Cate: thank you
[2023-08-04, 1:49:34 PM] ~ Ilana Sela: *SAYARIMOT AND CHOTRIMOT TZEVET  (+ riffraff going on their tiyul)*: we will actually be briefing you at LUNCH TODAY so get food early and come to the grofit!
[2023-08-04, 1:50:38 PM] ~ Ilana Sela: * amchatz will be briefed tomorrow instead
[2023-08-04, 1:54:28 PM] ~ Mikal Stein: Come to mo!!!!
[2023-08-04, 1:54:45 PM] ~ mai: Tzevet!!! There are 4 people here for the asepha 🫣
[2023-08-04, 2:00:31 PM] ~ karly: Hey! Is there anyone that can help tzofimot with the oneg? Shmeppy and I have never written one.
[2023-08-04, 2:06:27 PM] ~ karly: ^ nevermind:))
[2023-08-04, 2:07:52 PM] ~ karly: Do tzofimot also have to do a song?
[2023-08-04, 2:08:01 PM] Edden: yes
[2023-08-04, 2:08:30 PM] ~ Sadie Quinn: Let me know if you want help printing lyrics/chords
[2023-08-04, 2:25:15 PM] ~ Sarah: hey im off today i think theres not usually swimming on fridays anyway but in case u want ur kids to swim i will be around in the evening🌜
[2023-08-04, 2:28:59 PM] ~ mai: image omitted
[2023-08-04, 2:29:29 PM] ~ mai: image omitted
[2023-08-04, 2:32:06 PM] ~ Sarah: i can do the 8am!
[2023-08-04, 3:33:14 PM] ~ Nadav: Also Karly
[2023-08-04, 3:33:17 PM] ~ Nadav: For toranut
[2023-08-04, 3:59:58 PM] ~ Oliver: friendly reminder for all Sayarim and Chotrim that we are meeting in the grofit during lunch.computers are reccomended. get your food fast and head down to the grofit as soon as possible
[2023-08-04, 4:46:26 PM] ~ Avishai Jacobson: Can someone fill in for me with showers after lunch
[2023-08-04, 4:46:26 PM] ~ Avishai Jacobson: With the chotrim
[2023-08-04, 5:18:14 PM] Dan: @14132309249 wya the amelimot are waiting for u so we can shower
[2023-08-04, 5:26:54 PM] Rafi: image omitted
[2023-08-04, 5:35:51 PM] ~ Alex (shmeppy): can someone on tzevet pls pls pls play the chords for riptides on the guitar for tzofimot oneg
[2023-08-04, 5:36:33 PM] ~ Monty: I can if needed
[2023-08-04, 5:36:40 PM] ~ Alex (shmeppy): yes pls
[2023-08-04, 5:36:46 PM] ~ Monty: Shweeeet
[2023-08-04, 5:36:59 PM] ~ Monty: If someone really wants to go for it
[2023-08-04, 5:37:02 PM] ~ Alex (shmeppy): can y bring guitar
[2023-08-04, 5:43:52 PM] ~ Gal Icek: Cafe kar now
[2023-08-04, 5:43:58 PM] ~ Gal Icek: Soooooo
[2023-08-04, 6:39:25 PM] Ron: image omitted
[2023-08-04, 6:40:49 PM] Ron: image omitted
[2023-08-04, 6:41:26 PM] ~ ➕Ziv Mergui✖️: image omitted
[2023-08-04, 6:41:51 PM] Ron: image omitted
[2023-08-04, 6:51:24 PM] ~ ➕Ziv Mergui✖️: video omitted
[2023-08-04, 7:19:26 PM] ~ Monty: @16047882125 @16047257054  I’m at the medura pit
[2023-08-04, 7:20:21 PM] ~ Monty: For van 4
[2023-08-04, 7:23:18 PM] ~ Monty: @17786860074 where r u? I have a kid looking for u
[2023-08-04, 7:41:38 PM] ~ Ariella Smith-Eidelman: Reminder it’s madatz calls tonight
[2023-08-04, 8:14:50 PM] ~ Sarah: i forgot about the riffraff dinner toranut thing and coco and i are both off, you guys gonna have enough people ?
[2023-08-04, 8:53:24 PM] ~ Jackson Nozick: image omitted
[2023-08-04, 8:56:24 PM] ~ Ariella Smith-Eidelman: Don’t worry about it
[2023-08-04, 9:18:43 PM] Ron: Thanks mergui 💙
[2023-08-04, 10:05:24 PM] ~ mai: CHUG ALEF:
Boys Do Cry - @12368821635 @16045001486 @16042907768
Roe V Wade - @16049701816 @17788775651
Havdallah - @17786782703 @16042305933
Women in the IDF - @16048174089 @972504796600
WWC Updates - @12369970056 @16048625227
Headlines - @17785352161 @14165803436

CHUG BET
Suburbian Living - @17789885915 @17789854504
Curl Talk - @16044406994 @16047257054
Gaga - @12368821635 @17789518206 and @eva
Tide pools - @16043194130 @19842818919
Music appreciation - @16047626045 @16047882125
Collage - @14165803436 @17786860074

PREP THESE TONIGHT!! if you want help with anything let me know 😜 you’re all killing it
[2023-08-04, 10:06:20 PM] Dan: Not to brag or anything but Headlines finna be lit 🗣️🚨💥
[2023-08-04, 10:27:19 PM] Ron: If anyone sees a plastic blue sorting folder around pls hml it has a bunch of my documents 🙏
[2023-08-04, 10:33:31 PM] ~ karly: Does anyone want to switch with me and cut oranges?!
[2023-08-04, 10:37:12 PM] ~ Monty: Hey everyone needs to come to shira
[2023-08-04, 10:37:12 PM] ~ Monty: It just started and no one is here
[2023-08-04, 10:37:33 PM] Dan: Coming!
[2023-08-04, 10:44:52 PM] ~ Monty: If y’all have nothing to do come up to shira!
[2023-08-04, 11:12:49 PM] ~ Mica: Maybe this announcement has already been made but we are doing madatz calls tonight!! Be ready!! <This message was edited>
[2023-08-04, 11:14:07 PM] ~ Zevi: FYI oranges have been cut!!
[2023-08-04, 11:25:34 PM] ~ Talya Stein: Would it be possible to give a 10min warning for madras calls for mitbach
[2023-08-04, 11:25:37 PM] ~ Talya Stein: *madatz
[2023-08-04, 11:31:23 PM] Rafi: Yes ^^^^
[2023-08-04, 11:32:54 PM] ~ Jane: i forgor im on chofesh
[2023-08-04, 11:33:14 PM] ~ hannah: i forgor 💀
[2023-08-04, 11:58:47 PM] ~ karly: Where are the people cutting oranges?
[2023-08-04, 11:59:53 PM] ~ Mica: Yeppers
[2023-08-05, 12:05:28 AM] ~ Louis: Message from Mairav: if you want to do you madatz call, come to the Janusz in 5~ish minutes
[2023-08-05, 1:01:16 AM] ~ Ira Spiegelman: Can someone please take my tafkid moving benches in the chadar for me
[2023-08-05, 1:01:22 AM] ~ Ira Spiegelman: I’m otherwise occupied
[2023-08-05, 1:02:19 AM] ~ Mica: CHEVRATI AT MIDNIGHT TONIGHT PASS IT ON!!
[2023-08-05, 1:02:59 AM] ~ Mica: And swimming at 11:30 meet on the lower kvish
[2023-08-05, 1:05:03 AM] Dan: Somebody misplaced shai's phone off the rikud speaker it's an iPhone 7 and a plain purple case. If anyone sees it they should let them know or text me!
[2023-08-05, 1:05:11 AM] ~ Sadie Quinn: Never mind, benches are done!
[2023-08-05, 1:29:46 AM] ~ Talya Stein: 👩‍🍳 mitbach is closing at 11:30 tonight! 👩‍🍳
[2023-08-05, 1:58:01 AM] ~ Gavriella TroperHochstein: can someone tell the people playing soccer to please be quiet? there’s a tzrif that’s having a hard time sleeping
[2023-08-05, 1:59:46 AM] ~ Gavriella TroperHochstein: please like this message if you are able to pass it on
[2023-08-05, 2:10:20 AM] ~ Mica: Message received! Sorry
[2023-08-05, 2:11:00 AM] ~ Gavriella TroperHochstein: no worries!
[2023-08-05, 2:18:33 AM] ~ Mica: Anyone who wants to swim we are beginning to gather
[2023-08-05, 2:44:47 AM] ~ Oliver: image omitted
[2023-08-05, 2:45:20 AM] ~ Kiran: It’s blues
[2023-08-05, 2:53:23 AM] Rafi: Walker to mo plz!!!
[2023-08-05, 2:53:29 AM] ~ Mica: Chevrati in 7!! Be there 😎
[2023-08-05, 2:53:37 AM] Rafi: From gate to mo*
[2023-08-05, 2:53:41 AM] ~ Mica: People boutta come up from swimming
[2023-08-05, 2:54:25 AM] ~ agustina: can we get and escort to mo pls
[2023-08-05, 2:55:01 AM] ~ Lila: should i come or are swimmers there?
[2023-08-05, 3:51:31 AM] Ezra: image omitted
[2023-08-05, 3:53:34 AM] ~ Lila: image omitted
[2023-08-05, 3:58:49 AM] Ezra: image omitted
[2023-08-05, 4:50:48 AM] Rafi: Walker please!
[2023-08-05, 4:51:33 AM] ~ Monty: 👹
[2023-08-05, 4:52:01 AM] ~ Prielle Laniado: what time should kima start tomorrow?
[2023-08-05, 4:52:14 AM] ~ Monty: Coming
[2023-08-05, 5:09:43 AM] ~ Zachary Bunim: 9:45-9:50 in upper machaneh
[2023-08-05, 10:36:53 AM] ~ Maisie: image omitted
[2023-08-05, 10:37:20 AM] ~ Maisie: CLEAN YOUR SHIT UP.
[2023-08-05, 10:37:31 AM] ~ Maisie: I’m not doing it again.
[2023-08-05, 12:42:50 PM] ~ Shani Avrahami Saraf: It's a beautiful day to stay hydrated! ⛲
[2023-08-05, 12:44:55 PM] Gali Goldman: hi tzevet! if you still haven't gotten your angel and devil, come find me! I'll have the papers on me all day :)
[2023-08-05, 12:53:20 PM] ~ Sadie Quinn: image omitted
[2023-08-05, 12:55:23 PM] ~ Sadie Quinn: Also message me ASAP if you need a specific location for chug alef/bet, otherwise I’ll assign you a spot
[2023-08-05, 12:55:43 PM] Mira: Id love a place with wifi
[2023-08-05, 12:56:11 PM] Dan: / WE NEED WIFI YAYYAYAYAYAY
[2023-08-05, 1:35:09 PM] ~ Shani Avrahami Saraf: Friendly reminder that devil acts should not involve people's beds please and thank you
[2023-08-05, 2:47:25 PM] ~ Noa Franklin: Hey friends, if u have nothing to do we need extra help on tornut!
[2023-08-05, 2:49:23 PM] ~ Noa Franklin: Preferably ppl who aren’t on amelimot or chalutzimot tzevet
[2023-08-05, 2:49:23 PM] ~ Noa Franklin: But pls coke!
[2023-08-05, 2:53:15 PM] ~ Monty: Are there seder yoms for today?
[2023-08-05, 2:55:01 PM] ~ mai: Same ones as yesterday
[2023-08-05, 2:55:06 PM] ~ mai: There’s 2 pages
[2023-08-05, 2:55:19 PM] ~ Monty: Ahhh
[2023-08-05, 3:40:13 PM] ~ Shani Avrahami Saraf: Wow it's lunchtime! A perfect time to check in and make sure your kids are drinking water 💦
[2023-08-05, 4:02:53 PM] ~ Solomon Bodrug: image omitted
[2023-08-05, 4:03:38 PM] Dan: @17789033776
[2023-08-05, 4:03:49 PM] Dan: RONNNNNN
[2023-08-05, 4:03:58 PM] Dan: SHLOMO FOR THE W
[2023-08-05, 4:04:45 PM] Ron: Mashallah thanks sol
[2023-08-05, 4:08:01 PM] ~ Solomon Bodrug: come grab it my guy
[2023-08-05, 4:13:40 PM] ~ Prielle Laniado: if you like to run text meeeee! i have a proposition for u
[2023-08-05, 4:30:20 PM] ~ Shani Avrahami Saraf: No way, a walk to twin! What a splendid opportunity to drink water with my friends and chanis! 💧
[2023-08-05, 4:31:15 PM] ~ Shani Avrahami Saraf: And also to apply sunscreen before my journey! ☀️
[2023-08-05, 4:48:12 PM] Ron: Anyone know estimated time of arrival at twin
[2023-08-05, 6:54:41 PM] ~ Talia Joffe: August 5th tzevet asepha
 Tzevet needs to be at the last rikkud song where we run in groups and then go through machaneh. Keep the tradition alive! Do it with your kids!!
There are a lot of new kids here this session! Explain things to your kids so that traditions don’t die
Tiyul prep is starting!! Come help in the mitbach with prepping food!! The tiyul specialists need people! Please be respectful of the work that the tiyul specialists are doing in the mitbach. Don’t just be in the mitbach to mess around and get in the way
Talk to your kids about tiyul! Make sure they have the things that they need and if not start looking.
Start paying attention to which kids shouldn’t be going on tiyul
During chug Alef and bet tzevet should be at the madregoat and count your kids!! Even if you aren’t running one you should help get them started
When sitting in camp-wide activities (eg. the oneg), sit with your kids!!! Don’t just clump in the back with tzevet
If you want to play live music for havdallah, talk to mairav
Tzevet needs to be on for havdallah!!! Help make sure it’s a good experience for everyone. Explain to kids that they need to be quiet and respectful during it
If you still haven’t gotten your angel/devil, find Gali and get them!!
MWOPs… what does it mean??? You are NEVER without a purpose. Your job is to keep your eyes peeled and watch out for bad behaviour and do something about it. Being on means being present and participating and watching for things
Sexism is prevalent among tzevet. Watch out for it, recognize it, change the culture of you notice it. We want a safe and kind tzevet community both for us and for our chanichimot. There will be further sichot about this. If you have additional feedback about this issue, talk to maz so they can gain a further understanding.
If you see things that should be in the shmo, bring them back to the shmo
Talk to your kids about respectful actions and words at camp. In general swearing between kids and tzevet should be shut down. If you see vulgar graffiti in the bathroom, write over it (avodah)
Please return car keys if you use them. Ariella needs the keys back as soon as you’re done using the cars
The next order is going out Monday. Fill out your forms by Sunday night
Please make sure to get proper receipts if you need to be reimbursed
Hydrate!!! Make sure you and your kids are drinking enough water!!
There’s been a lot of foot issues… make sure your dogs are getting aired out, that people are changing socks, and that people are cleaning their feet in the shower
Make sure your kids are taking their meds during med hours!!
[2023-08-05, 7:56:56 PM] ~ Maayan: Peula spaces for madatz peula!
Amel: Janusz
Chal: AD Gordon
Say: gezer
Chot: medura pit
Shom: mirpeset
Tzof: golda
[2023-08-05, 8:00:06 PM] ~ Nadav: Remind yo kids: if they were on Friday lunch toranut, they will be again for dinner tonight!
[2023-08-05, 8:00:27 PM] ~ Nadav: image omitted
[2023-08-05, 8:30:15 PM] ~ Monty: 👹👹Big important message!!!!👹👹
Please send me all of your kid stuff for TRIPLE MMM!!!!!! I will come and find one member from each tzevet to spread the word and to get the info 🤨🫵 ! It would be preferable to get the info by dinner time hehehehehe 👹👹
[2023-08-05, 9:02:34 PM] Ezra: image omitted
[2023-08-05, 9:16:05 PM] ~ Gal Icek: video omitted
[2023-08-05, 9:42:51 PM] India: ppl need to be in the chadar
[2023-08-05, 9:43:04 PM] India: there’s barely any tzevet like actually barely
[2023-08-05, 9:56:35 PM] ~ Noa Franklin: Hey friends, just going off of my hodaah earlier, the shmo is a mess rn and I found kids in there unsupervised, pls pls pls if u r supervising remind kids to clean up and if u hear drums pls check out the sitch!
[2023-08-05, 10:22:07 PM] ~ Zachary Bunim: just so everyone is aware, the bonimot WILL NOT RUN IVRIT TOMORROW. this is hopefully the only ivrit block that you guys have to run the rest of the session
[2023-08-05, 10:56:24 PM] ~ Tal Fisher-Taylor: image omitted
[2023-08-05, 11:27:45 PM] ~ Tal Fisher-Taylor: Ice packs! 🥶 PULEASE bring them back! ❄️
[2023-08-06, 12:56:04 AM] ~ Noa Franklin: Pls be quiet in lower macheneh!
[2023-08-06, 1:15:31 AM] ~ Gavriella TroperHochstein: What time has Madrichol toran been getting up at?
[2023-08-06, 1:15:39 AM] ~ Sadie Quinn: Also gaga pit?
[2023-08-06, 1:16:31 AM] ~ Jane: I was up at 7 for madrichol toran
[2023-08-06, 1:16:48 AM] ~ Gavriella TroperHochstein: like at the rope swing at 7?
[2023-08-06, 1:16:56 AM] ~ Jane: yes
[2023-08-06, 1:17:02 AM] ~ Gavriella TroperHochstein: cool, thanks!
[2023-08-06, 1:49:23 AM] ~ Joanna: Hey everyone! It’s my last night at machaneh and I’m leaving with the nitz in the morning! Plz say bye to me tonight!! It has been such a blast being back at machaneh!! Just remember kids don’t know when things go wrong, kids feed off of your energy, and remember you come to camp to not only have dugma and hadricha but to have fun!!! Camp is only magical when you help make the magic happen! Help a chanichol with a Medura/musical act, start kvutza jokes, hype people up!!! Remember what you loved the most about madrichimot when you were a kid and channel that energy! It’s okay to be silly, goofy, and weird (no such thing as normal #duh)! That’s what makes camp so special!! EGE energy generates energy! Start a catch phrase! Start a trend! Start some handshake with each other! When kids see you having fun they want in!! I hope everyone rocks the rest of the session! And most importantly don’t forget to SLAY!!!!!! ❤️
[2023-08-06, 1:49:53 AM] ~ Joanna: image omitted
[2023-08-06, 1:50:10 AM] ~ Joanna: image omitted
[2023-08-06, 1:53:28 AM] Dan: LOVE YOU JOANNA!!!
ALL MY LOVE UH!
[2023-08-06, 2:29:50 AM] Ron: Miss u already 😢😢😢❤️
[2023-08-06, 2:34:17 AM] Dan: video omitted
[2023-08-06, 3:28:08 AM] ~ Lila: can we get an escort to the mo
[2023-08-06, 3:28:16 AM] ~ Lila: from rainbow road
[2023-08-06, 3:28:16 AM] Dan: Wya
[2023-08-06, 3:28:18 AM] Dan: Ofc
[2023-08-06, 3:28:29 AM] ~ Maisie: Coming
[2023-08-06, 3:28:44 AM] Dan: I'm already here
[2023-08-06, 3:28:45 AM] Dan: It's okay
[2023-08-06, 3:45:09 AM] ~ Mikal Stein: Can we get a walker to the mo
[2023-08-06, 3:45:17 AM] Rafi: Yes
[2023-08-06, 3:45:28 AM] ~ Ariella Smith-Eidelman: No
[2023-08-06, 3:47:30 AM] Dan: Bruh
[2023-08-06, 11:48:58 AM] Ron: Anyone have a chultzah I can borrow
[2023-08-06, 12:20:20 PM] ~ Eli: Does anyone have soft clear plastic earring backers I can borrow?
[2023-08-06, 12:56:24 PM] Rafi: image omitted
[2023-08-06, 1:05:38 PM] ~ Jane: I left my sunglasses on top of the paper towel dispenser in the mains for like an hour and now they’re gone. please if u see them return them to me
[2023-08-06, 1:15:18 PM] ~ Jane: if you find them i’ll give you my techni points
[2023-08-06, 1:38:49 PM] Arielle: image omitted
[2023-08-06, 1:59:56 PM] Dan: I won't be able to do zman sports today
[2023-08-06, 2:00:00 PM] Dan: Tikkun olam
[2023-08-06, 2:00:03 PM] Dan: Srry
[2023-08-06, 2:00:19 PM] Rafi: Who can do grounders??
[2023-08-06, 2:17:27 PM] ~ hannah: dearest tzevet: thank u for having me!! u guys r the best and are gonna kill it the rest of the summer. love u 🦅🏌️

ps. if anyone needs a place to stay in portland u always have a place at mine 💕
[2023-08-06, 2:18:09 PM] ~ Gavriella TroperHochstein: safe travels Hannah!
[2023-08-06, 3:35:09 PM] ~ Maisie: I’m sorry to inform everyone that unfortunately there will be no salad greens in the salad bar for a little bit. Both the salad greens mix and the romaine lettuce have gone mouldy.
[2023-08-06, 3:35:27 PM] Tyler: Yummy :)
[2023-08-06, 3:35:38 PM] ~ Mica: Who angered the salad gods. WHO?!
[2023-08-06, 3:35:41 PM] ~ Gavriella TroperHochstein: this is tragic 😢
[2023-08-06, 3:35:48 PM] ~ Gavriella TroperHochstein: not sure I’ll survive
[2023-08-06, 3:35:55 PM] ~ Gavriella TroperHochstein: the poops will get all blocked up
[2023-08-06, 3:39:19 PM] ~ Monty: Nooooooo whyyyyyyy
[2023-08-06, 3:39:19 PM] ~ Monty: The greeens the greeeens
[2023-08-06, 3:39:20 PM] ~ Monty: 🫨🫨🫨🫨
[2023-08-06, 3:39:23 PM] Ron: Thanks for informing us, I am devastated :(💔
[2023-08-06, 3:39:25 PM] ~ Maisie: image omitted
[2023-08-06, 3:39:31 PM] ~ Monty: LOL
[2023-08-06, 3:39:59 PM] ~ oli: metric shitload <3
[2023-08-06, 3:41:35 PM] ~ Maisie: image omitted
[2023-08-06, 3:47:54 PM] ~ Ilana Sela: If anyone has seen extra tiyul rope laying around or didn’t bring it back after a special day please bring it to the grofit NOW! We’re missing about 100 ropes!!!
[2023-08-06, 5:48:02 PM] Dan: image omitted
[2023-08-06, 6:12:55 PM] ~ Talia Joffe: August 6th tzevet asepha
We need to slow down when singing rad hayom. It’s too fast
Stop kids from singing verses of songs earlier/later than the rest of camp. Encourage everyone to sing in unison
Tiyul is coming up! If you’re worried about your kids on hiking tiyuls, talk to tal about it so he can assess. This needs to happen today! Also let Noga know!!
If you need Tiyul gear, talk to tal too, he’s starting a tiyul gear spreadsheet. This needs to happen today
Be on your kids about getting their meds! Don’t make tal track them down!
The Bonimot are not running ivrit today, which means you need to plan it for your kids. They’re running the kululam tomorrow!
Chanichimot should not leave tables without checking with the tzevet member at the head of the table. Know where your kids are! Check with them when they get up from the table, ask where they’re going
Keep track of the kids on toranut if you’re with them that day!
If you’re toran, you need to help with the sevvy dishes!! It gets gross quick, just do them
Please keep the storage room in the mains organized. Don’t leave it a mess
Help Jane find her sunglasses! They say “riders” on the side
Don’t leave dishes in the mo or around machaneh. If you see them, bring them to the mitbach to be washed! Do not leave your coffee and tea mugs at the tables for kids on toranut to clean up. They go back to the sevvy to be washed
Don’t bring drinks around machaneh as your go through the day. You can have tea and coffee in the chadar, but not around machaneh
Kids are not allowed to pull pranks alone. Their madrichimot need to be there with them to supervise
In the song “not fade away” during lunch shira, we’ve re-added 2 new sentences. They are: “I really like Israeli girls, with dark brown hair and deep brown curls. She’s so gorgeous I am dying, all I wanna do is fly to Zion.” And “I really like Israeli guys, with dark brown hair and deep brown eyes. He’s so gorgeous I am dying, all I wanna do is fly to Zion” let’s bring them back!
Put garbage in the garbage bins!! Don’t just pile it in front of the bins!
If you’re throwing out something sharp, wrap it in paper and tape and label what it is. So if you have broken glass, wrap it in paper and tape and label it “broken glass”
Be outside the chadar before meals and sing the cheers! Let’s teach the kids the songs and make sure that tradition doesn’t die
There only needs to be one tzevet member per table before kids are in the chadar. Other than the people inside, everyone else should be outside singing
After mifkad every day we sing songs as leave. I’m the morning it’s the la avodah song, in the evening it’s the Sherutim one. Let’s bring them back!!!
If we don’t continue these traditions every year, they will cease to exist. It is up to us to keep them alive! Interact with your kids during it too so they learn!
The last order before tiyul closes at 10:30 tonight. Get your orders in before then!
Tell Ariella where your chug is meeting so she can direct kids on where to go. Also pick up your chug kid list at the techni
[2023-08-06, 7:02:07 PM] Dan: Hey guys can someone do the tochnit erev station for me. I need to set up my epaep
[2023-08-06, 7:07:28 PM] Rafi: Chalutzimot are using the gezer for epaep tonight!!!
[2023-08-06, 7:21:46 PM] ~ Hilla Kabazo: Code for sport shed?
[2023-08-06, 7:23:12 PM] ~ Gal Icek: 142
[2023-08-06, 7:23:22 PM] ~ Gal Icek: Or 124
[2023-08-06, 7:25:22 PM] ~ Monty: Amelimot will also be having an epeap in the chadar!!!
[2023-08-06, 7:39:42 PM] ~ Ariella Smith-Eidelman: This
[2023-08-06, 7:41:35 PM] ~ blue: my bossa nova playlist for those who were asking
https://music.apple.com/ca/playlist/bossa-nova/pl.u-MDAW2yNsWbZYL81
[2023-08-06, 7:42:37 PM] ~ Solomon Bodrug: 🔥🙏
[2023-08-06, 9:01:44 PM] Dan: image omitted
[2023-08-06, 9:15:15 PM] Dan: image omitted
[2023-08-06, 9:15:24 PM] Dan: @15035604496 also send that photo to the datz
[2023-08-06, 10:26:11 PM] ~ Lila: 🚨⚠️ this is the 3rd time i’ve cleaned someone’s vomit that they left in the mo bathroom this week! again seriously make sure you’re checking in with the mirp if this is an ongoing issue and ALSO STOP leaving your vomit in the mo toilet it’s not fun for me to have to clean up nor should it become my responsibility :) 💋💋⚠️🚨
[2023-08-06, 10:26:32 PM] Dan: Facts! 🚨🚨💥
[2023-08-06, 10:29:55 PM] Arielle: Lila missed the birthday song for this :(
[2023-08-06, 10:32:18 PM] Gali Goldman: CHARACTERS DRESS UP FOR UR ROLE!!!
[2023-08-06, 10:36:59 PM] ~ Gal Icek: Also if you need tziud for your station come get it from the techni
[2023-08-06, 11:43:03 PM] Gali Goldman: During the next hatzagah, all of tzevet should yell “surprise!!!” After they say the line: “now we understand and we can’t wait to celebrate you!!”
[2023-08-06, 11:53:22 PM] ~ Gal Icek: And - no matter where you are all stations end at 9
[2023-08-06, 11:53:36 PM] ~ Gal Icek: And then we all go to the steps of the janush
[2023-08-06, 11:59:14 PM] ~ Gal Icek: Yalla come to the janush
[2023-08-07, 12:23:52 AM] ~ Ilana Sela: Would someone be able to switch shmira nights w me and do shmira tonight with Arielle?
[2023-08-07, 12:41:45 AM] ~ Sarah: chotrimot, i will meet you down at the chof
[2023-08-07, 12:47:51 AM] Dan: Am I allowed to do Shmira twice @maz
[2023-08-07, 12:48:12 AM] Dan: Wait nvm
[2023-08-07, 12:48:24 AM] Dan: Alias is off I can't anyways
[2023-08-07, 12:48:27 AM] Dan: My bad
[2023-08-07, 12:53:20 AM] ~ Jane: is someone on riffraff available rn? I need someone to stay with me w/ a kid in the mirp tsrif
[2023-08-07, 12:57:44 AM] ~ Lyrie Murad: I’m coming!
[2023-08-07, 1:00:46 AM] Ezra: This message was deleted.
[2023-08-07, 1:01:22 AM] Ezra: *Who ever took the Dinosaur off my desk! You better bring it back!*
[2023-08-07, 1:01:56 AM] India: we will be there very soon/they r slowly heading down now
[2023-08-07, 1:36:59 AM] ~ mai: Cake at 11:45-12 ish!!!! 🎈 🧁💌🍀
[2023-08-07, 1:45:49 AM] India: image omitted
[2023-08-07, 1:45:59 AM] ~ Monty: Omg slay
[2023-08-07, 1:46:08 AM] Dan: 💅💅
[2023-08-07, 1:46:23 AM] Gali Goldman: if you have photos from today/tonight please send them to me ASAP! ON WHATSAAP :)
[2023-08-07, 1:47:21 AM] ~ Solomon Bodrug: Waiiit can you bring me some to the mo??
[2023-08-07, 1:47:38 AM] Gali Goldman: also please pass on the photo hodaa to madatz!
[2023-08-07, 2:32:51 AM] ~ oli: cake is in freezer! stack one on top of the other 😁 i’m too sleepy to be down there late
[2023-08-07, 2:32:54 AM] ~ oli: save me a slice
[2023-08-07, 2:33:13 AM] ~ oli: jk eat all of it
[2023-08-07, 2:55:29 AM] ~ Mikal Stein: In the mo😋😋😋
[2023-08-07, 2:56:04 AM] ~ Gavriella TroperHochstein: I am madrichol toran and im still running programming. Please know that I am on my way to do 7/11 dishes ASAP, and my apologies for taking this long!
[2023-08-07, 2:59:10 AM] ~ Zachary Bunim: COME TO THE MO FOR A BDAY PARTY!!!! 🎂🎂🎉🎉
[2023-08-07, 2:59:22 AM] ~ Zachary Bunim: it’s cake timeeee
[2023-08-07, 3:00:09 AM] Ron: My bad :(
[2023-08-07, 3:00:18 AM] Ron: 🤪
[2023-08-07, 3:10:58 AM] ~ Ana: This message was deleted.
[2023-08-07, 3:11:16 AM] ~ Eli: At u at lower kvish?
[2023-08-07, 3:11:22 AM] ~ Eli: Are*
[2023-08-07, 3:11:26 AM] ~ Ana: About to be
[2023-08-07, 3:11:37 AM] ~ Eli: I’ll come down then
[2023-08-07, 3:11:46 AM] ~ Ana: Thanks
[2023-08-07, 3:46:44 AM] Alias: Escort down at rainbow gate pls
[2023-08-07, 3:50:13 AM] ~ Maisie: I came and helped them so don’t worry
[2023-08-07, 2:48:39 PM] ~ Alex (shmeppy): can someone do medura superstar for me during lunch, i have tiyul briefing
[2023-08-07, 2:48:50 PM] ~ Hilla Kabazo: Me me meeee
[2023-08-07, 3:11:43 PM] Dan: Can someone help the amelimot with bedtime tonight I am off and it would be much appreciated 🥰🥰
[2023-08-07, 3:14:53 PM] ~ Hilla Kabazo: Defs
[2023-08-07, 3:21:01 PM] ~ Ilana Sela: We’ve got garbage bags for packing on the picnic tables in front of the chadar and we’ll try to come around to each kvutza to check on packing
[2023-08-07, 3:22:13 PM] ~ Ilana Sela: Also feel free to ask questions on the group chats and we’ll come help
[2023-08-07, 3:51:49 PM] ~ Shani Avrahami Saraf: Where are the chotrimot atm?
[2023-08-07, 4:05:37 PM] ~ Shani Avrahami Saraf: Hello gang for the next week and a half I am going to be part of sodo tzevet so mirp questions and requests should go to Tal or the current nurse! I'll be back in the mirp for the last few days of camp and decon 💖
[2023-08-07, 4:12:32 PM] ~ oli: video omitted
[2023-08-07, 4:17:41 PM] ~ Solomon Bodrug: did you
[2023-08-07, 4:17:44 PM] ~ Solomon Bodrug: just swallow
[2023-08-07, 4:17:49 PM] ~ Solomon Bodrug: a rubber duck!?
[2023-08-07, 4:19:06 PM] ~ Solomon Bodrug: ducks!?
[2023-08-07, 4:21:56 PM] ~ Talya Stein: Yes
[2023-08-07, 4:24:24 PM] ~ eli gerut: i HATE ducks
[2023-08-07, 4:34:36 PM] Edden: just got back from tikkun olam
[2023-08-07, 4:58:26 PM] Shir: they drive me CRAZY
[2023-08-07, 4:58:49 PM] Mira: Crazy? I was crazy once.
[2023-08-07, 4:59:04 PM] ~ Ariella Smith-Eidelman: They put me in a room
[2023-08-07, 5:30:59 PM] Mira: I’m opening the myad so I can’t supervise gender neutral showers, can someone else do it?
[2023-08-07, 5:43:34 PM] ~ Zachary Bunim: we need someone for this!!
[2023-08-07, 5:44:29 PM] ~ Ariella Smith-Eidelman: Hilla is coming
[2023-08-07, 5:50:40 PM] ~ Monty: Hey y’all amelimot will be needing the gezer after rad hayom
[2023-08-07, 5:50:41 PM] ~ Monty: !!!!
[2023-08-07, 5:57:42 PM] Rafi: image omitted
[2023-08-07, 5:58:01 PM] ~ Talia Joffe: August 7th tzevet asepha
 the madatz made a tochnit erev song for the Seder yom after dinner! To the tune of Lion Sleeps Tonight: “in the erev, the tochnit erev, the highlight of the night. Weeeeeeee love the storyline. Weeeeeee think that it’s divine” yay!
Please tell Ariella you chuggim locations! There will be kid lists on her desk
Ivrit today is the kululam. Bonimot are running it!! Give them extra support!!
Figure out your kupa trips!!! If you need the bus, tell Ezra at least 2 days in advance.
[2023-08-07, 6:07:13 PM] Rue: Chalutzimot + Shomrimot are meeting in the misrad rosh for kesher meetings
[2023-08-07, 6:23:12 PM] ~ Zachary Bunim: just a heads up we will be meeting at the JANUSZ for ivrit today to learn the kululam!
[2023-08-07, 6:28:15 PM] ~ Sadie Quinn: Can someone cover me on toranut for after dinner so I can prep the tochnit erev? I can still do toranut before and during the meal
[2023-08-07, 6:30:07 PM] ~ Sadie Quinn: Never mind, found someone
[2023-08-07, 6:32:17 PM] Gali Goldman: PLEASE LET ME KNOW IF YOU ARE IN CHARGE OF TAKING PHOTOS ON TIYUL!!!
[2023-08-07, 6:32:29 PM] Gali Goldman: I will also happily assign people i just need people to do it!
[2023-08-07, 8:13:28 PM] ~ Monty: Can people running chugging tell their amelimot to go to the tzruif?
[2023-08-07, 8:13:42 PM] ~ Monty: They need to pack for tiyul:)
[2023-08-07, 8:18:11 PM] ~ agustina: if anyone has size 3, 4.5, 6, 8.5, 9.5, 10 hiking shoes or dry fit clothing my kids can borrow on tiyul please lmk
[2023-08-07, 8:20:38 PM] ~ Jackson Nozick: Also size 12 or 13 hiking shoes for me
[2023-08-07, 8:33:19 PM] ~ mai: Bonimot needs water shoes!!! 10 of our kids don’t have so pls let us know 🙏🙏
[2023-08-07, 8:38:18 PM] ~ Tal Fisher-Taylor: I have 11.5 if you want to try them on
[2023-08-07, 8:38:40 PM] ~ Jackson Nozick: That would be awesome thank you
[2023-08-07, 10:09:52 PM] ~ Sadie Quinn: Come to the techni to get your stuff for tochnit erev! Especially group and station leaders!
[2023-08-07, 10:17:37 PM] Dan: @17788706904 what car are the feshers taking with dani?
[2023-08-07, 10:18:12 PM] Ezra: That's an ariella question
[2023-08-07, 10:19:39 PM] ~ Ariella Smith-Eidelman: Joey
[2023-08-07, 10:25:13 PM] ~ Gavriella TroperHochstein: is anyone willing to switch me out as a group leader for the tochnit erev?
[2023-08-07, 10:26:56 PM] ~ Monty: GRAB UR SEDER YOM 👹
[2023-08-07, 10:29:38 PM] Rafi: COME PICK UP YOUR SHIT
[2023-08-07, 10:29:45 PM] Rafi: QUIT PLAYIN
[2023-08-07, 10:29:50 PM] Rafi: TIME IS RUNNING OUT
[2023-08-07, 10:29:51 PM] ~ Monty: YEAH
[2023-08-07, 10:29:56 PM] Rafi: ITS NOW OR NEVER
[2023-08-07, 10:29:59 PM] Rafi: THE END IS NEAR
[2023-08-07, 10:30:00 PM] ~ Monty: WHAT RAFI SAID
[2023-08-07, 10:30:03 PM] ~ Monty: 👹
[2023-08-07, 10:30:10 PM] Rafi: PLEASE SAVE US FROM THIS MADNESS
[2023-08-07, 10:30:22 PM] ~ Monty: GIF omitted
[2023-08-07, 10:32:49 PM] ~ Gavriella TroperHochstein: More urgent: can someone switch with mica? She’s not available so we really need someone else
[2023-08-07, 10:36:41 PM] ~ Monty: Everyone who is a project lead has to come to techni👹👹👹👹👹👹👹👹👹
[2023-08-07, 10:36:48 PM] ~ Monty: Plz get ur yommmm
[2023-08-07, 10:36:50 PM] ~ Monty: Yommmy
[2023-08-07, 10:37:00 PM] ~ Monty: GIF omitted
[2023-08-07, 10:40:13 PM] Yvonne: Are theyvstartung at the Janusz or the madragot?
[2023-08-07, 10:40:22 PM] ~ Gavriella TroperHochstein: Janusz
[2023-08-07, 10:48:14 PM] Rue: Hi! If I lent you/if you’ve seen a navy Eddie Bauer rain coat pls lmk ASAP
[2023-08-07, 10:51:51 PM] ~ Mica: Has anyone seen the headbands that had ears on them?
[2023-08-07, 10:52:08 PM] Mira: In the myad
[2023-08-07, 10:52:17 PM] ~ Mica: Yay
[2023-08-07, 11:47:12 PM] Tzevet 2023 & ME 🧬👩‍🔬🌀: Send for admin review was turned on for this group. Tap to learn more.
[2023-08-07, 11:12:01 PM] ~ Sarah: theres one or teo at the pool
[2023-08-08, 12:43:59 AM] ~ karly: Hiking shoes:

Ava- 10 women's
Ethan- 8.5 men's
Arielle DV- 6 women's
Caleb- 11 men's
Addi- 7.5 women's or 6 men's
Laura- 8 women's
Hadar- 8 women's

Flashlight:
Shalev


Hat:
Shalev
Eli

Water bottle:
Addie
Karly

Rain jacket:
Shalev
Arielle


Fleece sweater:
Karly:))
[2023-08-08, 12:44:22 AM] Omer: These are the things that the tzofimot need for tiyul
[2023-08-08, 1:01:39 AM] ~ Eli: Add me and hadar to rain jacket
[2023-08-08, 1:41:04 AM] Yonnie: image omitted
[2023-08-08, 2:25:15 AM] ~ Maisie: image omitted
[2023-08-08, 2:26:32 AM] Rafi: @61478581858
[2023-08-08, 2:26:55 AM] ~ Maisie: Thanks, I was trying to ping him
[2023-08-08, 2:27:04 AM] ~ Roie Bargil: Thank god I’m not from Australia am I right
[2023-08-08, 2:27:14 AM] ~ Maisie: 🗿
[2023-08-08, 2:27:19 AM] ~ maya: but i thought you were australian ryan?
[2023-08-08, 2:27:59 AM] ~ Roie Bargil: image omitted
[2023-08-08, 2:27:59 AM] ~ Roie Bargil: image omitted
[2023-08-08, 2:28:12 AM] ~ Maisie: BAHAHAHA
[2023-08-08, 2:29:21 AM] ~ Maisie: @61478581858 @61477604777 I love you guys
[2023-08-08, 10:51:29 AM] Yonnie: Hey which kvutzah is on breakfast setup?
[2023-08-08, 11:08:56 AM] Dan: Anyone seen my bluey green nalgene it can be identified cuz it has 3 I <3 Israel stickers! 🇮🇱🇮🇱🇮🇱 Need 4 Tiyul
[2023-08-08, 12:50:18 PM] ~ agustina: please text me my kids need boots!!
[2023-08-08, 12:52:58 PM] ~ Mica: I have size 6 hiking boots
[2023-08-08, 1:10:42 PM] ~ Shani Avrahami Saraf: If anyone sees Shanon my water bottle she is sorely missed, light purple nalgene with a small mouth and stickers!
[2023-08-08, 1:21:20 PM] ~ oli: image omitted
[2023-08-08, 1:22:05 PM] ~ Alex (shmeppy): that is me rn
[2023-08-08, 1:23:58 PM] Dan: Frlz
[2023-08-08, 1:26:00 PM] Ron: image omitted
[2023-08-08, 2:06:13 PM] India: some1 from maz or mirp please answer if i call :)
[2023-08-08, 2:06:45 PM] ~ Prielle Laniado: hey, if any riff raff members are around, sayarimot need some extra help
[2023-08-08, 2:07:10 PM] ~ Gal Icek: Hilla is coming
[2023-08-08, 2:48:34 PM] ~ Alex (shmeppy): does anyone have 2 size 8 women’s hikers, 9/10 women’s, 6 women’s, size 8.5 men’s or size 10.5 men’s to spare
[2023-08-08, 2:50:24 PM] ~ Alex (shmeppy): also 2 pairs of pants kids can hike in if possible
[2023-08-08, 2:55:38 PM] Omer: We need two rain jackets
[2023-08-08, 2:56:46 PM] Gali Goldman: If anyone has an extra rain jacket let me know!
[2023-08-08, 3:09:19 PM] ~ Sadie Quinn: image omitted
[2023-08-08, 3:18:12 PM] Omer: Im just still helping my kids pack for tiyul
[2023-08-08, 3:18:47 PM] Omer: Ill come when im done
[2023-08-08, 3:33:28 PM] Yonnie: Chotrimot toranut before meal:
Gabriel
Isaac
Jacob
Maayan
Manuel
Gray
Alexis
Celia
Emma
Gabriella
Goni
[2023-08-08, 3:33:49 PM] Yonnie: After meal:
Noah
Noah
Oscar
Ryan
Zachary
Leora
May
Pheobe
Sivan
Sophia
Yuval
[2023-08-08, 3:37:59 PM] Edden: is chotrimot tzevet on toranut or is it the people on the big calendar?
[2023-08-08, 4:27:24 PM] Omer: The tzofimot still need two fleeces if anyone can lend theirs that would be amazing
[2023-08-08, 4:40:12 PM] ~ Solomon Bodrug: image omitted
[2023-08-08, 7:08:22 PM] ~ Alex (shmeppy): ‼️‼️NEED SIZE 9 MENS HIKERS‼️‼️‼️
[2023-08-08, 7:08:28 PM] ~ Alex (shmeppy): help a child in need
[2023-08-08, 7:22:45 PM] ~ Sadie Quinn: Come get kibbud for your kids!
[2023-08-08, 8:01:41 PM] ~ Zevi: If anyone sees or has seen a MacBook Pro 16inch please let me know!!! Stickers include: greenpeace, a wolf, farmer Ben (from label maker), flying fish, green and yellow basketballs, etc
[2023-08-08, 8:20:09 PM] Yonnie: Hey tzofimot tzevet, I'd like for your kiddos to do toranut at dinner, can I pull half of them at 5:45?
[2023-08-08, 8:21:56 PM] ~ karly: Yes
[2023-08-08, 8:22:27 PM] ~ karly: Do you want tzof tzevet to come too?
[2023-08-08, 8:33:03 PM] Yonnie: Half?
[2023-08-08, 8:33:27 PM] Yonnie: I think one of the two people on toranut today is on tiyul
[2023-08-08, 8:36:55 PM] ~ oli: video omitted
[2023-08-08, 8:36:56 PM] Yonnie: And would you like to pick the half should I make the list
[2023-08-08, 8:42:04 PM] Omer: This message was deleted.
[2023-08-08, 8:47:08 PM] Omer: Were sending up a group now for toranut
[2023-08-08, 9:06:24 PM] ~ ➕Ziv Mergui✖️: image omitted
[2023-08-08, 10:50:49 PM] ~ oli: image omitted
[2023-08-08, 10:53:13 PM] Gali Goldman: Does anyone have a laptop we can use for the movie???
[2023-08-08, 10:54:05 PM] ~ oli: india perioded everywhere 😔
[2023-08-08, 10:54:06 PM] ~ oli: image omitted
[2023-08-08, 10:54:08 PM] ~ oli: we like literally just swept
[2023-08-08, 10:54:13 PM] ~ oli: no gd respect
[2023-08-08, 10:55:10 PM] ~ oli: image omitted
[2023-08-08, 10:57:52 PM] ~ Hilla Kabazo: Can Sayarimot tzevet pls send their child for dinner meds
[2023-08-08, 11:11:34 PM] ~ oli: image omitted
[2023-08-08, 11:17:42 PM] ~ Maisie: This is unrealistic. You should’ve smeared some of it on the knife.
[2023-08-08, 11:53:12 PM] ~ Gavriella TroperHochstein: if there are any free tzevet members around it would be good to have a few more people in the chadar. Some chanichimot are leaving
[2023-08-09, 12:40:47 AM] ~ Zevi: This message was deleted.
[2023-08-09, 12:50:35 AM] ~ Alex (shmeppy): does anyone have size 9 hikers or 8.5 men’s
[2023-08-09, 12:32:08 PM] ~ Nadav: image omitted
[2023-08-09, 12:32:16 PM] ~ Nadav: Phone found in chador
[2023-08-10, 2:14:56 AM] Tyler: Hey cute people! I am closing the mitbach at 11:30
[2023-08-10, 2:16:23 AM] Tyler: image omitted
[2023-08-10, 2:26:36 AM] ~ Lila: anyone who’s still up and about could you ask the sodo to be a bit quieter for kids sleeping thank youuu :)
[2023-08-10, 2:29:41 AM] ~ Noga Goldman: Done
[2023-08-10, 4:19:11 PM] ~ Zachary Bunim: can someone at machaneh supervise gender neutral showers please? just one kid
[2023-08-10, 4:22:15 PM] Rue: Coming
[2023-08-10, 4:33:36 PM] ~ Gal Icek: @bonimot there's enough food in the chadar for you
[2023-08-10, 4:33:49 PM] ~ Gal Icek: You don't need to eat tiyul specials
[2023-08-10, 6:51:33 PM] Dan: AMELIMOT ARE USING GEZER TN FOR EPEAP
[2023-08-10, 6:51:36 PM] Dan: :)
[2023-08-10, 8:54:04 PM] ~ Prielle Laniado: would anyone be interested in switching shmira with me tonight? i’m feeling a little sick 🫠
[2023-08-10, 8:54:17 PM] ~ Prielle Laniado: i can take yours within the next couple days!
[2023-08-10, 9:19:24 PM] ~ mai: Message me your nominations for shabbas queen!!!!!!!!!
[2023-08-10, 9:37:27 PM] ~ Jane: im supposed to do toranut tonight but im off 😢 idk if someone needs to fill in for me tho
[2023-08-10, 9:39:50 PM] Rafi: Can anyone on riff raff help cover for bedtime tonight
[2023-08-10, 9:39:56 PM] Rafi: I’m off and Lila is on shmira
[2023-08-10, 9:42:58 PM] ~ Sadie Quinn: I can!
[2023-08-10, 9:56:49 PM] Rafi: THANK YOU!
[2023-08-10, 10:12:29 PM] ~ Noga Goldman: Is anyone able to volunteer their laptop for the movie?
[2023-08-10, 10:14:57 PM] ~ Prielle Laniado: same with sayarimot!
[2023-08-10, 10:32:26 PM] Dan: Ye
[2023-08-10, 10:36:50 PM] ~ Gal Icek: Great! Can you bring it to the chadar?
[2023-08-10, 10:37:15 PM] ~ Gal Icek: We also need a speaker
[2023-08-10, 10:43:42 PM] ~ Gal Icek: And right now we can't do a movie night bc the hdmi cable + dongle are nissing
[2023-08-10, 10:43:44 PM] ~ Gal Icek: Missing
[2023-08-10, 10:44:00 PM] ~ Gal Icek: So if you know where they are lmk
[2023-08-11, 12:23:11 AM] Dan: BUMP! 😭😭😭😭🥲
[2023-08-11, 12:26:08 AM] ~ Noa Franklin: Hey is anyone available to help my side of the amelimot tzrif w bedtime tn?
[2023-08-11, 12:45:09 AM] ~ Noa Franklin: Pretty please?
[2023-08-11, 12:45:32 AM] Tyler: No
[2023-08-11, 12:59:22 AM] ~ Gal Icek: Now?
[2023-08-11, 1:00:34 AM] ~ Noa Franklin: Soon
[2023-08-11, 1:14:16 AM] Gali Goldman: Jackson, Elsbeth, Alias, Eva, mica you have mail at the bayit!!!
[2023-08-11, 2:19:17 AM] ~ blue: does anyone know where my red JBL speaker is
[2023-08-11, 2:19:30 AM] ~ blue: it was being used during the movie night but i can’t find it
[2023-08-11, 2:19:55 AM] Arielle: I found it
[2023-08-11, 2:23:47 AM] ~ Gavriella TroperHochstein: Would anyone be willing to bring me a cookie and glass of milk in the mo? I’m feshed and it’s all I want in life
[2023-08-11, 2:24:26 AM] Dan: Of course!!! Gavi I'll be there in about 5-10 minutes! :)
[2023-08-11, 2:24:35 AM] ~ Gavriella TroperHochstein: Thanks Dan!
[2023-08-11, 2:25:22 AM] Dan: Kidding I'm coming rn!
[2023-08-11, 2:26:22 AM] Dan: Wait do you want the milk warmed up?
[2023-08-11, 2:26:35 AM] ~ Gavriella TroperHochstein: cold is fine :)
[2023-08-11, 2:28:03 AM] Dan: Ok
[2023-08-11, 2:28:04 AM] Dan: :)
[2023-08-11, 2:47:15 AM] ~ Hilla Kabazo: Come have fun w feshers in the moooo we miss u ❤️
[2023-08-11, 11:59:46 AM] Ron: image omitted
[2023-08-11, 12:48:29 PM] Dan: I love how Ron brings in shabbos
[2023-08-11, 12:58:16 PM] Gali Goldman: hi everyone! I'm off tonight until tomorrow night so if you have photos from tiyul/kupa trip etc. please send them over now!! I would love to upload them before i'm off🐠 shabbat shalom💜
[2023-08-11, 1:55:06 PM] Shai Rubin: Shabbat asepha in the mo now!!
[2023-08-11, 1:55:17 PM] Shai Rubin: be there or be square
[2023-08-11, 1:55:43 PM] India: COME NOW
[2023-08-11, 2:00:19 PM] Shai Rubin: If you aren’t here you might be signed up for shlav aleph and there’s nothing you can do about it
[2023-08-11, 2:08:24 PM] ~ Ana: This message was deleted.
[2023-08-11, 2:25:33 PM] ~ Eli: image omitted
[2023-08-11, 2:25:38 PM] ~ Eli: image omitted
[2023-08-11, 2:29:39 PM] ~ Sadie Quinn: Thanks Eli!
[2023-08-11, 2:30:41 PM] Shai Rubin: Important PSA: During rikkud, please do NOT play soccer or gaga ball with kids. They should be doing rikkud. Early night soccer is not a thing. It should not become a thing. The only option at that time is rikkud.
[2023-08-11, 2:31:32 PM] Shai Rubin: That also means you should be doing rikkud if you don’t have another tafkid. Unless you have other obligations, your only option at that time is rikkud.
[2023-08-11, 2:31:37 PM] Shai Rubin: Thank youuu :)
[2023-08-11, 2:33:11 PM] ~ Sadie Quinn: Extra reminders for Shabbat:
- Be at all machaneh wide activities if you don’t have another tafkid! That means shira, rikkud, musicale, havdallah, medura!
- PLEASE be present during the running game and tableau, either leading or participating. Make sure kids don’t abuse the madatz!!!
[2023-08-11, 2:35:46 PM] Omer: Im off saturday night so i cant do ice cream
[2023-08-11, 2:39:38 PM] ~ Sadie Quinn: Thanks for letting us know!
[2023-08-11, 2:53:18 PM] ~ Ana: Can anybody switch out for toranut today? I have a really bad headache 😬
[2023-08-11, 2:53:42 PM] Ron: Me but I can’t for dinner cus I’m off
[2023-08-11, 2:54:21 PM] ~ Ana: That works perfectly
[2023-08-11, 2:55:16 PM] Ron: Slay
[2023-08-11, 3:26:37 PM] ~ Talya Stein: Friendly hoda’ah to ALWAYS make sure your kids have permission to ask for granola bars!!! Kids shouldn’t be coming alone into the mitbach or asking for snacks 1.5hrs before or after meals!! xoxo
[2023-08-11, 3:38:14 PM] Ron: HODAAH: Vaad Aliyah Bet needs Tzvatim to make lists of about 5 kids from each kvutzah who would be fine for being kidnapped/interrogated for one of the stations: Choose kids that wouldn’t get scared ///// we need the lists by tonight
Love
Vaad Aliyah bet
[2023-08-11, 3:38:29 PM] Ron: Excluding amchatz cus they leave
[2023-08-11, 4:55:40 PM] Mira: There is friendship bracelet string on the outside table of the myad, otherwise the myad is CLOSED during this block. If kids ask to go pls say no!!
[2023-08-11, 5:03:17 PM] ~ Gal Icek: If you can come and help for 5 minutes to get sit on tops tp the chof now the Amelimot will very much appreciate
[2023-08-11, 5:06:55 PM] ~ Solomon Bodrug: /tp chof
[2023-08-11, 5:09:04 PM] ~ Shani Avrahami Saraf: Is anyone available to come hang out at gender neutral?
[2023-08-11, 5:24:35 PM] ~ Gavriella TroperHochstein: If this is still needed I can come in 5 minutes
[2023-08-11, 5:24:53 PM] Mira: It’s all covered
[2023-08-11, 5:41:25 PM] ~ Eli: I am
[2023-08-11, 5:41:25 PM] ~ Eli: Also on that note can someone sweep during chug alef and bet instead I have been requested to run a chug
[2023-08-11, 5:41:33 PM] ~ Tal Fisher-Taylor: image omitted
[2023-08-11, 5:47:06 PM] ~ Gal Icek: Hiii Amelimot will agin appreciate your help getting the boats up
[2023-08-11, 5:49:51 PM] ~ Sadie Quinn: Mishpachot for this week are as follows:
- Vancouver 1: Zac, Maayan, Edden
- Vancouver 2: Mairav, Lila, Rafi
- Vancouver 3: Blue, India
- Vancouver 4: Monty, Prielle
- Vancouver 5: Nadav, Mikal
- Richmond: Shai, Lyrie
- Portland/Seattle: Tali, Mica, Gavi
- Random USA: Dani, Evan
- Random Canada: Mira, Jacob
- Victoria: Dan, Eva, Ana
- Israel: Yair, Noa B, Eli
- Suburbia North: Arielle, Ron
- Suburbia South: Yvonne, Yonni
- Sunshine Coast: Ira
[2023-08-11, 5:50:03 PM] ~ Sadie Quinn: I appreciate everyone’s cooperation since two tzvatim are still away, thank you for your understanding if you’re not assigned to your first choice
[2023-08-11, 5:50:22 PM] ~ Sadie Quinn: Also no need to read the names of Shomrimot and Tzofimot if they're not back yet!
[2023-08-11, 5:54:15 PM] Gali Goldman: Reminder that you all need to talk to leya before Shabbat
[2023-08-11, 5:54:20 PM] Gali Goldman: Better yet, come now
[2023-08-11, 6:02:23 PM] ~ Hilla Kabazo: 🫵🫵🫵
[2023-08-11, 6:06:17 PM] Ron: I can’t do suburbia I’m off
[2023-08-11, 6:14:43 PM] ~ Sadie Quinn: All good, Elsbeth can do it
[2023-08-11, 8:15:52 PM] Gali Goldman: IF U SEE A PINK NALGENE WITH STICKERS PLEASE LET ME KNOW
[2023-08-11, 9:22:46 PM] ~ Mica: Tonight’s chevrati is ODDS NIGHT. So be there DUH!!!!
[2023-08-11, 9:42:52 PM] ~ Hilla Kabazo: 12?
[2023-08-11, 10:13:40 PM] ~ Monty: SLAY👹
[2023-08-11, 10:14:18 PM] ~ Monty: Does anyone have a sewing kit by any chance?
[2023-08-11, 10:24:50 PM] ~ Prielle Laniado: does anyone have a tide stick!!
[2023-08-11, 10:57:09 PM] ~ Tal Fisher-Taylor: Yes!
[2023-08-12, 12:02:13 AM] ~ Ana: Longggg shot but if anyone does not wanna a participate in odds night and does want to do shmira tonight let me or Edden know hehe
[2023-08-12, 12:02:24 AM] ~ Ana: Super fair if not I just thought I would ask hehe
[2023-08-12, 12:10:14 AM] ~ mai: Is anyone boating during chug alef or bet?
[2023-08-12, 12:11:02 AM] ~ Gal Icek: No
[2023-08-12, 12:16:37 AM] ~ Lila: 72 GET YOUR BUTT UP HERE FOR MADATZ CALLS WE HAVE A REPUTATION TO UPHOLD
[2023-08-12, 12:20:05 AM] ~ Hilla Kabazo: 69 WHAT THE FUCKKKK
[2023-08-12, 12:20:19 AM] ~ Hilla Kabazo: IF UR ON GET OVER HERE
[2023-08-12, 12:30:49 AM] ~ Solomon Bodrug: reminder: @16043194130 You are Madrichol Toran today! 😁 This means washing all sevvy dishes and wiping down surfaces!
[2023-08-12, 12:57:13 AM] ~ Lila: @12504448544 Ira is off tn I can cover after my kids are asleep
[2023-08-12, 1:11:18 AM] ~ Sadie Quinn: Big thank you to whoever washed the water cups!!! Actually made my night
[2023-08-12, 1:17:17 AM] ~ Zevi: If anyone sees Monty or Alias or Dan send two of them to their kids to be present for bed time
[2023-08-12, 1:23:36 AM] ~ mai: @12063516681 + @16048625227 for Canadian wildfires and @16044406994 + @17789855311 for "Period. End of Sentence", I wrote and prepped everything, it's waiting for you in the old order form box in the misrad techni. @16046710426 + @16049701816 everything is prepped and written for Maya Angelou in the tzofimot box in the machzan. Please look it over before you go to bed! Other people running chugei alef are: Ologies with @16047257054 + @16042305933, and Trans community building with @12368866575 + @12505508598
[2023-08-12, 1:24:11 AM] ~ mai: The chugei bet are:
[2023-08-12, 1:24:22 AM] ~ mai: Spa day - SODO, Zev, India
Galil dance - SODO, Shai, Omer
Twilight - Mairav, Auggie
Chof exploration - Rafi, Shmeppy
Brecha - Sarah, Elsbeth, Jane
[2023-08-12, 1:24:36 AM] ~ mai: If any of these don't work pls message me asap
[2023-08-12, 1:28:25 AM] Dan: Can I still do chug bet for yeat? I have three very excited bonim boys who are quite intrigued...
[2023-08-12, 1:38:07 AM] ~ Ira Spiegelman: You rock. I’ll get yours when you’re on titan
[2023-08-12, 1:38:12 AM] ~ Ira Spiegelman: Toran*
[2023-08-12, 1:39:26 AM] ~ mai: Maybe next week!
[2023-08-12, 1:43:08 AM] ~ Sadie Quinn: Reminder of tafkidim for tomorrow morning:
Breakfast shlav aleph (8:00): Sarah and me
Shlav bet (9:00): Mira, India
Breakfast toranut (9:30): Eva, Dan
Kima (9:45): Prielle, Mikal
Please be on time!!
[2023-08-12, 1:57:12 AM] ~ Hilla Kabazo: What timeeee
[2023-08-12, 2:02:19 AM] ~ Hilla Kabazo: Riff raff! Where’s the laundry bag at?
[2023-08-12, 2:03:53 AM] Alias: Laundry leaves in the morning correct, I just want to make sure that if I do this late in the night it won’t be gone
[2023-08-12, 2:04:50 AM] ~ Gal Icek: True
[2023-08-12, 2:15:03 AM] ~ Mica: CHEVRATI AT 12!!  ODDS NIGHT AT 12!!!
[2023-08-12, 2:26:45 AM] ~ Ira Spiegelman: Escor?
[2023-08-12, 2:26:52 AM] ~ Ira Spiegelman: Escort
[2023-08-12, 2:26:55 AM] ~ Mica: Coming
[2023-08-12, 2:27:28 AM] ~ Jane: who’s that
[2023-08-12, 2:28:15 AM] Dan: Escargot I hardly know snails
[2023-08-12, 2:35:32 AM] ~ Lila: if you would like your dishes washed please bring them in the next little bit :))
[2023-08-12, 2:44:16 AM] ~ Talya Stein: YESSS mitbach closing at 12 :)
[2023-08-12, 2:45:53 AM] Ron: Talya pls can you bring me my pickle and tajin from the walk in fridge and also my fruit roll ups
From the dry storage
[2023-08-12, 3:03:01 AM] ~ Mica: EVERYONE TO THE MO NOW!!!
[2023-08-12, 3:57:58 AM] ~ Gavriella TroperHochstein: video omitted
[2023-08-12, 4:04:16 AM] ~ Maisie: That was mean >:0
You should have let Dan hook elbows with you and do the end of the dance :(
[2023-08-12, 4:04:28 AM] Dan: Fax!;
[2023-08-12, 4:33:06 AM] ~ mai: image omitted
[2023-08-12, 12:48:17 PM] Rafi: Does amchatz shower today?
[2023-08-12, 1:01:08 PM] ~ Maisie: image omitted
[2023-08-12, 1:01:25 PM] ~ Maisie: image omitted
[2023-08-12, 1:01:47 PM] ~ Sadie Quinn: Message me ASAP if you need a specific location for your chug aleph!
[2023-08-12, 1:43:39 PM] Alias: Who wants to do trans people and Ebic cool favour
[2023-08-12, 1:43:43 PM] Alias: If you do come to the tree house to talk to me
[2023-08-12, 2:10:09 PM] ~ Alex (shmeppy): can someone replace me for middle running, not feeling the best
[2023-08-12, 2:46:30 PM] ~ Sadie Quinn: Toranut achshav! That’s Ira, Alias, Yair, Zevi, Yvonne, Edden, Jackson, Hilla, and anyone else who is free!
[2023-08-12, 2:46:56 PM] ~ mai: If you’re not doing anything pls go help out!
[2023-08-12, 2:52:15 PM] ~ Noga Goldman: If anyone sees a black watch pls let me know I lost mine! 🫠
[2023-08-12, 2:57:34 PM] Dan: Is it just electric
[2023-08-12, 2:57:40 PM] Dan: I saw one In chadar?
[2023-08-12, 2:57:45 PM] Dan: No name hrand
[2023-08-12, 2:58:39 PM] ~ Alex (shmeppy): pls🥲
[2023-08-12, 3:02:22 PM] ~ Noga Goldman: Yes!! I think I left it there on toranut. Can you please grab it for me?
[2023-08-12, 3:02:42 PM] Dan: I will! One sec
[2023-08-12, 3:02:52 PM] ~ Noga Goldman: Thank you!
[2023-08-12, 3:04:51 PM] Dan: Where are you rn I have it?
[2023-08-12, 3:08:09 PM] Dan: @16043797595 ?
[2023-08-12, 3:09:41 PM] ~ Noga Goldman: Im on fesh but ill be back in the afternoon
[2023-08-12, 3:10:35 PM] Dan: Cool I'll put it on ur desk :)
[2023-08-12, 3:23:32 PM] ~ Hilla Kabazo: @12505508598 @17789518206 @15038408297 where u at girlies
[2023-08-12, 3:24:56 PM] Alias: Just saw this coming
[2023-08-12, 3:26:08 PM] ~ Lila: can anyone who is free come to hydro to help we’re all dead
[2023-08-12, 3:47:06 PM] Ezra: https://docs.google.com/document/d/1WEa_DdEcDPjOwhVFZsInRuvljQ89lznXvRHbCv-g3rQ/edit?usp=sharing
[2023-08-12, 4:27:12 PM] Edden: if anyone can come help with toranut, please do
[2023-08-12, 4:29:48 PM] ~ Shani Avrahami Saraf: If anyone sees nadavs phone - a black iPhone 8 - please give it to him. Or don't, as a funny prank up to you
[2023-08-13, 1:28:11 AM] ~ Solomon Bodrug: second this, the chadar is really bad! pls pls plssss
[2023-08-12, 6:48:25 PM] ~ Gavriella TroperHochstein: Madatz pish locations:
Amelimot - mirpeset
Chalutzimot - janusz
Sayarimot - golda
Chotrimot - gezer
Shomrimot - AD Gordon
Tzofimot - MYM
[2023-08-12, 8:08:41 PM] Dan: Shout-out @17789885915 she did an excellent and amazing job on making sure the mo is nice and tidy. We all (especially me 🙏) appreciate that!! Let's try to keep it clean! If you notice a garbage can is full etc. Deal with it. Clean up messrs etc :)
[2023-08-12, 8:11:36 PM] ~ Maisie: image omitted
[2023-08-12, 8:14:09 PM] Ron: Thanks Yvonne pulling through as usual
[2023-08-12, 8:27:54 PM] Edden: @tzofimot tzevet please send me a list of 5 kids who you think would like to be kidnapped during a harigots fair on aliyah bet
[2023-08-12, 8:39:38 PM] ~ Sarah: heyyoo what is the code for the sports shed lock? we want to find the volleyball net
[2023-08-12, 8:40:20 PM] ~ Gal Icek: 124
[2023-08-12, 8:45:43 PM] ~ Sarah: ok i tried that but it didnt open 😵‍💫i will try again
[2023-08-12, 8:46:04 PM] ~ Monty: You have to push it in!
[2023-08-12, 8:46:13 PM] ~ Monty: Like put in the code then push it a bit then it’ll pop out
[2023-08-12, 8:46:50 PM] ~ Sarah: gotcha thank you!!
[2023-08-12, 8:50:38 PM] ~ Gavriella TroperHochstein: Who is available to do shmira tonight? Maayan is signed up but he cannot do it
[2023-08-12, 8:56:01 PM] Rafi: Is anyone able to do toranut tonight? I will take your toranut on another day.
[2023-08-12, 9:34:26 PM] ~ Maayan: Send me funny things about your kids for triple m!!!!!!!
[2023-08-12, 9:54:51 PM] Rafi: WHERE IS TZEVET??
[2023-08-12, 9:54:59 PM] Rafi: there is no one in the chadar
[2023-08-12, 9:55:17 PM] ~ Zevi: Bonim sodo and madatz tzevet is in a meeting
[2023-08-12, 9:56:57 PM] Rafi: Ok cool
[2023-08-12, 10:35:29 PM] ~ Solomon Bodrug: image omitted
[2023-08-12, 10:36:47 PM] ~ Lila: oh gosh so sorry will do
[2023-08-12, 10:57:40 PM] ~ Maisie: How about the fact that they won’t stop coming to the Mitbach door constantly whining for fucking granola bars?
[2023-08-12, 11:00:06 PM] Tyler: Could some1 send the chofnof combo plz
[2023-08-12, 11:17:20 PM] Dan: Pmd
[2023-08-13, 1:44:20 AM] ~ Prielle Laniado: *⭐️tikkun olam psa:*⭐️
a couple kvutzots dates got switched around a bit this week and i want everyone to be on the same page!

tzofimot - august 14
shomrimot- august 15
sayarimot - august 16
[2023-08-13, 1:58:36 AM] ~ Zevi: image omitted
[2023-08-13, 2:04:14 AM] ~ Eli: That’s Alias’s
[2023-08-13, 2:34:02 AM] ~ Monty: What time is the briefing?
[2023-08-13, 2:34:03 AM] ~ Monty: Finishing up with amel
[2023-08-13, 2:36:08 AM] ~ Gal Icek: Hi! Since most of machaneh is not sleeping yet we will do the briefing at the tzevet asepha
[2023-08-13, 2:36:12 AM] ~ Gal Icek: This message was deleted.
[2023-08-13, 2:36:17 AM] ~ Gal Icek: Lila tov
[2023-08-13, 2:36:56 AM] ~ Monty: Should ppl who are going for big day get a run down when we’re back?
[2023-08-13, 2:37:11 AM] ~ Gal Icek: Ya
[2023-08-13, 1:23:04 PM] Shai Rubin: https://forms.gle/pM4M3zG8XtK9LyJE8 This is the character sign-up sheet for Yom Meyuchad! Do it ASAP if you want to be a character!
[2023-08-13, 1:26:42 PM] ~ Ira Spiegelman: Uh there’s no place to enter your name. So idk how you’ll know who’s filling out the form
[2023-08-13, 1:27:18 PM] ~ Oliver: It is registered w the account submitting the form
[2023-08-13, 1:27:56 PM] ~ Oliver: At the top: “submitted by: @email”
[2023-08-13, 2:06:28 PM] Rafi: What if your email is broken
[2023-08-13, 2:06:32 PM] Rafi: And you can’t sign in
[2023-08-13, 2:15:42 PM] ~ Ariella Smith-Eidelman: hi friends no nicotine products were purchased yesterday because our debit card stopped working in the middle of the shopping so if you ordered something yesterday please order it again and there is a drive tmrw. Sorry bout this
[2023-08-13, 2:17:04 PM] Tyler: Screaming crying and throwing up rn
[2023-08-13, 2:17:35 PM] Dan: I think that's just called nicotine withdrawal my broski
[2023-08-13, 2:19:58 PM] ~ Ariella Smith-Eidelman: I lied that things that were not purchased yesterday because of the debit card will be purchased today
[2023-08-13, 2:27:27 PM] Tyler: Prayer hands emoji
[2023-08-13, 2:56:35 PM] ~ Alex (shmeppy): image omitted
[2023-08-13, 3:03:25 PM] Ron: 💀
[2023-08-13, 3:11:56 PM] Rue: This message was deleted.
[2023-08-13, 3:14:57 PM] Rue: image omitted
[2023-08-13, 3:15:23 PM] ~ Alex (shmeppy): sadie is so cute
[2023-08-13, 3:18:03 PM] Rue: Soccer is now basketball
[2023-08-13, 3:22:51 PM] ~ Mica: You are getting new madatz today!! Not all the madatz have been told so please don’t say anything yet but here are the additions:
Sayarimot- Sivan and lola
Shomrimot- sahra and Adao
Tzofimot- Liad and bec
[2023-08-13, 3:29:04 PM] Shai Rubin: https://forms.gle/7NHUGCUw5rWzvJQc8 IMPORTANT: I forgot to put a section asking for names. I added one, but that means that even if you’ve already filled out the form, you need to do it again if you want to be a character. Sorry and thanks!!
[2023-08-13, 3:48:36 PM] ~ Alex (shmeppy): can someone send the toranut  list again
[2023-08-13, 3:53:03 PM] Shai Rubin: if anyone sees my black laptop charger, please let me know. it doesn’t have many defining features so I’m not getting my hopes up but if you see one without a name, please tell me
[2023-08-13, 3:53:16 PM] Shai Rubin: (or if anyone has one I could borrow, that’d be amazing)
[2023-08-13, 5:54:17 PM] Dan: Bruh what the rcmp keep on driving around by the Gabriola ferry terminal shouting to the bc ferries staff asking "WHICH WAY DID HE GO!?!?" anyone know why that is? They keep on driving around on back roads with sirens on?!
[2023-08-13, 5:54:32 PM] Dan: Weird 🤷
[2023-08-13, 5:54:39 PM] ~ Gavriella TroperHochstein: uh oh
[2023-08-13, 5:54:57 PM] ~ Oliver: My bad
[2023-08-13, 5:55:03 PM] Dan: Like they've circled around 15 times in 3 minutes bruh
[2023-08-13, 5:55:15 PM] Dan: I hope it's not a danger
[2023-08-13, 5:55:20 PM] ~ Alex (shmeppy): prolly rafi
[2023-08-13, 5:55:38 PM] Dan: Just stan the machaneh monster maybe 💭
[2023-08-13, 6:17:43 PM] Ezra: image omitted
[2023-08-13, 6:18:01 PM] ~ Talia Joffe: August 13th tzevet asepha
Bonimot are not doing ivrit
There is missing tiyul gear. Return it!!! And do your tiyul dishes
Nachshanimot sem is happening. If you need the janusz, ad Gordon, and migrash for chuggim, talk to Shani
Zman madatz is not happening
If the phone in the techni office rings, answer it. Say “shalom camp Miriam”. Leave the technis a note with their message, name and number
We’re back in strict cougar protocols! No walking alone after sunset
If you have spare time and want to do art, come help with yom meyuchad kish
Tell Ariella where you’re meeting for chuggim before the block
[2023-08-13, 6:19:55 PM] Rue: Shomrimot meeting in the misrad rosh
[2023-08-13, 6:32:54 PM] Yonnie: image omitted
[2023-08-13, 6:48:57 PM] ~ Monty: 👀👀👀👀
[2023-08-13, 7:11:57 PM] Ron: Would anyone help out with ivrit for shomrim we are short on people 💙
[2023-08-13, 7:23:23 PM] ~ Lila: where are you guys
[2023-08-13, 8:20:14 PM] Dan: @12063516681 wya Ariella said u need help 4 chug
[2023-08-13, 8:28:27 PM] ~ Ira Spiegelman: Hey. I’m bringing kids towards surf along the water. So on the off chance anyone is over there doing things kids shouldn’t see (smoking) just a heads up
[2023-08-13, 8:29:30 PM] Tyler: IK service can be shit over there so mayb send a runner to walk a bit ahead and let ppl know
[2023-08-13, 10:13:10 PM] ~ Sadie Quinn: Come to the techni to get stuff for tochnit erev! Especially if you are a station leader or a character!
[2023-08-13, 10:34:54 PM] ~ Sadie Quinn: If anyone sees Jascha or Nina  send them to the misrad techni!
[2023-08-13, 10:41:29 PM] ~ Alex (shmeppy): does anyone have dark lipstick they could let me use rn!!!
[2023-08-13, 10:41:32 PM] ~ Alex (shmeppy): i’m in techni!!!!
[2023-08-13, 10:52:27 PM] ~ Sadie Quinn: @16047257054 @17788740130 come to the Janusz achshav!!!
[2023-08-14, 12:04:07 AM] ~ Noa Franklin: Hey I’m on madrichol toran tomorrow but am unable to yell, does anyone want to do seder Yom/hodaot?
[2023-08-14, 12:04:43 AM] ~ Noa Franklin: I would do all other madrichol toran responsibilities so u get all the fun with all the sleep
[2023-08-14, 12:12:34 AM] Edden: i can do that
[2023-08-14, 12:13:18 AM] ~ Noa Franklin: Omg icon slay I love u
[2023-08-14, 12:20:32 AM] ~ Lila: if anyone needs help with bedtime lmk!
[2023-08-14, 12:33:26 AM] ~ Gal Icek: Aliya bet can use your help with chadar set up
[2023-08-14, 12:33:42 AM] ~ Gal Icek: So if your not doing anything come help please
[2023-08-14, 12:38:25 AM] ~ Monty: Plz come!
[2023-08-14, 12:49:45 AM] ~ Mica: Wait please can I haven’t done it yet this summer
[2023-08-14, 12:50:10 AM] ~ Gavriella TroperHochstein: is there a Seder Lila? Madatz are doing something but I want to know when to cut it off and send them to help
[2023-08-14, 12:50:20 AM] Mira: image omitted
[2023-08-14, 12:53:51 AM] Dan: Shout-out my hoe goobi (we so up-up-up-up-UPPPPP!!!) 🥷😼🦁🙀✌️🔫
[2023-08-14, 12:58:39 AM] Dan: Also @12674156338 we doing Shmira TN #vibez
[2023-08-14, 1:00:07 AM] Dan: Wait I lied @17788775651 me n u finna pull up to the Mirp 10:15 like yeaaaaa
[2023-08-14, 1:13:29 AM] ~ Alex (shmeppy): what time r tzofimot getting woken up
[2023-08-14, 1:29:37 AM] Omer: Are the new madatz moving in today
[2023-08-14, 1:29:37 AM] Omer: Cuz like if yes we need help bringing the bunk beds
[2023-08-14, 1:33:03 AM] ~ Eli: At 12:20
[2023-08-14, 1:36:34 AM] ~ Gavriella TroperHochstein: Bunk beds will be moved in the morning
[2023-08-14, 1:36:39 AM] ~ Gavriella TroperHochstein: For tzofimot
[2023-08-14, 1:49:53 AM] ~ Mica: What time is kima tomorrow?
[2023-08-14, 1:50:25 AM] ~ Noga Goldman: 8:15 - regular kima
[2023-08-14, 1:52:49 AM] ~ Mica: Thank you
[2023-08-14, 1:54:51 AM] ~ Jackson Nozick: I thought we got a sleep in
[2023-08-14, 2:01:03 AM] ~ Mica: The madatz have been told that Aliya bet was canceled because of the cougar and specifically that it was seen on the chof so please help us keep that messaging to them consistent
[2023-08-14, 2:01:54 AM] ~ Shani Avrahami Saraf: Same with sodo!
[2023-08-14, 2:04:20 AM] ~ Lila: everyone go to bed 🫶
[2023-08-14, 2:04:57 AM] ~ Tal Fisher-Taylor: Except if you're Zevi - see you soon ❤️
[2023-08-14, 2:07:10 AM] ~ Sadie Quinn: Also a reminder not to discuss things in the sevvie because Madatz are in there a lot
[2023-08-14, 2:13:43 AM] Omer: @bonimottzevet are the bonim running ivrit tmrw?
[2023-08-14, 12:33:20 PM] ~ Solomon Bodrug: sysco is here so please keep the upper kvish CLEAR of children and things!
[2023-08-14, 12:45:12 PM] Rue: shira off block group 1 today
[2023-08-14, 1:04:08 PM] ~ Sadie Quinn: 🔥There is a heat warning today!🔥
Stay in the shade as much as possible and tell your kids to bring their water bottles everywhere. We will be doing hydration games at shira (and you should do them at pish, zman sport, etc.)
[2023-08-14, 1:45:17 PM] Rafi: image omitted
[2023-08-14, 2:53:53 PM] ~ Zachary Bunim: yes sorry. this is happening
[2023-08-14, 2:59:40 PM] ~ Lila: madatz tzevet your laundry is outside the misrad techni
[2023-08-14, 3:00:06 PM] ~ Mica: Yes my bad I will move it stat
[2023-08-14, 3:13:01 PM] ~ Ariella Smith-Eidelman: hii there were some laundry bags left at the laundromat yesterday so 4 more bags will be coming today!
[2023-08-14, 6:03:01 PM] ~ Talia Joffe: August 14th tzevet asepha
 the mountain lion (cougar) has become a lot more active, which means we’re WAY more vigilant. This means that sayarimot and chotrimot need to wake a madrichol up at night to go to the bathroom, shomrimot and up need to take a buddy. Tzevet is not allowed to walk alone at night. As soon as the sun sets, we’re being hyper vigilant.
We need more tzevet outside and singing before the chadar doors open for lunch and dinner
Refill the toilet paper when doing sherutim. Just refill it, we need it
Reminder to Rosh gadol. Put stuff back and if you see something, deal with it
Bonimot are doing ivrit today
BB takeover is at kibbud tomorrow
Tell Ariella where your chug is meeting before chuggim starts. There are kid lists on her desk
We’re nearing the end of the session. There’s a couple more drives left. If you want to order things for your final mess, you should start now
[2023-08-14, 6:09:11 PM] ~ Sadie Quinn: image omitted
[2023-08-14, 6:12:35 PM] ~ Zachary Bunim: can someone supervise gender neutral showers please?
[2023-08-14, 6:17:52 PM] Mira: I can’t sorry
[2023-08-14, 6:18:23 PM] ~ Noa Franklin: I can
[2023-08-14, 6:18:31 PM] ~ Noa Franklin: Omw
[2023-08-14, 6:19:37 PM] Dan: This message was deleted.
[2023-08-14, 6:19:48 PM] Dan: This message was deleted.
[2023-08-14, 6:21:55 PM] ~ Lyrie Murad: Nadav says: Please please please keep your eyes peeled for a black iPhone 8 (probably in the Mo) it’s been missing since odds night. If you had a bag that night could you also check if u took it I am quite desperate to find it
[2023-08-14, 6:32:28 PM] India: i’m supervising gender neutral showers but i have a kesher meeting
[2023-08-14, 6:32:34 PM] India: can some1 tap me out🤞
[2023-08-14, 7:00:11 PM] Shai Rubin: https://forms.gle/xs98LYcpYEaUhfhg7b This form is closing tonight at rad hayom! If you want to be a character for yom meyuchad, do it before then.
[2023-08-14, 7:00:32 PM] Shai Rubin: also if someone on Madatz tzevet could pass that info along to the Madatz, that’d be amazing
[2023-08-14, 7:16:02 PM] ~ Joanna: image omitted
[2023-08-14, 7:16:54 PM] ~ Mikal Stein: Link doesn’t work
[2023-08-14, 7:25:33 PM] ~ blue: i put my red jbl speaker to charge in the techni and it’s not there anymore
[2023-08-14, 7:25:34 PM] ~ blue: lmk if u see it
[2023-08-14, 9:09:33 PM] ~ Ariella Smith-Eidelman: Missing laundry is here in the gezer !!
[2023-08-14, 9:57:20 PM] ~ Ana: Hi all miss you very very very very very very very very much. I was wondering if anyone ever got like a photo or video of the camp song I made so I can send it to cornerstone cause they wanna see
[2023-08-14, 10:13:51 PM] ~ Jackson Nozick: I didn't take any photos or videos but I just wanted to say ur song is great and I hope it stays a part of the camp songs
[2023-08-14, 10:14:42 PM] Dan: audio omitted
[2023-08-14, 10:15:02 PM] Dan: @17786782703 miss you ❣️
[2023-08-14, 10:15:20 PM] ~ Hilla Kabazo: Who has a red bandana I can borrow 😘😘
[2023-08-14, 10:53:04 PM] ~ Louis: I have one
[2023-08-14, 10:57:14 PM] Gali Goldman: Alias, Eva, Jackson you all have mail in the mo
[2023-08-14, 11:15:51 PM] India: https://vm.tiktok.com/ZM2Ke59VM/
[2023-08-14, 11:16:04 PM] India: this is shmeppy in 60 years
[2023-08-15, 12:02:58 AM] ~ Alex (shmeppy): fax
[2023-08-15, 12:13:28 AM] ~ Zachary Bunim: i completely forgot to say this in the asepha but if anyone has watches or fanny packs they can lend to the bonimot please let me know ASAP!! they really need them. thanks so much
[2023-08-15, 12:30:08 AM] ~ Tal Fisher-Taylor: I can!!
[2023-08-15, 12:30:11 AM] ~ Tal Fisher-Taylor: Two even
[2023-08-15, 3:19:14 AM] ~ mai: Can someone walk the feshers
[2023-08-15, 3:20:10 AM] ~ mai: 🙏🙏🙏🧁🤭🤭🤭
[2023-08-15, 3:45:24 AM] Shai Rubin: Here’s the cast list for yom meyuchad:
Emmet: Ollie
Wyldstyle: Mairav
Vitruvius: Edden
Lord Business: Zevi
Batman: Zac
Unikitty: Sadie
Metalbeard: Jane
Benny: Eva
Bad Cop: Prielle
Superman: Yair
Wonder Woman: Auggie
Abe Lincoln: Gemma
Shakespeare: Bec
Gandalf: Dan
Cowboys: Sunny and Elias
Construction Workers and Micromanagers: TBD

If you have a problem with your role, please let me know. Also, Madatz tzevet should please let the Madatz know if they have roles.
[2023-08-15, 5:15:19 AM] Rafi: image omitted
[2023-08-15, 5:15:24 AM] Rafi: Who made this?
[2023-08-15, 5:29:31 AM] Rafi: video omitted
[2023-08-15, 12:24:45 PM] ~ Alex (shmeppy): where r mirp ppl, there is no one here
[2023-08-15, 12:25:47 PM] ~ Tal Fisher-Taylor: Ok is it urgent
[2023-08-15, 12:26:44 PM] ~ Alex (shmeppy): nvm ppl r here
[2023-08-15, 1:13:29 PM] ~ Alex (shmeppy): is there a new order form or do we will out the one that says all orders in by august 13
[2023-08-15, 1:17:23 PM] Rafi: image omitted
[2023-08-15, 1:31:53 PM] ~ Solomon Bodrug: video omitted
[2023-08-15, 1:41:55 PM] Omer: Can someone say on the ramkol that tzofimot are meeting on the lower kvish
[2023-08-15, 1:41:56 PM] Omer: Like when you say pish spaces
[2023-08-15, 1:53:21 PM] ~ Ilana Sela: Hello friends, family, and ariella. We are saddened to inform you that we will be in process of closing the grofit for winter. This matters not to any of you, as you were not allowed into the grofit anyways, but it does mean that if we see you with tiyul gear, including but not limited to, rope, carabiners, tarps, we will be taking them on site. I know there’s about 10 of you with beaners from the grofit, so it is time you find a new solution to trying to look like a cool outdoorsy BC person. We appreciate your cooperation,
Warmest regards,
The tiyul specialists.
[2023-08-15, 3:02:34 PM] ~ Alex (shmeppy): image omitted
[2023-08-15, 3:36:57 PM] ~ Maayan: Sophie and nina are missing their entire bag of laundry if anyone has seen it please let me know! It’ll be either number 13, 14 or 15
[2023-08-15, 4:25:22 PM] ~ Tal Fisher-Taylor: Ice pack returned = prize
[2023-08-15, 4:47:59 PM] Dan: @tzofim tzevet I'm showering with y'all after lunch
[2023-08-15, 4:55:30 PM] Dan: image omitted
[2023-08-15, 4:55:46 PM] Dan: **two days
[2023-08-15, 5:18:26 PM] ~ Jackson Nozick: We have number 13 in shomrim shetach
[2023-08-15, 5:34:01 PM] ~ Ariella Smith-Eidelman: We will figure it out
[2023-08-15, 5:45:20 PM] ~ Mica: What do we need to bring for this afternoon? Madatz want to prep their stuff before Zman madatz
[2023-08-15, 5:45:45 PM] ~ Ariella Smith-Eidelman: Chill stuff, bathing suit, towel, water bottle, 17 pine cones
[2023-08-15, 5:55:24 PM] ~ Talia Joffe: August 15th tzevet asepha
Mattresses don’t leave machaneh property. If you move them, bring them back. They’re $500 each, don’t wreck them. Take care of things at machaneh
Don’t leave garbage around machaneh. Pick it up and deal with it. Rosh gadol. Remind kids to throw out granola bar wrappers.
If you are on the cast list for yom meyuchad, talk to mira about costumes
No asepha on Thursday, we will be signing up for chug alef tomorrow
Kibbud will be happening at the migrash today. Gather your kids there. The MIGRASH
If you’re medura pit superstar, you should be at the medura pit for every meal. Do it!!
If you’re a tall person, please don’t stand at the front by the song board cause then kids can’t see
Gather chill stuff, a bathing suit and towel, water bottle, and other things, and 17 pine cones each once takeover happens. Meet at the bus at 4:30
When we get dropped off after the evening off, we are all going to our respective mos so we don’t get in the way of the Bonimot. Do not go anywhere else. Don’t ruin the experience
Tiyul points are starting!! Bring things back to the grofit to get points. Ask ilana and Ollie for rules
If you are leaving for decon and have already told a maz member, text a member of maz to remind them of this. If you have not told them, tell them now
Put garbage bags in the bins. Don’t overflow the garbage bins. Just try to keep that area clean
Be a part of lunch shira. Don’t talk in clumps of tzevet, have fun and sing with the kids
Be respectful of fesh supplies and try not to use them up super fast
Food and other things are being left in the mo overnight… ew, please don’t do that. Clean it up and put it away. You can even use the sink in the mo to wash out your dishes
Don’t let your avodah kids come hang with tzvia when they’re don’t avodah. Tzvia also has work to do and they distract them
If your garbage bin needs to be changed, let Yvonne know so she can deal with it
If you have watches or Fanny packs that you’re willing to pass off to Bonimot or tzofimot, offer them up
[2023-08-15, 6:06:53 PM] Dan: Might be related might not this bag (labeled #6) was found under a bed in a corner of the pea trizf
[2023-08-15, 6:06:53 PM] Dan: @17786860074 was this what you were talking about?
[2023-08-15, 6:07:11 PM] Dan: image omitted
[2023-08-15, 6:18:58 PM] ~ Avishai Jacobson: Shmira is Monty instead of me because I switched with her
[2023-08-15, 7:08:34 PM] ~ Noa Franklin: Hey friends! The code to the shmo lock is 2,17,2
[2023-08-15, 7:08:53 PM] ~ Noa Franklin: Shhhhh don’t tell the kids!
[2023-08-15, 7:23:56 PM] Dan: Where are we supposed to meet
[2023-08-15, 7:24:37 PM] ~ Gal Icek: Bus
[2023-08-15, 7:25:43 PM] Dan: No
[2023-08-15, 7:25:47 PM] Dan: Sodot is using it
[2023-08-15, 7:25:52 PM] ~ Ariella Smith-Eidelman: After us
[2023-08-15, 7:25:58 PM] Dan: Ohhh
[2023-08-15, 7:32:28 PM] ~ Ariella Smith-Eidelman: Come to where the bus would be
[2023-08-15, 7:32:28 PM] ~ Ariella Smith-Eidelman: Now please !
[2023-08-15, 7:44:22 PM] Rue: Dan left his green Gatorade water bottle by the bus if someone could grab it on their way out please
[2023-08-15, 7:54:40 PM] Dan: Frlz I need it #hydratesoidontdiedrate
[2023-08-15, 7:58:48 PM] Dan: Being 100% serious I am already feeling dehydrated and I need water when we get to where ever we are going
[2023-08-15, 8:02:58 PM] ~ mai: For the tzevet staying at camp, here is the seder yom for today: https://docs.google.com/document/d/1ptWzfZN_vau3eUVmO3WqgB_vPLos6EJ96o_FWdXLmFo/edit?usp=sharing
[2023-08-15, 8:12:25 PM] Mira: Can someone tell Siena from madatz that I found their phone?
[2023-08-15, 11:56:54 PM] ~ Maayan: R we allowed to join the dance party yet?
[2023-08-15, 11:57:00 PM] ~ Ariella Smith-Eidelman: Yes !!
[2023-08-16, 12:00:48 AM] ~ Talya Stein: @feshers Mitbach is going to the slab for tonight y’all are more than welcome to join :)
[2023-08-16, 12:00:58 AM] ~ Shani Avrahami Saraf: Is anyone available to shower with sodo after rad hayom? We need one person in each side
[2023-08-16, 12:01:18 AM] ~ Gavriella TroperHochstein: I already showered but I can stand there
[2023-08-16, 12:01:42 AM] ~ Ilana Sela: I need to shower!
[2023-08-16, 12:01:50 AM] ~ Shani Avrahami Saraf: Yay Ty!
[2023-08-16, 12:06:47 AM] ~ Hilla Kabazo: What’s the situation w the dishes
[2023-08-16, 12:06:52 AM] ~ Hilla Kabazo: Is the car here
[2023-08-16, 12:09:19 AM] ~ Ariella Smith-Eidelman: Yea it’s outside gals house
[2023-08-16, 12:18:06 AM] Dan: This message was deleted.
[2023-08-16, 12:18:44 AM] ~ Solomon Bodrug: Mitbach is closing at 11:00 tonight!
-Love, mitbach 🫶
[2023-08-16, 12:20:19 AM] ~ Oliver: I also need to shower
[2023-08-16, 12:20:52 AM] ~ Oliver: So I’m down
[2023-08-16, 12:38:40 AM] ~ Hilla Kabazo: Jacob and I need help on toranut please
[2023-08-16, 12:58:04 AM] ~ mai: If anyone is free please come help with either toranut or Bonim bash clean up! There’s so much to do and our kids are sleepyyyyyyy
[2023-08-16, 1:33:58 AM] ~ Maisie: Where are the other feshers?
[2023-08-16, 1:34:06 AM] ~ Maisie: I really need some weed
[2023-08-16, 1:34:18 AM] Tyler: So real
[2023-08-16, 1:35:24 AM] ~ Maisie: And I haven’t had a drink yet either
[2023-08-16, 1:35:36 AM] ~ Maisie: I’m sober and wondering why
[2023-08-16, 1:35:37 AM] ~ Avishai Jacobson: Me when machaneh
[2023-08-16, 1:36:31 AM] ~ Maisie: Seriously @16045001486 @17787937381 @16046710426 where are you guys?
[2023-08-16, 1:36:50 AM] ~ Maisie: Fuck it, I’m coming for you
[2023-08-16, 1:37:03 AM] ~ Maisie: You’re toast, kiddo
[2023-08-16, 1:37:38 AM] ~ Avishai Jacobson: She means it
[2023-08-16, 1:37:57 AM] ~ Maisie: Imma find your ass
[2023-08-16, 1:38:16 AM] ~ Maisie: Y’all better have Bumper Crop
[2023-08-16, 1:38:20 AM] ~ Alex (shmeppy): no u won’t😹
[2023-08-16, 1:38:30 AM] ~ Maisie: Fuck u
[2023-08-16, 1:38:59 AM] ~ Alex (shmeppy): mitbach should have their own stuff cuz we weren’t given money from mitbach
[2023-08-16, 1:39:48 AM] ~ Maisie: We only had a pittance in drinks and snacks. But I need some *bud*.
[2023-08-16, 1:40:01 AM] ~ Maisie: Im coming for ya
[2023-08-16, 1:40:06 AM] ~ Maisie: And your weed
[2023-08-16, 1:41:25 AM] Rafi: Nah we have enough weed I think
[2023-08-16, 1:41:51 AM] Rafi: Come find us
[2023-08-16, 1:41:51 AM] Rafi: U might not be able to
[2023-08-16, 3:32:49 AM] Rafi: Walker to mo please
[2023-08-16, 3:35:04 AM] Rafi: hello
[2023-08-16, 3:35:11 AM] Rafi: We need to be walked
[2023-08-16, 3:41:27 AM] ~ Maisie: I needz escort (not the sex kind) to the mo >:3
[2023-08-16, 3:41:48 AM] ~ Maisie: Am vewy high :3
[2023-08-16, 3:42:06 AM] ~ Zachary Bunim: escortttt! pls
[2023-08-16, 3:42:30 AM] ~ Maisie: Yes! :D them too :3
[2023-08-16, 3:43:27 AM] ~ Maisie: Please… I needz wifi (´Д)
[2023-08-16, 3:43:55 AM] ~ Maisie: ちょっと待てよ…
[2023-08-16, 3:44:04 AM] ~ Maisie: I have wifi right now
[2023-08-16, 3:44:37 AM] ~ Maisie: This message was deleted.
[2023-08-16, 3:45:59 AM] ~ Monty: Finishing shmira round then will come
[2023-08-16, 3:46:10 AM] ~ Monty: I’ll be 10
[2023-08-16, 3:53:54 AM] ~ Monty: So y’all still need an escort
[2023-08-16, 3:53:57 AM] ~ Monty: Almost done
[2023-08-16, 3:54:50 AM] ~ Maisie: image omitted
[2023-08-16, 3:54:50 AM] ~ Zachary Bunim: no we’re good thank youuu
[2023-08-16, 4:06:51 AM] ~ Prielle Laniado: walker please!!
[2023-08-16, 4:08:36 AM] ~ Prielle Laniado: on rainbow road 🌈 ✨🥸
[2023-08-16, 10:34:45 AM] ~ Talya Stein: Who’s channi’s bday is it today! Tell about me something they love/would eat on a cake!
[2023-08-16, 11:22:25 AM] ~ Gavriella TroperHochstein: Any updates on water? I saw people using uppers last night
[2023-08-16, 11:24:06 AM] ~ Gal Icek: it;s ok
[2023-08-16, 11:24:34 AM] ~ Gavriella TroperHochstein: for all of machaneh?
[2023-08-16, 11:26:12 AM] ~ Gal Icek: ya
[2023-08-16, 12:13:26 PM] ~ Talya Stein: Bumping this! Who’s bday!
[2023-08-16, 12:34:45 PM] ~ Sadie Quinn: Does anyone have a bike they’re willing to lend to feshers? We have no car
[2023-08-16, 4:05:31 PM] ~ Zoe Fenster: Ezra added ~ Zoe Fenster
[2023-08-16, 2:42:44 PM] ~ Shani Avrahami Saraf: image omitted
[2023-08-16, 2:59:06 PM] ~ Shani Avrahami Saraf: We will assign you randomly if you dont sign up!
[2023-08-16, 5:54:14 PM] ~ Talia Joffe: August 16th tzevet asepha
We are critically low on specifically cups, forks, and pitchers. Please return them if/when you use them. It’s not good that we’re so low
Get Leya in the chadar so we can zombie her
If you see a tzevet member with an upset kid, don’t flock to them. It’s overwhelming when there’s too many people around. You can give a little thumbs up to make sure the tzevet member is doing good, and then move on.
If there’s a bathroom that’s in rough shape, rosh gadol that shit. Clean it!!! If you don’t have time to clean it, tell someone else and see if they can clean it
Yom meyuchad briefing is at 11pm (can change). As soon as you’re done with bedtime come to the briefing and help with kish. If you’re a character check in with Mira about costumes
The grofit is closed off to chanichimot. It is a privileged space. Do not let them in there unless they have permission from ilana, Ollie, or Ezra. If you find a kid in there, get them out and tell them not to go in there again
Tonight is sodo final mess. They’ll be around the point/platform/slab. Also give them a nice little nudge to come back next year!
Give yourself time to write final wills for your kids!
Big day is coming up. Talk to your tzevet about who’s doing kid drop off and let Ezra know by end of day tomorrow who’s going.
We need 2 volunteers to drive the uhaul
[2023-08-16, 5:54:29 PM] Rue: image omitted
[2023-08-16, 5:55:43 PM] ~ Gavriella TroperHochstein: If you’re making final wills please try to include the madatz! They’re excited to help!
[2023-08-16, 5:55:57 PM] ~ Shani Avrahami Saraf: SODO Final mess includes an adventure around the point, platform, and slab! Going to be around 7:30 until 10 ish so please don't be doing sus things in those places
[2023-08-16, 5:57:49 PM] Dan: This message was deleted.
[2023-08-16, 5:58:08 PM] Dan: This message was deleted.
[2023-08-16, 6:01:28 PM] ~ Hilla Kabazo: image omitted
[2023-08-16, 6:01:33 PM] ~ Alex (shmeppy): what does sus mean
[2023-08-16, 6:07:47 PM] ~ Shani Avrahami Saraf: Something Unhelpful for Sodo
[2023-08-16, 6:17:18 PM] ~ karly: does anyone have a computer with Netflix that I could borrow for chug retirement?:)
[2023-08-16, 6:17:34 PM] Dan: Not Netflix but popcorn time
[2023-08-16, 6:17:38 PM] Dan: It's in the mo
[2023-08-16, 6:17:43 PM] Dan: All urs
[2023-08-16, 6:25:15 PM] Dan: image omitted
[2023-08-16, 6:29:07 PM] ~ karly: Yay:) thank you!
[2023-08-16, 6:31:30 PM] Dan: No problem come grab it whenever :)
[2023-08-16, 6:59:53 PM] Yvonne: THE BONIMOT ARE RUNNING IVRIT TODAY
[2023-08-16, 7:00:11 PM] ~ mai: Hello tzevet! So sorry I was not there for the asepha and so people didn’t get the chance to sign up for chugei alef! Please text me if you want to run one, or if you are available but don’t have an idea. There are 4 spots left. THANK YOU!!!!
[2023-08-16, 7:00:52 PM] Yvonne: Shormrimot: janusz/ migrash
Chotrimot: ad Gordon
Say stinky: pish bowl
Tzofimot: chadar
[2023-08-16, 7:20:43 PM] ~ Gavriella TroperHochstein: Madatz are going to be in the gezer for the first 15 minutes of our peulah!
[2023-08-16, 7:20:51 PM] ~ Gavriella TroperHochstein: So please don’t go down there until 4:45
[2023-08-16, 8:26:13 PM] ~ karly: This message was deleted.
[2023-08-16, 8:47:28 PM] ~ Ariella Smith-Eidelman: Yom Meyuchad I am about to have a bunch of stuff for you in the techni office!
[2023-08-16, 8:47:49 PM] India: thank u:))
[2023-08-16, 8:59:47 PM] ~ Monty: Hello friends if anyone would like to participate in the FINALE of our RPS hatz plz come to the techni office right when chuggim ends so we can give u a script 👹❤️
[2023-08-16, 9:00:37 PM] ~ Monty: GIF omitted
[2023-08-16, 9:00:56 PM] ~ Monty: GIF omitted
[2023-08-16, 9:01:05 PM] ~ Monty: GIF omitted
[2023-08-16, 9:02:22 PM] Dan: Im down!!
[2023-08-16, 9:04:35 PM] India: me at ur moms house
[2023-08-16, 9:40:44 PM] ~ Ariella Smith-Eidelman: does anyone know where the projector is?
[2023-08-16, 9:43:16 PM] ~ Gavriella TroperHochstein: Is anyone excited about educating about Black joy and want to switch me out? I seem to have lost my voice and I won’t be able to speak enough to run things
[2023-08-16, 10:04:48 PM] Dan: I Saw it recently in the mo
[2023-08-16, 10:06:50 PM] ~ Gal Icek: Chadar
[2023-08-16, 10:06:57 PM] ~ Gal Icek: In the back
[2023-08-16, 10:07:12 PM] ~ Ariella Smith-Eidelman: Nice
[2023-08-16, 10:08:38 PM] Dan: image omitted
[2023-08-16, 10:11:53 PM] ~ Lila: EVERYTHING FOR THE TOCHNIT EVER IS READY AND PREPPED REMINDER TO COME GET IT!! :)
[2023-08-16, 10:12:27 PM] ~ Lila: image omitted
[2023-08-16, 10:13:22 PM] ~ Lila: image omitted
[2023-08-16, 10:13:42 PM] ~ Lila: image omitted
[2023-08-16, 10:17:16 PM] ~ Gavriella TroperHochstein: Asking again! This station deserves enthusiasm! I cannot give it the energy it needs!
[2023-08-16, 10:21:48 PM] ~ Gavriella TroperHochstein: Found someone
[2023-08-16, 10:52:10 PM] ~ Tal Fisher-Taylor: When's kima tomorrow?
[2023-08-16, 11:41:18 PM] ~ Maisie: GIF omitted
[2023-08-16, 11:41:58 PM] ~ Maisie: @16043960611 where are the feshers at?
[2023-08-16, 11:42:14 PM] ~ Maisie: Just finished mopping the entire mitbach
[2023-08-16, 11:42:31 PM] Dan: Tylers in the myad doing kisb
[2023-08-16, 11:42:34 PM] Dan: Kish!
[2023-08-16, 11:42:38 PM] ~ Maisie: Oh
[2023-08-16, 11:42:50 PM] ~ Maisie: Where are the feshers though?
[2023-08-16, 11:43:34 PM] ~ Ariella Smith-Eidelman: There are no feshers tonight
[2023-08-16, 11:44:06 PM] ~ Maisie: Ah
[2023-08-16, 11:45:41 PM] ~ Maisie: Forgor it was yo mama tomorrow
[2023-08-17, 12:36:59 AM] ~ Talia Joffe: Whoever took my speaker from the techni office pls return it. It was a sunflower sticker on it. Also, whoever took the blue carabiner that was on it, not chill
[2023-08-17, 12:50:22 AM] ~ Lila: anyone want help with bedtime?
[2023-08-17, 12:52:24 AM] ~ Zachary Bunim: can someone replace me (or me and yair as a pair) for shmira tonight? we’re running a last minute sos. sorry it’s so late, let me know soon thank youuu
[2023-08-17, 1:09:36 AM] ~ Zachary Bunim: plsss
[2023-08-17, 1:11:32 AM] ~ Zachary Bunim: got someone!
[2023-08-17, 1:15:48 AM] ~ Ariella Smith-Eidelman: What time is the briefing tonight ?
[2023-08-17, 1:16:13 AM] Zev: Briefing is at 11:00pm !
[2023-08-17, 1:38:50 AM] Dan: What kids are leaving tmrw?
[2023-08-17, 1:59:25 AM] Zev: Hey, the briefing is in 1 minute and no one is here. Please come. Tell madatz to come
[2023-08-17, 2:03:19 AM] Mira: EVERYONE COME TO BRIEFING NOW!!!!!!!
[2023-08-17, 2:03:42 AM] ~ Monty: 👹👹👹
[2023-08-17, 2:03:44 AM] ~ Monty: Come
[2023-08-17, 2:09:21 AM] ~ mai: Bonimot are still awake our tzevet won’t be there
[2023-08-17, 2:10:21 AM] Dan: skill issue
[2023-08-17, 2:10:33 AM] Zev: https://docs.google.com/document/d/1PxWFuECxaecz_0FvwNKFTwpDPwKtrXKRyZvmmv2jdM8/edit
[2023-08-17, 2:41:36 AM] ~ Monty: Hi friends I wanted to let you all know that I’ll be heading back to vancouver with Sodo tomorrow morning to be with family for the rest of the summer. I’ve been avoiding thinking about saying good bye to u all cause sad omg but before you go to bed tn please come find me (and I’ll come find u) to say a proper good bye!!! 🥲 also I will be at the camp committee dinner on the 24th in van so I’ll see y’all very soon as well❤️ I love you all!!!👹👹👹
[2023-08-17, 2:51:01 AM] Zev: If anyone needs to find either eva or i for Seder yom questions we’re in the mizrad rosh rn
[2023-08-17, 2:55:33 AM] ~ Solomon Bodrug: Hello! Mitbach is now ‘closed’ but slightly open for YM prepper coffee and for dishwashing! Please keep clean & tidy and make sure all dishes are done or I will cry
[2023-08-17, 2:56:00 AM] Tyler: Wowie sol
[2023-08-17, 2:57:14 AM] ~ agustina: anyone have a red tank top
[2023-08-17, 2:57:55 AM] ~ Zevi: Does anyone have or know where I can get a suit for my costume?
[2023-08-17, 3:08:12 AM] ~ Mica: Who is responsible for the missing projector leg and where is it
[2023-08-17, 3:08:35 AM] ~ mai: My kids in the morning
[2023-08-17, 3:08:47 AM] ~ mai: I saw a kid with it and I believe Liad in madatz took it
[2023-08-17, 3:08:59 AM] ~ Mica: Thank you
[2023-08-17, 3:10:50 AM] ~ Zevi: I got it
[2023-08-17, 3:24:49 AM] ~ Maisie: Someone plz get me a freezie and 2 ice cream sandwich (no questions asked)?
[2023-08-17, 3:25:07 AM] ~ Maisie: I’m in the mo and have crazy munchies
[2023-08-17, 3:25:18 AM] ~ Maisie: Some chips too
[2023-08-17, 3:25:33 AM] ~ Maisie: Need.
[2023-08-17, 3:25:52 AM] ~ Maisie: Snacko.
[2023-08-17, 3:25:56 AM] ~ Maisie: Now.
[2023-08-17, 3:26:25 AM] ~ Maisie: GIF omitted
[2023-08-17, 3:26:51 AM] ~ Maisie: image omitted
[2023-08-17, 3:27:14 AM] ~ Maisie: image omitted
[2023-08-17, 3:27:24 AM] Shai Rubin: https://docs.google.com/document/d/1ASDz_BrEcFMmZE27lwWQJ34dGqKPGdqF2uLRghP5TBk/edit
[2023-08-17, 3:27:36 AM] Shai Rubin: do NOT edit this please
[2023-08-17, 3:27:37 AM] ~ Maisie: video omitted
[2023-08-17, 3:27:53 AM] ~ Maisie: image omitted
[2023-08-17, 3:28:01 AM] Shai Rubin: Read this at some point if you’re a character
[2023-08-17, 3:28:07 AM] Shai Rubin: and do not edit it
[2023-08-17, 3:28:15 AM] ~ Maisie: image omitted
[2023-08-17, 3:28:37 AM] ~ Maisie: image omitted
[2023-08-17, 3:28:41 AM] Shai Rubin: I don’t care how funny you think you are, do not edit the hatzagot
[2023-08-17, 3:28:54 AM] Shai Rubin: I repeat, do NOT edit the hatzagot please
[2023-08-17, 3:28:57 AM] Shai Rubin: I will cry
[2023-08-17, 3:28:58 AM] ~ Maisie: え？
[2023-08-17, 3:29:07 AM] ~ Maisie: なになに〜
[2023-08-17, 3:29:19 AM] ~ Maisie: 何ですか？
[2023-08-17, 3:30:04 AM] ~ Maisie: わからない
[2023-08-17, 3:30:48 AM] ~ Maisie: ぐへへへ(´-ω-)
[2023-08-17, 3:31:39 AM] ~ Maisie: image omitted
[2023-08-17, 3:32:07 AM] ~ Maisie: video omitted
[2023-08-17, 3:33:42 AM] ~ Maisie: image omitted
[2023-08-17, 3:34:02 AM] ~ Maisie: video omitted
[2023-08-17, 3:34:34 AM] ~ Maisie: video omitted
[2023-08-17, 3:34:57 AM] ~ Maisie: video omitted
[2023-08-17, 3:35:54 AM] ~ Maisie: video omitted
[2023-08-17, 3:36:07 AM] ~ Maisie: video omitted
[2023-08-17, 3:37:17 AM] ~ Maisie: video omitted
[2023-08-17, 3:38:23 AM] ~ Maisie: GIF omitted
[2023-08-17, 3:39:23 AM] ~ Maisie: image omitted
[2023-08-17, 3:39:39 AM] ~ Maisie: image omitted
[2023-08-17, 3:40:43 AM] ~ Maisie: video omitted
[2023-08-17, 3:41:40 AM] ~ Maisie: video omitted
[2023-08-17, 3:42:17 AM] ~ Maisie: video omitted
[2023-08-17, 3:43:30 AM] ~ Maisie: image omitted
[2023-08-17, 3:43:53 AM] ~ Maisie: image omitted
[2023-08-17, 3:44:18 AM] ~ Maisie: GIF omitted
[2023-08-17, 3:44:37 AM] ~ Maisie: GIF omitted
[2023-08-17, 3:47:19 AM] ~ Alex (shmeppy): maisie u asked us to stop spamming after 6 messages pls chill
[2023-08-17, 3:55:52 AM] Tyler: Ngl the last 2 gifs go hard
[2023-08-17, 4:01:08 AM] ~ Alex (shmeppy): valid take
[2023-08-17, 4:39:04 AM] ~ Prielle Laniado: does anyone have a black vest! (or any black utility looking accessories)
[2023-08-17, 11:41:18 AM] ~ Oliver: HEY YALL I NEED JEANS ASAP
[2023-08-17, 11:41:29 AM] ~ Oliver: If anyone has some I can borrow
[2023-08-17, 11:41:31 AM] ~ Oliver: I would
[2023-08-17, 11:49:37 AM] ~ Tal Fisher-Taylor: yeah I do
[2023-08-17, 12:31:39 PM] Arielle: Kragle is in the Mideast rosh
[2023-08-17, 12:55:23 PM] ~ Zevi: I’m in rosh lmk when hatz starts
[2023-08-17, 1:32:33 PM] ~ Prielle Laniado: This message was deleted.
[2023-08-17, 2:22:17 PM] ~ ➕Ziv Mergui✖️: image omitted
[2023-08-17, 2:23:27 PM] ~ Talia Joffe: Are there still more kids being shlaved to Chichester?
[2023-08-17, 2:23:36 PM] ~ Mica: Nope
[2023-08-17, 2:31:21 PM] ~ Lila: does anyone have a tie or bow tie?!?
[2023-08-17, 2:50:38 PM] ~ Lila: is anyone not doing anything for the round robin who can cover for me cause i’m on toranut or vise versa
[2023-08-17, 2:55:55 PM] ~ Mica: @thevaad where should we get candy for round Robin stations?
[2023-08-17, 3:17:38 PM] ~ Hilla Kabazo: If anyone sees Karly, I need her to switch me out with group 6 asap
[2023-08-17, 4:04:18 PM] ~ Ana: https://www.timescolonist.com/local-news/closest-sighting-orcas-swim-within-a-metre-of-gabriola-island-shore-7417624
[2023-08-17, 4:04:29 PM] ~ Talia Joffe: Sweet
[2023-08-17, 5:11:12 PM] Zev: image omitted
[2023-08-17, 7:18:34 PM] ~ Alex (shmeppy): I NEED PPL TO COME HELP MAKE AN OBSTSCLE COURSE AT THE AD GORDON WITH ROPES
[2023-08-17, 7:18:45 PM] ~ Alex (shmeppy): we have until 5 if ur doing notning pls help
[2023-08-17, 7:21:45 PM] ~ Zevi: I’ll come
[2023-08-17, 8:40:18 PM] ~ Solomon Bodrug: image omitted
[2023-08-17, 8:47:43 PM] ~ Maayan: If ur on toranut please come to the chadar nowwww
[2023-08-17, 9:09:41 PM] ~ Shani Avrahami Saraf: "WHY DID I LEAVE THE TECHNI OFFICE, I could have been watching tik tok! Now I'm gonna be injured by children!"
-Ariellla Smith-Eidelman, 2023
[2023-08-17, 9:34:04 PM] ~ Eli: Are the feshers going to meet at the rosh office r ?
[2023-08-17, 9:34:09 PM] ~ Eli: Rn*
[2023-08-17, 9:38:04 PM] ~ Gal Icek: No
[2023-08-17, 9:38:06 PM] ~ Gal Icek: At 9
[2023-08-17, 9:47:53 PM] Dan: This message was deleted.
[2023-08-17, 9:48:20 PM] ~ Gavriella TroperHochstein: Nofesh tonight and chofesh starting tonight going into tomorrow
[2023-08-17, 9:48:30 PM] Dan: Ahh
[2023-08-17, 9:58:17 PM] Dan: Hey ppls, @16042305933 and I already did Shmira and It says we are doing it tmrw together. Whoever switched with us for that spot please fill in the proper name :)
[2023-08-17, 9:59:01 PM] ~ Gavriella TroperHochstein: It was me and Noa F! Noa is gone so if anyone wants to do it with me we need someone else!
[2023-08-17, 10:25:47 PM] Shai Rubin: in case anyone was wondering, the top of Zevi’s helmet thing is 7 feet and 9 inches high while he’s wearing it and the shoes
[2023-08-17, 10:26:13 PM] ~ Gavriella TroperHochstein: I was wondering
[2023-08-17, 10:26:17 PM] ~ Gavriella TroperHochstein: and now I know
[2023-08-17, 10:38:55 PM] Yonnie: image omitted
[2023-08-17, 10:55:55 PM] ~ Sadie Quinn: If you’re not involved in the building game at 8, please go help with dance party setup!!
[2023-08-17, 11:07:05 PM] ~ Talia Joffe: image omitted
[2023-08-17, 11:40:04 PM] Yonnie: Ok but how tall with the milk crates
[2023-08-17, 11:57:21 PM] ~ Lyrie Murad: video omitted
[2023-08-18, 12:24:31 AM] ~ Eli: What are the codes for the box again?
[2023-08-18, 12:24:48 AM] ~ Veronica: 860 and 707
[2023-08-18, 12:39:08 AM] ~ Hilla Kabazo: This message was deleted.
[2023-08-18, 12:39:09 AM] ~ Hilla Kabazo: This message was deleted.
[2023-08-18, 12:39:09 AM] ~ Hilla Kabazo: This message was deleted.
[2023-08-18, 12:39:09 AM] ~ Hilla Kabazo: This message was deleted.
[2023-08-18, 12:40:24 AM] ~ Lila: sus
[2023-08-18, 12:46:12 AM] ~ Sadie Quinn: If you are not currently putting kids to bed, PLEASE HELP CLEAN UP!!! You can start in any of these areas:
- Migrash/Janusz
- Gezer
- Hallway
- Misrad techni/rosh
- Chadar
- MYad
Pleeeeeease hellllllllp
[2023-08-18, 12:48:39 AM] Dan: Sus
[2023-08-18, 12:59:50 AM] ~ Gal Icek: Hi! We need to know if you are coming to the welcome home dinner on August 24th at 4:45 at south memorial park. If you won't answer you won’t have food 🍣🍣🍣
[2023-08-18, 12:59:57 AM] ~ Kiran: image omitted
[2023-08-18, 1:00:15 AM] ~ Gal Icek: POLL:
Are you coming to welcome home dinner
OPTION: Yessssss (37 votes)
OPTION: No (5 votes)
[2023-08-18, 1:00:29 AM] ~ Kiran: Moving it back now
[2023-08-18, 1:00:36 AM] Dan: Bro I'm from Victoria :(
[2023-08-18, 1:12:40 AM] ~ Tal Fisher-Taylor: theres usually a mini Victoria one
[2023-08-18, 1:12:44 AM] ~ Tal Fisher-Taylor: later on
[2023-08-18, 3:33:46 AM] ~ ➕Ziv Mergui✖️: image omitted
[2023-08-18, 4:09:25 AM] Shai Rubin: 8’10”
[2023-08-18, 12:10:45 PM] ~ Maisie: video omitted
[2023-08-18, 12:11:46 PM] ~ Maisie: Sorry, I just had to since it pertains to both yesterday’s theme and current events
[2023-08-18, 12:12:34 PM] Ron: image omitted
[2023-08-18, 12:51:29 PM] ~ Jackson Nozick: Thank you Ron
[2023-08-18, 12:52:38 PM] Yvonne: Who knows the whereabouts of my charger? The one with my name on it I know she’s out there
[2023-08-18, 12:55:09 PM] ~ Gal Icek: If you didn't answer this yet please do!
[2023-08-18, 1:24:08 PM] ~ Oliver: Hey all, great job yesterday! Decorations were sick. Today, please return the gear taken from the grofit that was used. Tiyul rope is a top priority. Keep in mind, Tiyul points are running currently, with yonni on the lead.
[2023-08-18, 1:41:56 PM] ~ Jackson Nozick: image omitted
[2023-08-18, 1:42:28 PM] ~ Jackson Nozick: Seder yom for today
[2023-08-18, 1:46:23 PM] Dan: This message was deleted.
[2023-08-18, 1:50:53 PM] ~ Talya Stein: Yo there’s still a tray of a kvutzah’s lava cakes from a couple nights ago, if they remain unclaimed they will be tossed xoxo
[2023-08-18, 1:51:34 PM] ~ Talya Stein: (in the walk-in)
[2023-08-18, 1:51:41 PM] Dan: @tzofim tzevet
[2023-08-18, 2:31:24 PM] ~ Eli: image omitted
[2023-08-18, 2:31:25 PM] ~ Eli: image omitted
[2023-08-18, 2:35:33 PM] ~ Sadie Quinn: Check your tafkidim! Do your tafkidim! Be your tafkidim!
[2023-08-18, 2:43:38 PM] Dan: You are what you tafkid ❤️ tafkid is life 🧬
[2023-08-18, 2:53:11 PM] ~ Jane: @17789518206  your hat is in the left side of mirp tsrif
[2023-08-18, 3:49:27 PM] ~ mai: SEND SHABBAS QUEEN NOMINATIONS!!! Who has had amazing hadricha this week??? Who has been rosh gadol??? Text me!
[2023-08-18, 3:56:17 PM] ~ Sadie Quinn: Mishpachot for this week: (please don't hate me there are so many people off and I tried my best)
- Vancouver 1: Zac, Maayan, Edden
- Vancouver 2: Mairav, Lila, Rafi,
- Vancouver 3: Jackson, India
- Vancouver 4: Yair, Jane
- Richmond: Shai, Omer
- USA: Mica + madatz
- Random Canada: Talia, Karly
- Victoria: Prielle, Ron
- Israel: Mergui, Noa B, Eli
- Suburbia: Arielle, Shmeppy, Auggie
- Sunshine Coast: Ira
PLEASE be at the Janusz on time (4pm) to get your lists
[2023-08-18, 4:17:27 PM] ~ Talya Stein: @madatz tzevet Gemma’s bday cake is ready :)
[2023-08-18, 4:20:54 PM] ~ Mica: Thank you!
[2023-08-18, 4:23:54 PM] ~ Gal Icek: There are only 3 tzevet members in the chadar
[2023-08-18, 4:23:59 PM] ~ Gal Icek: Please comr here
[2023-08-18, 4:52:26 PM] ~ mai: Send me triple M things rn
[2023-08-18, 4:52:32 PM] ~ mai: And your nominations
[2023-08-18, 4:59:03 PM] ~ Mica: Does anyone need help with showers?
[2023-08-18, 4:59:09 PM] ~ Mica: I am available and dirty
[2023-08-18, 4:59:27 PM] ~ Sadie Quinn: We can’t print right now so here is a digital copy of the detailed Shabbat Seder Yom:
https://docs.google.com/document/d/1ToLtRBSm4SkjMkANN4hWMFxRsStoRCCDeD-INHRROJc/edit
Also the whiteboards with tafkidim are in the techni
[2023-08-18, 5:02:49 PM] Shai Rubin: For everyone on tonight for rikkud: We’re going to make rikkud tonight incredibly hype and we need tzevet to participate if we want that to happen. Dance with your kids, encourage them to do it even if they don’t know the dances, and absolutely do NOT give them access to any sports equipment. Also, please tell them to bring their water bottles up for shabbat shira so water breaks can be quicker and we can do more dancing!
[2023-08-18, 5:03:18 PM] Tyler: Yeah
[2023-08-18, 5:03:28 PM] Tyler: U tell em Shai
[2023-08-18, 5:08:12 PM] ~ Mica: /who most wants my supreme shower party energy
[2023-08-18, 5:37:42 PM] ~ Solomon Bodrug: image omitted
[2023-08-18, 5:51:11 PM] ~ Zevi: If anyone has pictures or videos of me from yesterday please send!!
[2023-08-18, 6:00:42 PM] Dan: @16478550311 @14165803436 @15038408297 come to rosh misrad
[2023-08-18, 6:33:38 PM] Shai Rubin: My kids found a pair of airpods lying around. I’ve put them on the shelf by the door of the techni office, so claim them if they’re yours
[2023-08-18, 7:05:26 PM] ~ Zevi: If anyone sees a blue Nalgene (the tzevet 2021 gift) lmk! It has a whalecome home sticker
[2023-08-18, 7:10:37 PM] ~ Hilla Kabazo: I would super duper appreciate if two ppl can do shmira tonight because Noa F is not here anymore (SO SAD) and Gavi is only free from 12am!!!!
[2023-08-18, 7:11:25 PM] ~ Hilla Kabazo: Help keep machaneh safe!
[2023-08-18, 7:38:12 PM] ~ Gal Icek: image omitted
[2023-08-18, 9:28:44 PM] ~ Jackson Nozick: I saw it on the floor of the uppers washroom underneath the bench below the hooks
[2023-08-18, 9:29:31 PM] ~ Oliver: On the tshrif?
[2023-08-18, 9:29:34 PM] ~ Oliver: Probs mine
[2023-08-18, 9:30:54 PM] Ezra: Can people on fesh check the box for 🍾
[2023-08-18, 9:32:42 PM] ~ Ariella Smith-Eidelman: Come to the fesh meeting !!
[2023-08-18, 10:26:01 PM] ~ Tal Fisher-Taylor: Does anyone have a pair of noise cancelling headphones they'd lend to a kid with a concussion so they can participate and watch rikkud
[2023-08-18, 10:33:36 PM] ~ Talia Joffe: Yes!!
[2023-08-18, 10:36:50 PM] ~ Tal Fisher-Taylor: Bless your soul
[2023-08-18, 10:46:48 PM] ~ Ariella Smith-Eidelman: Chevrati in the mo tonight at midnight !!!!!!!!!!
[2023-08-18, 11:13:28 PM] ~ Gavriella TroperHochstein: Hi 👋 I still need at least one other person to do shmira with me tonight! Ideally two people who can do it for the first 2 sivuvim so I can supervise madatz bedtime and then 1 person to do the rest of the night with me
[2023-08-18, 11:45:22 PM] ~ Shani Avrahami Saraf: Can we get a ten min warning for datz calls pls!
[2023-08-18, 11:52:42 PM] ~ Kiran: image omitted
[2023-08-19, 12:13:10 AM] ~ Ariella Smith-Eidelman: Come if you wanna do madatz calls
[2023-08-19, 12:29:23 AM] Mira: Are there still a pair in the shmo?
[2023-08-19, 12:58:07 AM] ~ Ariella Smith-Eidelman: Karly, gavi and Alias you have mail and you should come to bayit to get it
[2023-08-19, 12:58:08 AM] ~ Zevi: Thank you!!!
[2023-08-19, 1:00:41 AM] ~ Shani Avrahami Saraf: This message was deleted.
[2023-08-19, 1:15:23 AM] ~ Shani Avrahami Saraf: Hey, I really need someone to offer to fully switch out Gavi for shmira. There is coverage for the first two sivuvim, so you would be doing 12:30 onwards with Shai.
[2023-08-19, 1:26:03 AM] ~ Shani Avrahami Saraf: This message was deleted.
[2023-08-19, 1:32:03 AM] ~ Shani Avrahami Saraf: Arielle is a hero to us all and everyone should sing her praises constantly
[2023-08-19, 1:35:55 AM] ~ Shani Avrahami Saraf: If someone from tzofimot tzevet could come walk Addie up from the mirp that would be swell
[2023-08-19, 2:03:54 AM] ~ ➕Ziv Mergui✖️: If anyone is near shmeppy tell him I still have his phone
[2023-08-19, 2:05:03 AM] Ron: Seconding
[2023-08-19, 2:14:03 AM] ~ Mica: Seeking a third
[2023-08-19, 2:27:26 AM] ~ Mica: SERIOUSLY people you must all come to the chevrati it’s going to be awesome :)
[2023-08-19, 2:57:00 AM] ~ Ariella Smith-Eidelman: Come to the mooooo
[2023-08-19, 2:57:03 AM] ~ Ariella Smith-Eidelman: Come to the mo
[2023-08-19, 2:57:07 AM] ~ Ariella Smith-Eidelman: Come tooooo the mo
[2023-08-19, 2:57:15 AM] ~ Ariella Smith-Eidelman: Come to mo mo mo mo
[2023-08-19, 2:57:16 AM] ~ Ariella Smith-Eidelman: Mom
[2023-08-19, 2:57:19 AM] ~ Ariella Smith-Eidelman: Come to the mom
[2023-08-19, 2:57:34 AM] ~ Ariella Smith-Eidelman: Momomomomomomomomomo
[2023-08-19, 2:57:35 AM] ~ Ariella Smith-Eidelman: Mo
[2023-08-19, 2:57:38 AM] ~ Ariella Smith-Eidelman: Come to the mo
[2023-08-19, 2:57:40 AM] ~ Ariella Smith-Eidelman: Moo
[2023-08-19, 2:57:42 AM] ~ Ariella Smith-Eidelman: Cow
[2023-08-19, 2:57:44 AM] ~ Ariella Smith-Eidelman: Beef
[2023-08-19, 2:57:46 AM] ~ Ariella Smith-Eidelman: Burger
[2023-08-19, 2:57:59 AM] Alias: Ariella it’s going to be okay
[2023-08-19, 2:58:24 AM] ~ Ariella Smith-Eidelman: Are you sure
[2023-08-19, 2:58:40 AM] Alias: Less than I’d like to be
[2023-08-19, 2:58:41 AM] ~ Ariella Smith-Eidelman: GIF omitted
[2023-08-19, 2:59:27 AM] ~ Ariella Smith-Eidelman: GIF omitted
[2023-08-19, 2:59:43 AM] ~ Ariella Smith-Eidelman: GIF omitted
[2023-08-19, 3:00:00 AM] ~ Ariella Smith-Eidelman: GIF omitted
[2023-08-19, 3:02:42 AM] ~ Mica: People it’s time :)
[2023-08-19, 3:02:51 AM] ~ Mica: If we’re all here it’s buttloads of fun
[2023-08-19, 3:04:36 AM] ~ Mica: feshers you are invited as well and you should come
[2023-08-19, 3:05:40 AM] ~ Mica: And Mitbach you should come too!
[2023-08-19, 3:09:13 AM] ~ Maayan: Can anybody walk some people to the mo ?
[2023-08-19, 3:09:28 AM] ~ Mica: Yes India’s coming
[2023-08-19, 4:11:14 AM] ~ Kiran: 2 chotrimot are asking for madrichimot to get them maletonin cause they can’t sleep
[2023-08-19, 4:11:33 AM] ~ Kiran: Can someone on their tzevet or a medic come to the madregot
[2023-08-19, 4:39:34 AM] ~ Shani Avrahami Saraf: Mirp cannot give melatonin without a doctor
[2023-08-19, 4:39:48 AM] ~ Shani Avrahami Saraf: Try making them hot tea
[2023-08-19, 5:00:50 AM] Rafi: Who tf has the key to the machzan??
[2023-08-19, 5:01:19 AM] Alias: Cougar
[2023-08-19, 5:02:23 AM] ~ Gavriella TroperHochstein: I’m so sorry I accidentally left it in my pocket
[2023-08-19, 5:02:45 AM] ~ Gavriella TroperHochstein: I’m in bed but if you want to come up to the madatz shetach i can give it to you
[2023-08-19, 5:09:49 AM] Rafi: Oh it was gavi
[2023-08-19, 5:09:52 AM] Rafi: Then it’s fine
[2023-08-19, 5:09:55 AM] Rafi: It’s not a problem
[2023-08-19, 5:10:02 AM] Rafi: I love you gavi
[2023-08-19, 5:10:05 AM] Rafi: U can do no wrong
[2023-08-19, 5:10:18 AM] ~ Gavriella TroperHochstein: well that’s simply not true
[2023-08-19, 5:10:23 AM] ~ Gavriella TroperHochstein: love you too
[2023-08-19, 5:10:34 AM] ~ Gavriella TroperHochstein: I’ll put the key back first thing in the morning
[2023-08-19, 11:32:28 AM] Edden: This message was deleted.
[2023-08-19, 12:17:19 PM] ~ Maisie: GIF omitted
[2023-08-19, 1:06:22 PM] ~ Sadie Quinn: image omitted
[2023-08-19, 1:32:52 PM] Alias: Anyone have a laptop we can use for trans community?
[2023-08-19, 1:33:08 PM] Zev: You can use mine
[2023-08-19, 1:34:27 PM] Alias: Thanks so much
[2023-08-19, 1:39:50 PM] ~ Tal Fisher-Taylor: Feshers?
[2023-08-19, 2:52:39 PM] ~ Sadie Quinn: If you are not running something at the Ken carnival, please come help with Toranut!
[2023-08-19, 4:31:45 PM] ~ Sadie Quinn: Come to the mo for the asepha once your kids are at the Janusz!
[2023-08-19, 4:33:30 PM] ~ Ariella Smith-Eidelman: If you are off and want to be signed up for specific shmira things please let someone know or me !
[2023-08-19, 4:55:06 PM] Yonnie: image omitted
[2023-08-19, 5:13:29 PM] ~ Mica: I hope there are tzevet members in each shetach, only rafi came to come get his kids
[2023-08-19, 5:17:12 PM] ~ Maayan: image omitted
[2023-08-19, 5:20:01 PM] ~ Ilana Sela: I think we’ve been keeping it as an extra tiyul layer cause it’s been unclaimed for a few years
[2023-08-19, 5:39:50 PM] ~ Sadie Quinn: Kibbud is freezies at 4:00! Send your kids down to get kibbud, then gather them at the madregot so they know where to go for Madatz pish at 4:15
[2023-08-19, 6:30:04 PM] ~ Gal Icek: If you haven't answered now is the time
[2023-08-19, 6:49:19 PM] ~ Mikal Stein: Each tzevet should SEND TRIPLE M THINGS to me or mairav!!!!! Since it’s the last one it can be from this past week or something funny from the session!! And send stuff about tzevet too 👹
[2023-08-19, 6:53:08 PM] Yonnie: image omitted
[2023-08-19, 6:56:34 PM] ~ Mikal Stein: Please do this asap like nowwwww‼️‼️‼️
[2023-08-19, 6:57:46 PM] ~ Maayan: Please please please send stufffff
[2023-08-19, 7:00:56 PM] ~ Ariella Smith-Eidelman: if you are swimming tonight please tell your kids to keep their bathing suits and towels or they won't have stuff to swim
[2023-08-19, 7:01:57 PM] ~ Sadie Quinn: Come get freezies!!!❄️❄️❄️
[2023-08-19, 7:10:22 PM] ~ Sadie Quinn: Madatz Pish spaces!
Sayarimot: lower kvish
Chotrimot: MYM
Shomrimot: Janusz
Tzofimot: Medura Pit
[2023-08-19, 7:25:09 PM] ~ Ana: I left some things at camp that I thought I would mention just in case some one finds the things:
-black swimsuit top and brown swimsuit bottoms
-a dress that is blue and has a circle in the middle
-a pair of dark blue shorts with a little green logo at the bottom
[2023-08-19, 7:25:22 PM] ~ Ana: No rush or presh but if you see any lmk
[2023-08-19, 7:25:25 PM] ~ Ana: Shabbat shalom
[2023-08-19, 8:06:12 PM] ~ Hilla Kabazo: What’s the combo for the sport shed
[2023-08-19, 8:06:36 PM] ~ Ira Spiegelman: 2-17-2
[2023-08-19, 8:06:43 PM] ~ Hilla Kabazo: Bless
[2023-08-19, 8:07:13 PM] Arielle: Can anyone watch the rope swing tomorrow morning for nadav cuz he did shmira pretty please
Love,
Nadav
[2023-08-19, 8:13:10 PM] ~ Ariella Smith-Eidelman: we don't need to do that tmrw cause kima is 7 already
[2023-08-19, 8:26:59 PM] ~ Alex (shmeppy): tzotimot r using gezer at 11:45 today
[2023-08-19, 8:27:36 PM] Edden: chotrimot are using the janusz from 9:20-11:40 tonight
[2023-08-19, 8:27:51 PM] Edden: also we call mirpeset of the shmo for final wills right now
[2023-08-19, 8:32:05 PM] ~ Prielle Laniado: where’s the rest of the lost and found stuff?
[2023-08-19, 8:34:00 PM] ~ Zachary Bunim: bonimot will be in the MYM after rad hayom till movies
[2023-08-19, 8:34:04 PM] ~ Ira Spiegelman: Sayarimot are taking gezer from 9:30 till 11:30
[2023-08-19, 8:35:02 PM] ~ Alex (shmeppy): tzofimot using ad gordon from 9:30 until 11:30
[2023-08-19, 8:37:01 PM] ~ Hilla Kabazo: Spot the chultza: https://www.jewishindependent.ca/keep-israel-jewish-and-democratic/
[2023-08-19, 8:37:30 PM] ~ Mica: Madatz will be doing your mom all night long
[2023-08-19, 8:38:17 PM] ~ Gavriella TroperHochstein: This message was deleted.
[2023-08-19, 8:41:07 PM] Dan: I can't find it all I see is a really dripped out person 😭😭
[2023-08-19, 8:47:27 PM] ~ Alex (shmeppy): swap this to chadar
[2023-08-19, 8:50:00 PM] ~ Hilla Kabazo: @sayarimot tzevet ur madatz shouldn’t be writing final wills by themselves
[2023-08-19, 9:00:49 PM] ~ Sadie Quinn: Nanaimo luggage: in Gaaga pit; Vancouver luggage: UHaul (janucz); Horseshoe Bay luggage: In the Silverado Victoria luggage: AD Gordon
[2023-08-19, 9:01:04 PM] ~ Sadie Quinn: Dinner is in 15 minutes so get your kids to bring their luggage now!
[2023-08-19, 9:28:41 PM] Ron: are people setting up instrument stuff
[2023-08-19, 9:54:23 PM] Ron: ?
[2023-08-19, 9:55:24 PM] Dan: Now
[2023-08-19, 9:55:27 PM] Dan: We should move en
[2023-08-19, 9:55:32 PM] Dan: I think?
[2023-08-19, 9:55:41 PM] Dan: But ppl are still In chadar
[2023-08-19, 9:56:55 PM] ~ Ana: What we usually do is put the instruments in the back of the chadar near the end of din
[2023-08-19, 9:57:08 PM] Dan: Cool
[2023-08-19, 9:57:34 PM] ~ Mikal Stein: FINAL CALL for triple M!!!! So far it’s only been chotrimot and shomrimot😿 we are writing it now
[2023-08-19, 10:13:25 PM] Alias: I lost my sunglasses, if you see them let me know
[2023-08-19, 10:14:23 PM] Dan: Myad
[2023-08-19, 10:49:33 PM] Alias: Amazing
[2023-08-19, 11:04:54 PM] Ezra: https://docs.google.com/document/d/1PgwI6rWupWii41g7JWo7K0ECVCQsgWlddLHgncbjZdU/edit?usp=sharing
[2023-08-19, 11:04:57 PM] Ezra: luz for tmr
[2023-08-19, 11:13:49 PM] Dan: image omitted
[2023-08-20, 1:01:04 AM] Tyler: Pokémon one belongs to a chalutzimot from 1 st sesh
[2023-08-20, 1:25:12 AM] ~ Tal Fisher-Taylor: Med bag for the point in right inside the mirpaht
[2023-08-20, 1:26:36 AM] ~ Alex (shmeppy): does anyone know how to turn on the cool red and blue lights in the chadar??
[2023-08-20, 1:27:50 AM] ~ Nicole: Has anyone seen my laptop? It was used for the slideshow
[2023-08-20, 1:30:55 AM] ~ Solomon Bodrug: flip switches till it works
[2023-08-20, 3:24:03 AM] ~ Lyrie Murad: Does anyone have a laptop we can use for the laptop, mine isn’t working right now
[2023-08-20, 3:24:16 AM] ~ Lyrie Murad: ^^ from Zev
[2023-08-20, 3:34:19 AM] ~ Jackson Nozick: We aren't using the projector anymore they're using the tv instead so it's all good
[2023-08-20, 4:53:17 AM] ~ mai: image omitted
[2023-08-20, 7:31:35 AM] Dan: image omitted
[2023-08-20, 8:25:30 AM] ~ Hilla Kabazo: If ur on sunrise this is ur time!!!!
[2023-08-20, 8:25:45 AM] ~ Hilla Kabazo: If ur awake and in upper machaneh please wake up Shmeppy and Karly!
[2023-08-20, 8:29:06 AM] ~ Alex (shmeppy): we r awake
[2023-08-20, 8:29:11 AM] ~ Alex (shmeppy): and down
[2023-08-20, 8:29:17 AM] ~ Alex (shmeppy): i’m tryna get med bag but the door is locked
[2023-08-20, 8:29:36 AM] ~ Alex (shmeppy): nvm
[2023-08-20, 9:48:59 AM] Yonnie: Does anyone know what the shmo code is? Sidney needs to grab their drum stuff from there this morning
[2023-08-20, 10:01:21 AM] Ezra: 2 17 2
[2023-08-20, 11:18:38 AM] ~ Hilla Kabazo: https://open.spotify.com/playlist/0vdYUe0B8XM0jfHMCp9GCz?si=y3-oW7VbTX-leoa2uQ4xUw
[2023-08-20, 12:47:54 PM] ~ Ariella Smith-Eidelman: Tzevet who are still here kima is at 1:30 and aruchat tzohorayim is at 2!
[2023-08-20, 2:00:21 PM] ~ Zevi: MEET IN MO AT 7:45PM FOR MADATZ INITIATION BRIEFING
[2023-08-20, 2:00:52 PM] ~ Zevi: Spread the word to tzevet and DO NOT TELL THE MADATZ
[2023-08-20, 5:37:09 PM] Edden: if anyone finds a green fjallraven fanny pack please give it to me
[2023-08-20, 5:57:21 PM] ~ mai: It was in the mo last night
[2023-08-20, 6:45:47 PM] Edden: found it, thanks!
[2023-08-20, 9:02:29 PM] Rue: image omitted
[2023-08-20, 10:29:59 PM] ~ Maisie: Where will the asepha take place?
[2023-08-20, 10:30:49 PM] Tyler: Chadar?
[2023-08-20, 10:35:11 PM] ~ Ariella Smith-Eidelman: No
[2023-08-20, 10:35:13 PM] ~ Ariella Smith-Eidelman: *mo
[2023-08-20, 10:38:42 PM] ~ mai: Hello someone took my grey sweater out of rue’s desk drawer!!!!! It’s my favorite one! Pls return 🦤🐒🍓🔪😘🔪
[2023-08-20, 10:39:23 PM] ~ Hilla Kabazo: There was one in the lost and found, it’s in the mo
[2023-08-20, 10:42:28 PM] ~ karly: image omitted
[2023-08-20, 11:10:30 PM] ~ Kiran: Hey all, Mitbach will all be moving into the polka dot tzrif, we’ll be staying to the left side as we wake up earlier than the rest of you (:
[2023-08-20, 11:13:20 PM] ~ Mica: The projector and tziud in the chadar are for madatz please don’t touch
[2023-08-20, 11:14:21 PM] ~ Mica: Also!!! We are doing TZEVET CONFESSIONS tonight (yes tonight, get excited) so start thinking of all the things you have to confess
[2023-08-20, 11:49:27 PM] Shai Rubin: is their a document with the plan for initiation that the dropoff people can look at
[2023-08-20, 11:49:35 PM] Shai Rubin: also what time is initiation starting?
[2023-08-20, 11:54:35 PM] Dan: 945
[2023-08-20, 11:55:11 PM] Shai Rubin: ok, it’s unlikely that Dani and I will be back for the start of it then
[2023-08-20, 11:55:18 PM] Shai Rubin: are we assigned to any tafkidim?
[2023-08-21, 12:05:49 AM] ~ Mica: Nope, just join in whenever you arrive
[2023-08-21, 12:06:13 AM] ~ Zevi: Sunny’s!
[2023-08-21, 12:12:22 AM] ~ Mica: These are the tafkidim for initiation:
Clean mo- tali and yonni
Make contract- shani
Instruments- yonni, nadav, ira
Object gather- rafi
Tortilla slapper- mergui, rue, mairav, vron, india, ariella, talya, omer
Blindfold making- sadie
[2023-08-21, 12:21:03 AM] ~ Maisie: image omitted
[2023-08-21, 12:24:04 AM] ~ Mica: A crucial role
[2023-08-21, 12:27:36 AM] India: did ppl already take the tortillas?
[2023-08-21, 12:27:52 AM] ~ Mica: I think Tal did
[2023-08-21, 12:27:55 AM] ~ Mica: But not sure
[2023-08-21, 12:28:00 AM] India: ya word ok
[2023-08-21, 12:28:28 AM] ~ Maisie: Tal Fisher Taylor: Professional Tortilla Slapper. <This message was edited>
[2023-08-21, 12:34:17 AM] Ron: image omitted
[2023-08-21, 12:39:30 AM] ~ Mica: Reminder to all tzevet to be at the Brecha with scary energy in 5 minutes. It is the sea of despair that they have to cross through
[2023-08-21, 12:40:20 AM] Alias: What if the best I can do is ominous and vaguely threatening energy?
[2023-08-21, 12:40:59 AM] ~ Mica: We love everyone in all ways
[2023-08-21, 12:42:21 AM] ~ Mica: Start going there now! We are about to leave the chadar
[2023-08-21, 12:43:16 AM] ~ Oliver: Insulted and hurt I’m not a flapper
[2023-08-21, 12:43:33 AM] ~ Mica: NO IM SORRY YOU ARE
[2023-08-21, 1:07:38 AM] ~ lily cohen: ~ lily cohen changed their phone number to a new number. Tap to message or add the new number.
[2023-08-21, 1:14:28 AM] ~ Mica: Go now!!
[2023-08-21, 2:25:43 AM] ~ Mica: Confessions will be at 11:40 in the mo!!
[2023-08-21, 2:25:48 AM] ~ Mica: See you there 😎
[2023-08-21, 2:34:07 AM] ~ mai: In TEN minutes! BRING YOUR PHONE OR A LAPTOP
[2023-08-21, 2:38:17 AM] Tyler: Hello everyone, specifically those involved with planning and actualizing the “prank” that took place tonight. I am writing this because I am deeply upset and honestly in shock at the lack of empathy and concern for the well being of those effected by this. I understand that the thought of this may have seemed humorous while planning however I urge you to reflect on how negatively this has impacted multiple people (myself included.) weren’t you the ones who were read the rules about pranks for multiple summers of your lives growing up here? No harmful pranks. I apologize for being up front about this but I was panicking for the past multiple minutes of my life. Please put yourself in my shoes for a minute. The group that I was apart of was tasked to search the chof. We were all yelling and running in the dark with crazy fucking waves, we all had to come to terms the idea that these kids went in and possibly drowned. That’s not someing that people should be forced to think about for no good reason. When over the walkie y’all said to meet, and then at the meeting said nothing about them being found. Of couse Im going to assume the worst. I hate being a party pooper but this was not ok.
[2023-08-21, 2:42:06 AM] Dan: Is there a confession link form or how this is working
[2023-08-21, 2:42:17 AM] ~ Mica: Yes hold on
[2023-08-21, 2:43:29 AM] ~ Mica: https://forms.gle/hThhu26cZxPjFayw7
[2023-08-21, 2:43:33 AM] Tyler: Ohh boy do I have for h
[2023-08-21, 2:43:34 AM] ~ Mica: Start submitting!!!
[2023-08-21, 2:43:41 AM] Tyler: You*
[2023-08-21, 2:43:42 AM] Tyler: Shit
[2023-08-21, 2:52:46 AM] ~ Mica: The answers are rolling in keep submitting 😎
[2023-08-21, 2:54:51 AM] ~ Mica: We will be reading them out loud and guess them just so everyone knows
[2023-08-21, 3:05:52 AM] ~ Mica: We are beginning come now please
[2023-08-21, 3:12:10 AM] ~ Mica: If you submitted a response you should come to the mo so you can share the story
[2023-08-21, 4:29:39 AM] ~ Gavriella TroperHochstein: Please keep an eye out for Liad’s phone! It’s a black Samsung
[2023-08-21, 4:48:38 AM] ~ Mica: If you were the one who unplugged the extension chord that was clearly plugged into the power bar in the madatz tzevet ohel, I implore you to think about the fact that we do, in fact, still live there
[2023-08-21, 4:49:34 AM] ~ Mica: I don’t want to say we’re enemies but I do feel negatively towards you at this time
[2023-08-21, 11:06:04 AM] ~ Mica: The time is now if you want to say goodbye to the madatz meet at the bus
[2023-08-21, 2:12:23 PM] Ezra: Time-lapse the ohel take down
[2023-08-21, 2:15:03 PM] Ron: Did someone take my purple jbl clip 4 from the techni
[2023-08-21, 2:32:03 PM] India: hiyoosh loves
[2023-08-21, 2:37:41 PM] India: based on the form that ariella sent out we will be having a party with substances
the RECOMMENDED amount to contribute is $10-15
[2023-08-21, 2:39:22 PM] India: at lunch we will talk bout how the money is gonna work
[2023-08-21, 3:42:08 PM] ~ ➕Ziv Mergui✖️: video omitted
[2023-08-21, 3:44:26 PM] ~ Monty: Slay omg
[2023-08-21, 4:04:15 PM] Ron: image omitted
[2023-08-21, 4:09:15 PM] ~ mai: video omitted
[2023-08-21, 4:09:17 PM] ~ mai: video omitted
[2023-08-21, 4:43:31 PM] ~ Tal Fisher-Taylor: image omitted
[2023-08-21, 4:49:36 PM] Ron: Great work team
[2023-08-21, 9:04:12 PM] ~ Ariella Smith-Eidelman: image omitted
[2023-08-21, 9:31:45 PM] ~ Oliver: Hey where’s the pants at?
[2023-08-21, 9:31:45 PM] ~ Oliver: They mine low key
[2023-08-21, 9:32:22 PM] ~ Alex (shmeppy): chador
[2023-08-21, 9:32:27 PM] ~ Alex (shmeppy): chadar
[2023-08-21, 9:36:46 PM] ~ Tal Fisher-Taylor: Remember I gave them to you?
[2023-08-21, 9:37:29 PM] ~ Zachary Bunim: apparently it’s leo b in sodo
[2023-08-21, 10:16:45 PM] ~ Noga Goldman: @72 meet in the chadar at 7:35 and if anyone has a speaker lmk and bring it!
[2023-08-21, 10:20:16 PM] ~ Noga Goldman: And bring a towel!
[2023-08-21, 10:23:27 PM] ~ Ariella Smith-Eidelman: @71 meet at the lower kvish at 7:30 !!
[2023-08-21, 10:29:27 PM] Rue: @73 meet at the Brecha in suimsuits!
[2023-08-21, 10:30:34 PM] ~ Gal Icek: @70 meet at the lower kvish in 10 minutes
[2023-08-21, 10:32:34 PM] ~ Gal Icek: @69 meet on the lower kvish at 8:30
[2023-08-21, 10:35:31 PM] ~ Lila: tal kicked us out
[2023-08-21, 10:40:39 PM] ~ Ariella Smith-Eidelman: Prielle
[2023-08-21, 10:40:40 PM] ~ Ariella Smith-Eidelman: Mikal
[2023-08-21, 10:40:43 PM] ~ Ariella Smith-Eidelman: Nicole
[2023-08-21, 10:40:47 PM] ~ Ariella Smith-Eidelman: Hurry up
[2023-08-21, 10:42:20 PM] ~ Ira Spiegelman: WHO TOOK THE HUGE UNOPENED DUCT TAPE FROM THE TECHNI OFFICE
[2023-08-21, 10:42:21 PM] ~ Ira Spiegelman: please give back. You won’t regret
[2023-08-21, 10:47:59 PM] ~ Zevi: Which tzrifim are available?
[2023-08-21, 11:29:33 PM] ~ Gal Icek: @69 we will start at 8:40
[2023-08-21, 11:40:07 PM] ~ Ariella Smith-Eidelman: Hello
[2023-08-22, 12:27:22 AM] ~ Mica: Come to the chadar in 3 minutes!!!!
[2023-08-22, 12:32:33 AM] ~ Gal Icek: 69 will join in 7 minutes
[2023-08-22, 12:34:51 AM] ~ Tal Fisher-Taylor: these are the teams: get into your colors and then come to the chadar
[2023-08-22, 12:34:52 AM] ~ Tal Fisher-Taylor: Group 1- Purple
Ezra
Maayan
Shai
Mikal
Rue
Ron
Edden
Group 2- Blue
Zac
Tal
Yonni
Nicole
Ira
Mica
Shani
Group 3- Pink
Lila
Noga
Shmeppy
Dani
Karly
Jane
Ilana
Group 4- Red
Dan
Mergui (shaliach)
Maisie
Talia
Prielle
Rafi
Hilla
Arielle
Group 5- Green
Oli
Yvonne
Louis
Auggie
Zevi
Noa
Tyler
Group 6- Yellow
Nadav
Yair
Mairav
Alias
Kiran
Tali
India
[2023-08-22, 12:51:18 AM] ~ Maisie: image omitted
[2023-08-22, 1:05:55 AM] ~ Ana: Incredible
[2023-08-22, 3:15:18 AM] ~ Gavriella TroperHochstein: Laila tov beautiful tzevet! If anyone is near those who are shouting, can you please request that everyone be quieter? I am very very sleepy and would like to go to sleep now
[2023-08-22, 3:38:39 AM] ~ Alex (shmeppy): btw a bunch of ppl r gonna watch rio in the mo tn so come
[2023-08-22, 4:30:11 AM] ~ Maisie: PLEASE CAN WE JUST WATCH SOMETHING INSTEAD OF SCROLLING FOR HOURS
[2023-08-22, 12:42:10 PM] Dan: video omitted
[2023-08-22, 1:21:13 PM] Rue: Whoever took the nice acoustic guitar from the shmo please bring it back right now! It’s a rental and we need to return it
[2023-08-22, 2:17:34 PM] ~ Gavriella TroperHochstein: what was that hodaa ?
[2023-08-22, 2:17:40 PM] ~ Gavriella TroperHochstein: we couldn’t hear up here
[2023-08-22, 2:17:55 PM] ~ Maayan: Come say bye to people!!!!
[2023-08-22, 2:44:46 PM] ~ Mica: If anyone is near mairav can you ask her to grab my purple dress
[2023-08-22, 3:00:28 PM] ~ Maisie: image omitted
[2023-08-22, 3:01:47 PM] ~ Maisie: Not cool >:(
[2023-08-22, 3:02:26 PM] ~ Monty: Is that Shomrimot
[2023-08-22, 3:02:56 PM] ~ Monty: Wait nvm I thought it was near a diff shetach but I think I’m wrong
[2023-08-22, 3:03:41 PM] Ron: They moved it so it wouldn’t get wet
[2023-08-22, 3:28:37 PM] ~ Mica: Come say bye!!!
[2023-08-22, 3:35:17 PM] ~ Zevi: Come say bye NOW!!!
[2023-08-22, 3:35:52 PM] ~ maya: OKAY
[2023-08-22, 4:09:45 PM] ~ Jane: anyone got soap hockey vids?
[2023-08-22, 4:24:59 PM] ~ Kiran: image omitted
[2023-08-22, 4:25:22 PM] Mira: I think that’s blue’s
[2023-08-22, 4:26:39 PM] Tyler: It is blues
[2023-08-22, 4:28:03 PM] ~ Gal Icek: https://photos.app.goo.gl/mvpSGzt8J3VBVbxa8
[2023-08-22, 4:28:26 PM] ~ Gal Icek: add your pictures from the summer :)
[2023-08-22, 4:31:46 PM] ~ Maisie: ?
[2023-08-22, 4:31:59 PM] ~ Maisie: I did
[2023-08-22, 4:50:39 PM] ~ Maisie: I added 104 pictures :3
[2023-08-22, 5:07:26 PM] Dan: This message was deleted.
[2023-08-22, 5:07:50 PM] ~ Ariella Smith-Eidelman: Last chance to etransfer rue
[2023-08-22, 5:07:59 PM] ~ Ariella Smith-Eidelman: ruthanneadler@gmail.com
[2023-08-22, 5:15:11 PM] ~ Hilla Kabazo: If people were not here for the hodaot at lunch, there will be a party at the Vancouver Bayit (5333 Ross St) after Camp Committee dinner, starting around 8:30PM. We are expecting that you contribute $10 (through e-transfer or cash) to Maayan (maayanasmoucha@gmail.com) for snax, dranks, etc. Party ends at 2AM latest. 🥳🪩🌟
[2023-08-22, 6:17:45 PM] ~ Tal Fisher-Taylor: image omitted
[2023-08-22, 6:19:53 PM] Yonnie: But I barely even know her!
[2023-08-22, 7:21:34 PM] ~ Lila: 💗HELLOOOOOO!💗 i’m closing the techni office so anyone who has anything in here (laptops, chargers, clothes) should come get it asap!!
[2023-08-22, 8:09:38 PM] ~ Alex (shmeppy): what’s the next thing
[2023-08-22, 8:09:52 PM] Rafi: Upper uppers, uppers and basically all of upper machaneh is closed now. You should go grab anything u left up there and if u see anything that shouldn’t be there u should grab it and bring it down. Thank you!!
[2023-08-22, 8:10:04 PM] ~ Ariella Smith-Eidelman: Swimming/chilling at 6:30
[2023-08-22, 8:18:01 PM] ~ Hilla Kabazo: Before swimming and chilling and after you’re done avodah, if u know u have lost smt, pls come by our little l&f collection outside the chadar. THIS IS ONLY FOR PPL WHO KNOW THEY HAVE LOST SMT! I will make you testify that smt is yours before you take it. After that, I’ll tell u when u can take stuff that isn’t yours. 🙌🙌🙌
[2023-08-22, 8:32:15 PM] Dan: Hey guys I really need my Carhartt side bag back it has a necklace my mom gave me for my birthday 4 years ago and other important things to me. I have looked around a lot for it and have not found it. The last time I had it was a day and a half ago in the mo. I looked but not there. I have attached a picture of it. If you see it please let me know I will be very happy and less stressed 😥 please 🥺🙏🙏 love y'all 🫶
[2023-08-22, 8:32:16 PM] Dan: image omitted
[2023-08-22, 8:56:41 PM] ~ Ariella Smith-Eidelman: I am missing most of the kvutza kupa percentages from this past session if you have it written down somewhere or have any recollection of what it could be please lmk
[2023-08-22, 8:57:22 PM] ~ Ariella Smith-Eidelman: I am missing shomrimot and tzofimot from first session and everyone except shomrimot from second session !! text me if you remember
[2023-08-22, 9:12:03 PM] Mira: Hey guys! I lost my computer at camp, it’s covered in mostly plant/bug stickers. If you see it pls pls give it to edden!! I need it really bad!!
[2023-08-22, 9:13:38 PM] ~ ➕Ziv Mergui✖️: @16049923495 it's in the mo on the air hockey table
[2023-08-22, 9:14:43 PM] Mira: Thanks mergui!!
[2023-08-22, 9:36:32 PM] ~ Gavriella TroperHochstein: I’m going to the brecha!!!
[2023-08-22, 9:46:15 PM] Shai Rubin: we have neighbours, so if you’re on the ram kol right now, please consider not being on it
[2023-08-22, 9:46:18 PM] Shai Rubin: also learn the lyrics
[2023-08-22, 9:46:45 PM] Shai Rubin: this is deeply upsetting
[2023-08-22, 9:51:48 PM] Tyler: Who was singing what?
[2023-08-22, 9:54:56 PM] Ron: 🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱
[2023-08-22, 9:55:15 PM] Mira: Ron what is happening
[2023-08-22, 9:55:25 PM] ~ Monty: Slay rontouch
[2023-08-22, 9:55:34 PM] Ron: I love israel 🇮🇱🇮🇱🇮🇱
[2023-08-22, 9:55:47 PM] Ron: Miss you sm
[2023-08-22, 9:59:41 PM] ~ Monty: Miss YOU 👹
[2023-08-22, 9:59:58 PM] ~ Monty: Also who was singing what I’m so curious lolol
[2023-08-22, 10:15:37 PM] Ron: It’s was karly side eye
[2023-08-22, 10:32:52 PM] ~ Maisie: They were butchering classic camp songs while also earraping everyone within a 1km radius
[2023-08-22, 10:41:16 PM] Ron: @16478550311 any comments?🙄
[2023-08-22, 10:41:57 PM] ~ Ariella Smith-Eidelman: Come eat dinner
[2023-08-22, 10:41:59 PM] ~ Ariella Smith-Eidelman: It’s time
[2023-08-22, 10:42:01 PM] ~ Ariella Smith-Eidelman: To eat dinner
[2023-08-22, 10:57:41 PM] ~ Gavriella TroperHochstein: For your dining pleasure tonight we have:
The MOST DELICIOUS sweet potatoes EVER
fresh, luscious Caesar salad
Crispy tofu fried to perfection
Various nutritious and fragrant rice dishes
Baked broccoli
[2023-08-22, 10:57:44 PM] ~ Gavriella TroperHochstein: come and dine!
[2023-08-22, 10:58:10 PM] ~ karly: Bring your champagne glasses too!!!🔥🔥🔥
[2023-08-22, 11:14:01 PM] ~ Zevi: Code to the sports shed?
[2023-08-22, 11:14:31 PM] ~ Maisie: Forgot to mention Talya’s scrumdiddlyumptious crispy rice
[2023-08-22, 11:17:24 PM] ~ Gavriella TroperHochstein: of course! Silly me 🤦‍♀️ the crown jewel of the meal, left out!
[2023-08-22, 11:20:11 PM] Mira: Gavi I want you to narrate my life
[2023-08-22, 11:23:54 PM] ~ Hilla Kabazo: Last call for lost items and then people can raid all they want rlly
[2023-08-22, 11:25:01 PM] ~ Maisie: Yaayyyy~!
[2023-08-23, 12:00:20 AM] ~ Gal Icek: If anyone wants to do kima tomorrow lmk ☀️
[2023-08-23, 12:01:12 AM] ~ Joanna: I WISH
[2023-08-23, 12:01:14 AM] ~ Alex (shmeppy): rafi and i
[2023-08-23, 12:17:19 AM] Alias: Has anyone seen black skull candy earbuds with one red ear piece!
[2023-08-23, 12:17:21 AM] Alias: ?
[2023-08-23, 12:20:55 AM] Alias: They also have a dongle
[2023-08-23, 12:21:37 AM] Alias: Nvm Maisie is a god
[2023-08-23, 12:45:37 AM] ~ Mica: @12369970051 @12369970056 @16047257054 @17788740130 @16047882125 if any of you have photos from last night please send ❤️
[2023-08-23, 2:54:51 AM] ~ eli gerut: does anyone know who took the stuff left on the bench
[2023-08-23, 2:56:13 AM] ~ Ariella Smith-Eidelman: What was it ?
[2023-08-23, 3:01:58 AM] Tyler: Hey cleaning squad I have left my headphones on the bench
[2023-08-23, 3:02:25 AM] Tyler: If y’all could pretty please collect it I would
Love that
[2023-08-23, 3:02:28 AM] ~ Talia Joffe: I have them!
[2023-08-23, 3:02:35 AM] Tyler: THANK FUCK
[2023-08-23, 3:05:06 AM] ~ Talia Joffe: I’ll leave them on the table in the chadar
[2023-08-23, 3:46:45 AM] ~ Mikal Stein: We are doing rikkud at the janusz🙏🙏🙏🙏
[2023-08-23, 3:52:41 AM] Tyler: We are doing sleep at the bed 🙏🙏🙏🙏
[2023-08-23, 10:46:40 AM] ~ eli gerut: my beloved water bottle here’s a photo for reference
[2023-08-23, 10:46:45 AM] ~ eli gerut: image omitted
[2023-08-23, 10:47:07 AM] ~ Maisie: Check lost and found
[2023-08-23, 10:47:08 AM] ~ eli gerut: if u have it pls lmk i am so thirsty
[2023-08-23, 10:47:22 AM] ~ Maisie: Use a mug
[2023-08-23, 10:47:30 AM] ~ Maisie: Silly billy
[2023-08-23, 10:55:59 AM] ~ eli gerut: there was also a white tank top with it i would also love to have that also
[2023-08-23, 11:37:17 AM] ~ Hilla Kabazo: I gave it to t-stein
[2023-08-23, 11:46:05 AM] ~ eli gerut: so swag the goods have been located
[2023-08-23, 11:46:09 AM] ~ eli gerut: xoxo
[2023-08-23, 2:19:15 PM] ~ Solomon Bodrug: image omitted
[2023-08-23, 2:19:58 PM] ~ Solomon Bodrug: otherwise I will be claiming
[2023-08-23, 2:20:44 PM] Shir: Shir changed their phone number to a new number. Tap to message or add the new number.
[2023-08-23, 2:22:57 PM] Dan: Hello it is yours now this was one of my amelimots
[2023-08-23, 2:30:25 PM] Alias: Sol fits in a childs sleeping bag pass it on
[2023-08-23, 2:32:39 PM] ~ Gavriella TroperHochstein: Everyone come to the chadar!!
[2023-08-23, 2:56:28 PM] India: putting away the mugs so if u have one/seen one pls bring ‘em to the bach!
[2023-08-23, 5:28:54 PM] Ron: Does anyone know approximate time we will be dropped off in Vancouver / where we will be dropped off
[2023-08-23, 5:31:15 PM] ~ Tal Fisher-Taylor: We get dropped off wherever the CC dinner is JCC? My guess is we're on the 130 big ferry so maybe 5 or 6pm in Vancouver
[2023-08-23, 5:38:38 PM] ~ Ariella Smith-Eidelman: We get there around 4 tmrw
[2023-08-23, 5:38:53 PM] ~ Ariella Smith-Eidelman: And we are going to memorial park for CC dinner
[2023-08-23, 5:43:19 PM] Ron: Kk thank you
[2023-08-23, 6:06:52 PM] Tyler: Hey squad if anyone sees my book “the death of Ivan ilyich” plz return it to me :) specifically those in riff raff bc I might have left it in that tzrif
[2023-08-23, 6:07:31 PM] Mira: It’s on a shelf in my room, same with your pants
[2023-08-23, 6:08:03 PM] Tyler: The pants were returned but not the book :,(
[2023-08-23, 6:09:00 PM] Tyler: image omitted
[2023-08-23, 6:09:57 PM] ~ Maisie: image omitted
[2023-08-23, 6:16:23 PM] India: i’m missing my call me if you get lost hoodie and an oversized navy blue vest
lemme know if you’ve seen them!
[2023-08-23, 6:17:07 PM] Ezra: Bring your bags to the techno tent memorial
[2023-08-23, 6:29:34 PM] Dan: I'm going to Victoria should I also do that?
[2023-08-23, 6:35:58 PM] Rafi: image omitted
[2023-08-23, 6:37:16 PM] Dan: Bro thinks he opium
[2023-08-23, 6:41:52 PM] Alias: Crazy story, I have lost my earbuds again. They look the same as last time. Black, skull candy brand, one red bud, white apple adapter dongle attached. I’ve also lost my water bottle but I’m more worried about the earbuds
[2023-08-23, 6:42:39 PM] ~ Solomon Bodrug: don’t forget clothes line things outside of tzrif!
[2023-08-23, 6:43:38 PM] ~ karly: Are we allowed to bring our bags tomorrow morning?
[2023-08-23, 6:49:18 PM] ~ Maisie: Is anyone able to give me a lift to departure bay tomorrow?
[2023-08-23, 7:28:08 PM] ~ Gal Icek: image omitted
[2023-08-23, 7:30:35 PM] ~ Tal Fisher-Taylor: From the Gabriola ferry? We're all bussing
[2023-08-23, 7:41:30 PM] ~ Tal Fisher-Taylor: image omitted
[2023-08-23, 7:55:32 PM] India: image omitted
[2023-08-23, 8:01:05 PM] Rue: If anyone sees a black Fanny pack PLEASE lmk, mine is missing atm
[2023-08-23, 8:20:09 PM] India: bumping this cuz it’s one of my all time fav hoodies
[2023-08-23, 8:24:16 PM] Rafi: Sports shed is closed
[2023-08-23, 8:24:22 PM] Rafi: Please don’t take anything from it anymore
[2023-08-23, 8:24:56 PM] Rafi: But if u see sports equipment
[2023-08-23, 8:24:57 PM] Rafi: Please put it in
[2023-08-23, 8:54:21 PM] ~ Nadav: Yo I left some shorts and underwear on the polka dot clothesline odds somebody could get them to me in Montreal?
[2023-08-23, 8:57:10 PM] Rafi: India says she can grab them
[2023-08-23, 9:10:50 PM] ~ Tal Fisher-Taylor: Did we forget to do the tzevet photo?
[2023-08-23, 9:13:37 PM] ~ Ariella Smith-Eidelman: Doing it when we do final wills
[2023-08-23, 9:15:36 PM] ~ Lila: image omitted
[2023-08-23, 9:21:45 PM] ~ Nicole: Some of it is for swimming later
[2023-08-23, 9:49:13 PM] ~ Maisie: Oh, the bus is taking people to departure bay? My coach bus leaves at 1:00. Will it be there in time?
[2023-08-23, 10:30:45 PM] ~ Ariella Smith-Eidelman: Meet in the lower kvish in ten mins
[2023-08-24, 12:36:21 AM] ~ Talia Joffe: Kumzitz at the shmo in ~an hour
[2023-08-24, 12:55:54 AM] ~ Alex (shmeppy): everyone come bring ur bags to the uhaul!!!!!!!!! u can save one for tmr morning but we r loading rn
[2023-08-24, 1:21:05 AM] ~ Monty: https://vm.tiktok.com/ZMjeyBgA5/
[2023-08-24, 1:21:30 AM] ~ Monty: Us during bohemian rhapsody
[2023-08-24, 1:26:11 AM] ~ Alex (shmeppy): @17786771810
[2023-08-24, 1:26:15 AM] ~ Alex (shmeppy): image omitted
[2023-08-24, 1:33:31 AM] ~ Ariella Smith-Eidelman: Come to the shmo
[2023-08-24, 1:39:53 AM] ~ Lila: image omitted
[2023-08-24, 1:39:53 AM] ~ Lila: who moved the box with this laptop in it? and where is it now?
[2023-08-24, 1:41:49 AM] ~ Maisie: image omitted
[2023-08-24, 11:42:10 AM] ~ Zevi: image omitted
[2023-08-24, 11:45:27 AM] Arielle: Everything that was on the clothes lines is in a crate on the picnic benches come and get yo stuff
[2023-08-24, 11:46:05 AM] India: image omitted
[2023-08-24, 11:46:14 AM] India: image omitted
[2023-08-24, 11:46:17 AM] India: it’s in the bach!
[2023-08-24, 11:52:21 AM] Tyler: Mine lol
[2023-08-24, 11:57:59 AM] ~ Talia Joffe: Hey did anyone see/take a seashell field guide?
[2023-08-24, 12:00:08 PM] ~ Shir Steiner: image omitted
[2023-08-24, 12:08:14 PM] ~ Alex (shmeppy): did anyone ever find a black size medium bike crewneck it belongs to me and i love it!
[2023-08-24, 12:09:26 PM] Dan: Cates
[2023-08-24, 12:32:57 PM] ~ mai: image omitted
[2023-08-24, 12:48:13 PM] ~ Kiran: image omitted
[2023-08-24, 1:11:31 PM] ~ Maisie: Possibly Tali’s
[2023-08-24, 1:12:17 PM] ~ Maisie: image omitted
[2023-08-24, 1:12:48 PM] ~ Maisie: image omitted
[2023-08-24, 1:16:44 PM] ~ Gavriella TroperHochstein: image omitted
[2023-08-24, 1:34:34 PM] Ezra: It's rory's
[2023-08-24, 1:39:13 PM] ~ Ira Spiegelman: Uhhh if anyone is still at machaneh I forgot to take my knife back from the bayit if someone could grab it I’ll be at cc dinner
[2023-08-24, 1:56:58 PM] ~ Gavriella TroperHochstein: image omitted
[2023-08-24, 2:02:58 PM] ~ Noga Goldman: I gave it to mairav!
[2023-08-24, 2:07:18 PM] Ron: Are the shirts here I didn’t get one
[2023-08-24, 2:10:58 PM] ~ Mica: Please somebody send the naked photos!!
[2023-08-24, 2:11:02 PM] ~ Mica: (Just to me)
[2023-08-24, 2:31:10 PM] ~ Mica: image omitted
[2023-08-24, 2:31:22 PM] ~ Mica: image omitted
[2023-08-24, 2:31:23 PM] ~ Mica: image omitted
[2023-08-24, 2:31:23 PM] ~ Mica: image omitted
[2023-08-24, 2:31:23 PM] ~ Mica: image omitted
[2023-08-24, 2:31:25 PM] ~ Mica: ^cute photos I have of people
[2023-08-24, 2:31:38 PM] ~ Mica: video omitted
[2023-08-24, 2:31:47 PM] ~ Mica: image omitted
[2023-08-24, 2:31:58 PM] ~ Mica: image omitted
[2023-08-24, 2:31:58 PM] ~ Mica: image omitted
[2023-08-24, 2:31:59 PM] ~ Mica: image omitted
[2023-08-24, 2:31:59 PM] ~ Mica: image omitted
[2023-08-24, 2:31:59 PM] ~ Mica: image omitted
[2023-08-24, 2:32:00 PM] ~ Mica: image omitted
[2023-08-24, 2:32:00 PM] ~ Mica: image omitted
[2023-08-24, 2:32:00 PM] ~ Mica: image omitted
[2023-08-24, 2:32:01 PM] ~ Mica: image omitted
[2023-08-24, 2:32:02 PM] ~ Mica: image omitted
[2023-08-24, 2:32:02 PM] ~ Mica: image omitted
[2023-08-24, 2:32:03 PM] ~ Mica: image omitted
[2023-08-24, 2:32:03 PM] ~ Mica: image omitted
[2023-08-24, 2:32:03 PM] ~ Mica: image omitted
[2023-08-24, 2:32:04 PM] ~ Mica: image omitted
[2023-08-24, 2:32:04 PM] ~ Mica: image omitted
[2023-08-24, 2:32:05 PM] ~ Mica: image omitted
[2023-08-24, 2:32:05 PM] ~ Mica: image omitted
[2023-08-24, 2:32:06 PM] ~ Mica: image omitted
[2023-08-24, 2:32:06 PM] ~ Mica: image omitted
[2023-08-24, 2:32:52 PM] ~ agustina: ❤️❤️
[2023-08-24, 2:32:54 PM] ~ Gal Icek: Put it in the shared album
[2023-08-24, 2:34:15 PM] ~ Mica: Kk
[2023-08-24, 2:50:21 PM] Dan: Can I be added?
[2023-08-24, 2:50:45 PM] Dan: Thanks tal
[2023-08-24, 2:52:15 PM] ~ Alex (shmeppy): dan it’s this
[2023-08-24, 3:35:24 PM] ~ Maisie: He couldn’t figure out how to do a peace sign
[2023-08-24, 3:37:04 PM] ~ Jane: Hey everyone I’m really upset I cant be at the camp committee dinner tonight as I am still very sick but I’ve had so much fun this  summer and loved getting closer with you all. Good luck during the school year! ❤️❤️
[2023-08-24, 3:45:03 PM] ~ Maisie: Love you Jane
[2023-08-24, 3:57:53 PM] ~ Maisie: video omitted
[2023-08-24, 3:58:50 PM] ~ Maisie: According to other people he was seen earlier flashing people inside the terminal
[2023-08-24, 3:59:18 PM] ~ Maisie: I’m okay, it was just a little spooky since he was standing right beside me
[2023-08-24, 3:59:42 PM] ~ Gavriella TroperHochstein: that’s kookoonana
[2023-08-24, 3:59:47 PM] ~ Gavriella TroperHochstein: holy frijoles
[2023-08-24, 3:59:57 PM] ~ Maisie: Yup
[2023-08-24, 4:00:23 PM] ~ Maisie: He kept looking at me like he was gonna say something and he asked me if I was going to Victoria
[2023-08-24, 4:00:36 PM] ~ Maisie: I didn’t tell him of course
[2023-08-24, 4:00:49 PM] ~ Maisie: Anyhoo, that happened
[2023-08-24, 4:01:05 PM] ~ Maisie: As you were, guys
[2023-08-24, 4:09:26 PM] ~ Jackson Nozick: Where's the dinner gonna be and what time?
[2023-08-24, 10:08:58 PM] ~ Monty: @ the bayit!!!
[2023-08-24, 10:09:53 PM] ~ Monty: Ders lots of stuff so I’ll need some hands
[2023-08-24, 10:12:36 PM] Ron: Did anyone take my suitcase I forgot it
[2023-08-24, 10:17:05 PM] ~ Talia Joffe: It’s at the bayit
[2023-08-24, 10:20:16 PM] Ron: Tysm
[2023-08-24, 11:20:36 PM] ~ Alex (shmeppy): will there be snacks tn?
[2023-08-24, 11:20:46 PM] ~ Ariella Smith-Eidelman: Yes
[2023-08-24, 11:20:52 PM] ~ Alex (shmeppy): betski
[2023-08-24, 11:20:59 PM] ~ Alex (shmeppy): what’s the address again if the bayit
[2023-08-24, 11:21:27 PM] ~ Gal Icek: 5333 Ross St
[2023-08-24, 11:28:09 PM] ~ Noga Goldman: Hey everyone ❤️ I hope you have an amazing incredible life changing party tonight. I am not feeling well so I wont be coming, but know that I am so proud of all of you and I am so SO grateful for each of you. You make machaneh what it is. From yom meyuchad to rad hayom to peulot to chevratim to hatzagot to elections to after lunch shira - that is all you. I cant thank you enough for making the experiences of tzevet and chanichimot so profoundly meaningful. Please please reach out to me throughout the year. I want to hear from you and know what you’re up to!! You are all rockstars ⚡️🧚‍♀️🐞🪴🌈 see you soon 😘
[2023-08-24, 11:47:14 PM] ~ eli gerut: everyone who is late to the party::: you are uninvited. don’t bother showing up. you obviously don’t care about community. 😢😢😿 -alias, proprietor of the bayit
[2023-08-24, 11:47:54 PM] ~ Mica: Be right there!!
[2023-08-24, 11:47:55 PM] ~ Gavriella TroperHochstein: get over here it’s almost my bedtime and I want to see you all!!
[2023-08-24, 11:47:58 PM] ~ Monty: I’m COMIGN ALIAS
[2023-08-24, 11:48:38 PM] Rafi: KBASS and I are almost there
[2023-08-24, 11:50:50 PM] Yonnie: The suburbia squad (Arielle Yvonne and Yonni) will be there closer to 9:30
[2023-08-24, 11:54:47 PM] Ron: Same ^
[2023-08-25, 12:07:04 AM] Yonnie: We wish to be saved liquor
[2023-08-25, 12:20:41 AM] ~ Talya Stein: Samsies w me and mikey
[2023-08-25, 12:21:09 AM] Tyler: Same
[2023-08-25, 4:08:29 AM] ~ Zachary Bunim: does anyone have my computer charger by chance??
[2023-08-25, 4:14:31 AM] ~ Hilla Kabazo: Thank u for the good time cuties!! I love you all so much!!! And pls pls pls get home safely 🥰🥰
[2023-08-25, 5:08:33 AM] ~ Alex (shmeppy): i’m gonna miss u guys so much, thx for making this summer the best summer i’ve ever had❤️
[2023-08-25, 12:47:55 PM] Yonnie: Any bayit peeps awake?
[2023-08-25, 12:48:17 PM] ~ Hilla Kabazo: Yer
[2023-08-25, 12:48:41 PM] Yonnie: Can I be let in
[2023-08-25, 12:59:37 PM] ~ Zachary Bunim: !!
[2023-08-25, 1:04:44 PM] ~ karly: ^guys, he NEEEEDDSS his charger 🫥
[2023-08-25, 1:25:47 PM] India: thank u bayit shawties for hosting <3
[2023-08-25, 2:01:48 PM] ~ Tal Fisher-Taylor: Oops we forgot to cut the bracelets at CC dinner
[2023-08-25, 2:27:22 PM] Dan: What's it look like?
[2023-08-25, 2:29:34 PM] ~ mai: image omitted
[2023-08-25, 2:29:34 PM] ~ mai: image omitted
[2023-08-25, 2:29:34 PM] ~ mai: image omitted
[2023-08-25, 2:29:34 PM] ~ mai: image omitted
[2023-08-25, 2:29:34 PM] ~ mai: image omitted
[2023-08-25, 2:29:34 PM] ~ mai: image omitted
[2023-08-25, 2:29:34 PM] ~ mai: image omitted
[2023-08-25, 2:29:34 PM] ~ mai: image omitted
[2023-08-25, 2:29:35 PM] ~ mai: image omitted
[2023-08-25, 2:29:35 PM] ~ mai: image omitted
[2023-08-25, 2:29:35 PM] ~ mai: image omitted
[2023-08-25, 2:35:37 PM] ~ Zachary Bunim: white macbook charger says bunim on it
[2023-08-25, 6:57:29 PM] Shai Rubin: does anyone have the videos of the dances at yom israel
[2023-08-26, 10:59:31 PM] ~ Gal Icek: Did anyone take/saw hiking poles at machaneh or took it home with them?
[2023-08-26, 11:02:23 PM] ~ mai: I saw them in the grofit, red ones?
[2023-08-26, 11:17:50 PM] ~ Gal Icek: Black ones
[2023-08-27, 6:03:43 PM] ~ Zevi: What’s the password to view photos on the camp website?
[2023-08-27, 6:04:45 PM] Yvonne: yourmom2023
[2023-08-27, 6:05:00 PM] Yvonne: I actually don’t know
[2023-08-27, 6:05:08 PM] ~ Zevi: Ok that’s what I thought
[2023-08-28, 7:09:42 PM] Dan: I know it one sec
[2023-08-28, 7:16:44 PM] Dan: The password for the photos is P@rent2023
[2023-08-28, 7:16:54 PM] Dan: @15038408297
[2023-09-01, 7:30:28 PM] ~ Maayan: Hi Tzevet! Tzevet Higui (ooo) is currently looking for new machaneh representatives. As some of you may know tzevet higui is the movement’s “steering committee” they help to make decisions about movement related things like seminars, leadership, programs and more. Each year 2 representatives from every machaneh volunteer to be on tzevet higui, which meets for an hour every other week on zoom. Last year, me and Rue were the 2 representatives for Miriam and we are looking for people to take our place. If you’re interested or want to know more, please reach out to me or Rue asap!
[2023-09-01, 7:31:19 PM] Dan: How much time per week would I need to allocate towards this. Seems intriguing..
[2023-09-07, 4:32:52 PM] ~ Maisie: image omitted
[2023-09-07, 9:02:44 PM] ~ Maayan: My dream come true
[2023-09-07, 9:23:24 PM] Alias: There’s a joke in there somewhere about a school of fish. I just don’t have it yet
[2023-09-09, 12:44:06 AM] ~ Noga Goldman: Shabbat shalom everyone! madi sloben (a miriam alum) is running a program on ways to honor orange shirt day for moetzet kenim this sunday at 9:30 am PST/12:30 pm EST. It's going to be really cool and interesting, and it's open to all Canadians in HDNA! If you're interested in learning more about what you can do to fight for indigenous rights in Canada, you can join at this link: https://us02web.zoom.us/j/82221402252
[2023-09-19, 10:15:39 AM] Dan: This message was deleted.
[2023-09-20, 7:14:04 AM] ~ Alex (shmeppy): ~ Alex (shmeppy) changed their phone number to a new number. Tap to message or add the new number.
[2023-09-20, 7:15:06 AM] Rafi: Rafi changed their phone number to a new number. Tap to message or add the new number.
[2023-09-20, 9:27:38 PM] Dan: This message was deleted.
[2023-09-20, 9:27:40 PM] Dan: This message was deleted.
[2023-09-21, 9:48:15 AM] Tyler: Tyler changed their phone number to a new number. Tap to message or add the new number.
[2023-09-26, 7:44:40 PM] Rue: Hi tzevet, tonight is the first camp committee meeting of the year and it would be great to see some maapilimot faces there! Heres the link for the zoom which will start at 7:30 PST: https://us02web.zoom.us/j/89701737702
[2023-10-04, 4:34:05 PM] ~ Mica: Same lyrics as one of our beloved song but a notable different tune https://youtu.be/odOtw8p1RSo?si=Ek2gQ5l9JQLxa6CP
[2023-10-04, 4:35:30 PM] Dan: So cool!
[2023-10-07, 11:50:51 AM] Dan: If anyone is in Israel at the moment I hope you are okay!! gut wrenching sights coming through. Sending my love ❤️
[2023-10-07, 11:53:03 AM] ~ Shir Steiner: Thank you Dan❤️
[2023-10-07, 11:59:57 AM] Dan: Stay safe 🙏❤️
[2023-10-08, 5:30:10 AM] Ron: PRAYING FOR YOU ALL IN ISRAEL💙 the gaza dogs will run back with their tail between their legs. AM YSRAEL CHAI🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱🇮🇱 <This message was edited>
[2023-10-08, 5:41:11 AM] Ron: REMEMBER THAT IT IS THE IDF (Israeli defence force) THAT PROTECTS YOU IN THESE TIMES 💙💙💙🇮🇱🇮🇱🇮🇱🇮🇱 G-D BLESS THE IDF AND G-D BLESS THE LAND OF ISRAEL AND THE PEOPLE OF ISRAEL 💙💙🇮🇱🇮🇱💙💙💙🇮🇱💙🇮🇱💙💙💙💙💙 ISRAEL WILL PREVAIL AS IT ALWAYS DOES 💙🇮🇱🇮🇱💙💙
[2023-10-08, 10:09:54 AM] Dan: @17789033776 I appreciate your instagram stories for keeping us updated ❤️
[2023-10-08, 10:10:04 AM] Dan: AM YSRAEL CHAI 🇮🇱🇮🇱
[2023-10-08, 8:51:01 PM] Dan: How is everyone dealing with people who send them misinformation? I got sent a ridiculous post from a person i thought i was good friends with and it openly supported hamas.  Do I just block them?
[2023-10-08, 8:51:03 PM] Dan: https://www.instagram.com/p/CyIax5yrDpj/
[2023-10-08, 8:51:07 PM] Dan: like I got sent this ^^
[2023-10-08, 8:51:14 PM] Dan: just curious to know how everyones dealing with that
[2023-10-08, 8:52:15 PM] ~ Nicole: Personally would block
[2023-10-08, 8:52:38 PM] ~ Nicole: People who send that stuff won’t listen to reason
[2023-10-08, 8:52:46 PM] ~ Nicole: So it’s not worth your time and energy
[2023-10-08, 8:52:59 PM] Dan: yeah I tried to reason with her and she sent a 4 page long text detailing things that were irrelavant :(
[2023-10-08, 8:53:03 PM] Dan: just blocked her
[2023-10-08, 8:53:16 PM] ~ Gal Icek: It's not worth it... I would also report it
[2023-10-08, 8:53:56 PM] ~ Nicole: Remember also that you also need to take care of yourself and how you cope with it
[2023-10-08, 8:54:02 PM] ~ Nicole: These people don’t help in that process
[2023-10-08, 8:54:19 PM] Dan: Yeah I will thanks! 🙏 @16043120929 thanks thats really helpful advice been kinda worried for the past 3 days about this
[2023-10-08, 8:54:25 PM] Dan: need to take a break from ig tbh
[2023-10-08, 8:54:30 PM] Dan: appreciate and love yall
[2023-10-08, 9:01:03 PM] ~ Gal Icek: Also if anyone wants to talk to understand more/process together I'm here and on the east coast time zone.

I'm thinking about facilitating a zoom for miriam maapilimot tomorrow/Tuesday so we will not be alone in this. If this is smth you'de want to participate in send me a message
[2023-10-09, 10:02:35 AM] ~ Gal Icek: POLL:
What time do you want to attend the maapilimot zoom meeting about the war in Israel
OPTION: Today 11pm est/ 8pm pst/ 6am Israel (1 vote)
OPTION: Tomorrow 11am est/ 8am pst/ 6pm Israel (4 votes)
OPTION: Tomorrow 12pm est/ 9am pst/ 7pm Israel (7 votes)
OPTION: Tomorrow 11pm est/ 8pm pst/ 6am Israel (9 votes)
[2023-10-09, 1:20:15 PM] ~ Hilla Kabazo: Hi everyone! I wanted to extend an invite to tzevet members living in Metro Vancouver to the vigil that is happening at the Art Gallery this evening. This will be a space to think together about our movement partners, fellow tzevet members, family, and friends that are in Israel right now. This event is unaffiliated with local organizations and is being held by and for the Israeli and Jewish communities in Vancouver. I will personally be wearing a chultza and would love to see other members of my community there. Here’s the link for more information: https://facebook.com/events/s/vigil-for-israel/660304452901185/?mibextid=RQdjqZ
[2023-10-09, 4:04:51 PM] ~ Hilla Kabazo: I also encourage people who are attending to go with friends or family, tell other people where you’re going, have their phone on them, and not engage with people who are being verbally or physically aggressive!
[2023-10-09, 5:05:19 PM] ~ Gal Icek: This message was deleted.
[2023-10-09, 5:05:21 PM] ~ Gal Icek: This message was deleted.
[2023-10-09, 6:30:56 PM] ~ Gal Icek: So we will have the zoom tomorrow at
*11pm est
8pm pst
6am Israel time*

I know this doesn't work for everyone and we can have another meeting in another time as things go on
[2023-10-09, 6:31:34 PM] ~ Rafi Smith-Eidelman: What’s the date
[2023-10-09, 6:31:40 PM] ~ Rafi Smith-Eidelman: Is it the 11th at 6 am
[2023-10-09, 6:31:44 PM] ~ Gal Icek: Yes
[2023-10-09, 6:31:50 PM] ~ Rafi Smith-Eidelman: For israel
[2023-10-09, 6:31:55 PM] ~ Rafi Smith-Eidelman: And the 10th for everyone else?
[2023-10-09, 6:32:01 PM] ~ Gal Icek: Exactly
[2023-10-09, 6:32:10 PM] ~ Rafi Smith-Eidelman: Cool
[2023-10-09, 6:32:13 PM] Dan: Cool
[2023-10-10, 6:59:19 PM] ~ Gal Icek: Hi! Reminder that we will meet today in 4 hours, the zoom link will be sent latet
[2023-10-10, 10:33:37 PM] ~ Gal Icek: Camp Miriam is inviting you to a scheduled Zoom meeting.

Topic: Camp Miriam's Zoom Meeting
Time: Oct 10, 2023 11:00 PM Eastern Time (US and Canada)

Join Zoom Meeting
https://us02web.zoom.us/j/89206873106?pwd=dm1JNjBaVXc2Y0hXWWI3eDJLY0MwQT09

Meeting ID: 892 0687 3106
Passcode: 041750

---

One tap mobile
+17806660144,,89206873106# Canada
+12042727920,,89206873106# Canada

---

Dial by your location
• +1 780 666 0144 Canada
• +1 204 272 7920 Canada
• +1 438 809 7799 Canada
• +1 587 328 1099 Canada
• +1 647 374 4685 Canada
• +1 647 558 0588 Canada
• +1 778 907 2071 Canada
• +1 646 558 8656 US (New York)
• +1 646 931 3860 US
• +1 309 205 3325 US
• +1 312 626 6799 US (Chicago)
• +1 301 715 8592 US (Washington DC)
• +1 305 224 1968 US
• +1 253 215 8782 US (Tacoma)
• +1 346 248 7799 US (Houston)
• +1 360 209 5623 US
• +1 386 347 5053 US
• +1 507 473 4847 US
• +1 564 217 2000 US
• +1 669 444 9171 US
• +1 669 900 6833 US (San Jose)
• +1 689 278 1000 US
• +1 719 359 4580 US
• +1 253 205 0468 US
• +972 2 376 4510 Israel
• +972 3 978 6688 Israel
• +972 2 376 4509 Israel

Meeting ID: 892 0687 3106

Find your local number: https://us02web.zoom.us/u/kAPNVNr1u
[2023-10-11, 9:11:17 AM] ~ Gal Icek: image omitted
[2023-10-11, 9:28:48 AM] ~ Maisie: image omitted
[2023-10-11, 10:58:01 AM] ~ Gal Icek: For ppl that asked me yesterday for reliable news sources:
Ynet news (Israeli news site)
Times of israel
Cnn
Daily mail

And definitely not bbc
[2023-10-11, 10:58:18 AM] Dan: Amazing thanks 🙏
[2023-10-14, 8:11:44 PM] ~ Noga Goldman: image omitted
[2023-10-14, 8:12:13 PM] ~ Noga Goldman: To join any/all events you can click here

bit.ly/weekoflife
[2023-10-14, 9:06:23 PM] ~ Sadie Quinn: https://us02web.zoom.us/j/81581005697
Havdala is happening now!
[2023-10-14, 9:07:04 PM] Dan: I'm going to an in person vigil tn but I'll still rep the movement sorry guys
[2023-10-14, 9:07:11 PM] Dan: image omitted
[2023-10-18, 7:53:40 PM] ~ Lila: what’s the password for the miriam photo album on the website
[2023-10-18, 8:34:25 PM] Dan: P@rent2023
[2023-10-18, 8:34:34 PM] Dan: °°
[2023-10-18, 9:26:52 PM] ~ Lila: thank you!!
[2023-10-18, 9:40:39 PM] ~ Lila: hmm its not working
[2023-10-18, 9:44:38 PM] Dan: let me check again
[2023-10-18, 9:44:46 PM] Dan: thats what i wrote down
[2023-10-18, 9:45:34 PM] Dan: yup it works for me
[2023-10-18, 9:45:38 PM] Dan: P@rent2023
[2023-10-18, 9:49:07 PM] Yvonne: It doesn’t work for me either
[2023-10-18, 9:51:24 PM] Dan: weird
[2023-10-18, 9:51:33 PM] Dan: maybe its cause i have the cached one drive
[2023-10-18, 9:51:37 PM] Dan: let me see if i can send that
[2023-10-18, 9:53:47 PM] Dan: yeah weird
[2023-10-18, 9:53:50 PM] Dan: i cant login now
[2023-10-18, 9:53:57 PM] Dan: i had it saved but it says invalid pw
[2023-10-18, 9:56:19 PM] ~ Lila: strange
[2023-10-18, 9:56:40 PM] Dan: maybe they changed it?
[2023-10-19, 10:44:22 PM] Dan: is the victoria ken starting soon anyone know I know we usually do our halloween event as the first event of the year but im kinda confused
[2023-10-21, 7:30:36 PM] ~ Ariella Smith-Eidelman: Come to the movement wide havdallah it’s happening right now !!!!!!
[2023-10-25, 11:11:59 AM] Dan: Congratulations ARIELLA!!! #newrosh
[2023-10-25, 11:12:06 AM] Dan: Woot woot 🎉🎆🎉
[2023-10-26, 5:14:07 PM] ~ Ariella Smith-Eidelman: image omitted
[2023-10-26, 5:14:21 PM] ~ Ariella Smith-Eidelman: https://r20.rs6.net/tn.jsp?f=0012Vj34c6_1NM4rrWu69AuCHCYcK3VZfKAvu48rFl84qfnViP5YeJPhWkGSVVoFY8NR7AY89Q-UJk0XLRcba7wBoo4MUkwF870DoVfFK_0duWEjxF1HsXJ9sRWEun-Bx129qdSWKuqTUR1dr7v5B5oDJK9RjM_jAfsbluJ6OkVgoV8Zf5QjXFbjPa_1w00XSDKZmQrHB7_WZwj_93ee7w91EwjRTgrQnPhRW6B8Zvc6dVndFiNWy1_YB3OrjX27och&c=_HTkFg9tSNLJ_9oMRpI6EazsgeXfyGhJpajC6vppbi_pq25gziPRmw==&ch=g9WY8Sqmx-GgYLUvAAeWEMjc7dRMyMANCnC_zHRs13Rs6VmPEdlv8w==
[2023-10-27, 1:10:27 PM] ~ Rachel Oppenheimer: Did anyone meet at the end of the summer to talk about who would be running the vic ken? Everyone has moved around this year so idk who is here and  willing to do it. If there wasn’t a convo at machaneh we should make a group chat for vic and meet up at some point to discuss. Unless people have already organized something it’s definitely too late for a halloween event this year imo.
[2023-10-27, 1:22:25 PM] Dan: No one has talked to me. Are we doing anything?
[2023-10-27, 1:22:32 PM] Dan: We should make a gc
[2023-10-27, 1:24:57 PM] ~ Rachel Oppenheimer: I just texted you :)
[2023-10-27, 1:29:53 PM] ~ Tyler: Rachel and Dan ily
[2023-10-27, 1:30:15 PM] ~ Rachel Oppenheimer: Ily more
[2023-10-27, 1:30:21 PM] Dan: Love you homie 😘😻
[2023-10-27, 1:30:30 PM] ~ Tyler: Mwahmwahmwah
[2023-11-05, 1:43:20 AM] ~ Gal Icek: ~ Gal Icek changed their phone number to a new number. Tap to message or add the new number.
[2023-11-12, 2:39:27 PM] ~ Shir Steiner: ~ Shir Steiner changed their phone number to a new number. Tap to message or add the new number.
[2023-11-12, 4:01:18 PM] ~ Noga Goldman: image omitted
[2023-11-12, 4:01:18 PM] ~ Noga Goldman: image omitted
[2023-11-12, 4:01:19 PM] ~ Noga Goldman: image omitted
[2023-11-12, 7:47:04 PM] Shai Rubin: so beautiful when there isn’t a cloud of dust in the air
[2023-11-15, 11:58:55 PM] India: hey shawties
any1 have lyrics to yesh lanu machaneh, need it for a project :)
[2023-11-16, 12:10:11 AM] Shai Rubin: in english or hebrew?
[2023-11-16, 12:15:50 AM] India: hilla gave me english, having it also in hebrew would be a vibe
[2023-11-16, 12:16:17 AM] India: would be even more slayful if it was a picture 🙃
[2023-11-16, 12:16:55 AM] Shai Rubin: I don’t have a copy of the lyrics on me but I can write them out in hebrew and take a picture of them for you
[2023-11-16, 12:17:07 AM] Shai Rubin: do you want hebrew letters or a transliteration
[2023-11-16, 12:17:38 AM] India: omg your too sweet. however i was thinking more a pic of a song board
[2023-11-16, 12:17:50 AM] Shai Rubin: ah
[2023-11-16, 12:17:58 AM] Shai Rubin: don’t have that unfortunately
[2023-11-16, 12:18:46 AM] ~ Talia Joffe: image omitted
[2023-11-16, 2:27:08 PM] India: absolutely perfect! thanks TJ
[2023-12-05, 1:15:57 PM] ~ Noga Goldman: Does anyone have a picture of the new 75th mural that was painted for camps birthday this year?
[2023-12-06, 8:50:17 PM] ~ Kaela: ~ Ariella Smith-Eidelman added ~ Kaela
[2023-12-06, 9:00:55 PM] ~ Ariella Smith-Eidelman: Hi everyone  :)

TLDR: We wanna do a day-long tzevet seminar in Vancouver over winter break. Let us know if you wanna come and what dates work for u.

We hope you’re surviving finals and getting excited for some much needed rest & relaxation. Myself and the ken mazkirut have been thinking about putting together a 1 day (or half day) lil seminar to bring the Miriam tzevet in Vancouver together while many of you are home from school. I’m sure these past couple months have been difficult, and we want to create an opportunity to both come together and share how we’re feeling and what we’re thinking, and also just to have some silly fun times and celebrate being together.

We’re gonna send a poll to try to find a date that works best for most people, so please vote for every day that you can make it, not just the one that you’d like the most 🤩🌼🐮🍄
[2023-12-06, 9:01:42 PM] ~ Ariella Smith-Eidelman: POLL:
What dates work for you?
OPTION: December 23rd (10 votes)
OPTION: December 24th (10 votes)
OPTION: December 26th (9 votes)
OPTION: December 27th (7 votes)
OPTION: December 28th (6 votes)
OPTION: December 29th (5 votes)
OPTION: December 30th (5 votes)
[2023-12-09, 12:03:34 PM] ~ Kaela: Happy Chanukah folks ❄️🕯️🕎!
Just a reminder to fill this poll out if you haven’t already. We want to make sure lots of you can make it 🥰
[2023-12-17, 8:18:23 PM] ~ Kaela: Alrighty, we are setting the seminar date for *Saturday December 23rd*! The whole thing will likely be from the morning to late afternoon, maybe we'll do dinner together. I'll make a registration form tomorrow for y'all to sign up. Can't wait to see you next weekend 🥰😁
[2023-12-18, 4:18:18 PM] ~ Kaela: Here is the registration form! Please fill it out asap if you plan to come so we know how many friends to expect https://docs.google.com/forms/d/e/1FAIpQLSdXqaffdZN0du2xj-GYsGkrT01hs69PO7UOMjHSL2q6CgM4wQ/viewform?usp=sf_link
[2023-12-19, 2:19:04 PM] ~ Kaela: Bumping this again! Please sign up 🥺🥺
[2023-12-19, 11:04:48 PM] ~ Jane: This message was deleted.
[2023-12-26, 7:06:15 PM] ~ Hilla Kabazo: image omitted
[2023-12-26, 7:06:48 PM] ~ Hilla Kabazo: image omitted
[2023-12-26, 7:06:48 PM] ~ Hilla Kabazo: maap luz!
[2023-12-31, 1:03:46 AM] ~ Tal Fisher-Taylor: image omitted
[2023-12-31, 1:28:28 AM] Dan: Where did you find that sourcery of amazingness 😭
[2023-12-31, 1:35:24 AM] ~ Tal Fisher-Taylor: image omitted
[2023-12-31, 1:36:25 AM] Dan: Lovely I will seek out a side quest to acquire this from a bookstore :)
[2023-12-31, 1:38:23 AM] ~ Tal Fisher-Taylor: Funny part is that I didn't realize it's currently Saturday night 😂
[2023-12-31, 1:41:58 AM] Dan: I love that for you!! 😂 ❤️
[2023-12-31, 1:44:28 AM] ~ Ana: I’ve had that book for so long and never knew!!
[2024-01-18, 6:40:53 PM] Ron: Hey guys probably a little late but if you are posting about the situation (no matter your politics or “side”) you should really remove Chanechim from your stories because a couple of them have been VERY confused about certain posts (asking me and some other tzevet about it) and what’s most important is them not feeling the division among tzevet or community in general. I blocked chanechim from my story from the beginning because I didn’t want my strong opinions to influence them and I really think we should’ve all done that from the start (Especially if they are israeli or have israeli family). So much loves ✨💖💖💖
[2024-01-18, 6:41:53 PM] ~ Nicole: Thank you so much for saying this Ron 💙💙
[2024-01-18, 6:46:05 PM] Ron: Luvs u💙
`