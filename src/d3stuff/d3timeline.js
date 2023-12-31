import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResize } from '../resize.js';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import timelineDrawing from '../drawings/timelineDrawing';
import { drawTimelineEvents } from '../drawings/drawTimelineEvents';
import topLeftTimeline from '../images/top-left-timeline.png';
import topRightTimeline from '../images/top-right-timeline.png';
import topTimeline from '../images/top-timeline.png';
import ambience from '../images/ambience.mp3'

function D3timeline() {
	
    
	const data = [
		{
            title: "First Date",
			ts: 1659769200000,
            date: "August 6th, 2022",
            description: "The beginning of us. Our first meal together, movie together, and hand holding (:O! So lewd!).",
            images: [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136385807847014501/image0.jpg"
            ],
            videos: [
                
            ]
        }, 
        {
            title: "First hangout with (most) white van peeps in SF!",
            date: "August 10th, 2022",
			ts: 1660114800000,
            description: "When we went on a group hangout as a couple in SF, Daisy trying Gram for the first time!",
            images: [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136386163465257080/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136386213318770851/image0.jpg"
            ],
            videos: [
                
            ]
        }, 
        {
            title: "Our Love Video game, Mobile Ark!",
            "date": "August 11th, 2022",
			ts: 1660201200000,
            "description": "Although we've played countless amount video games by now, this is our first and most feeling-filled. Here's a challenge, can you name all of our dinos?",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136517341522444328/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136517608670253136/image0.jpg"
            ],
            "videos": [

            ]
        },
        {
            "title": "Second Date",
            "date": "August 12th, 2022",
			ts: 1660287600000,
            "description": "We first had our very first together Kura experience! Then we went to Round 1. This is where we got Mr. Floof! (And let's not forget the two bananas~ 😏)",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136501324100415608/image0.jpg",
                ""
            ],
            "videos": [
                "daisy-dance"
            ]
        }, 
        {
            "title": "First Berkeley Date",
            "date": "September 4th, 2022",
			ts: 1662274800000,
            "description": "Our first Berkeley Date!! Gosh, the amount of times we go to Berkeley now.. Whether we're getting Marugame or Seoul Hotdog. The memories flood me so much. And then we went to Saga Kitchen! Although we weren't too hungry by then, we just ate slowly and chat about the differences in our Chinese.",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136518502694535198/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136519100076671056/image0.jpg"
            ],
            "videos": [
                
            ]
        }, 
        {
            "title": "Daisy's Birthday Celebration! Version Fresno.0",
            "date": "September 21st, 2022 - September 22nd 2022",
			ts: 1663743600000,
            "description": "Our celebration at Mochuelo! This is also our first time in Fresno together. Who knew you would come over so much~? (P.S. Rip fried goat cheese T.T).",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136519319572992080/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136520235588014091/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136520336846901329/image0.jpg"
            ],
            "videos": [
                
            ]
        }, 
        {
            "title": "Daisy Birthday Date Version Bay.0",
            "date": "September 23rd, 2022",
			ts: 1663916400000,
            "description": "Our celebration again! We had Soba Ichi, you had soba for the first time! It's not exactly your thing, but it's good to try it!",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136521419409334302/image0.jpg"
            ],
            "videos": [
                
            ]
        }, 
        {
            "title": "First South Bay Date!",
            "date": "October 15th, 2022",
			ts: 1665817200000,
            "description": "Our first south bay, who knew so much yummy food was there.. Daeho.. Sgd Tofu House.. Ramen Nagi.. Sheesh.",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136526229609140305/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136526262848987226/image0.jpg"
            ],
            "videos": [
                
            ]
        }, 
        {
            "title": "Fun Date to First Mall and First Mochinut!",
            "date": "October 22nd, 2022",
			ts: 1666422000000,
            "description": "We went to Mochinut for the first time for mochi donuts! I never had them before! Then we went to stoneridge to go shopping together for the first time!",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136531156364443791/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136531211347574814/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136531253768761354/image0.jpg"
            ],
            "videos": [
                
            ]
        }, 
        {
            "title": "Sweet Gram + Bun Rieu Date! and smol Uniqlo day!",
            "date": "November 11th, 2022 - November 12th, 2022",
			ts: 1668153600000,
            "description": "Gram and the eye-opening Bun Rieu! It doesn't get better than this. Also Uniqlo because.. Uniqlo.",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136534321331707955/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136533691418554439/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136534386859323452/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136534408682283028/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136540221811474432/image0.jpg"

            ],
            "videos": [
                
            ]
        }, 
        {
            "title": "Berkeley Date 2.0!",
            "date": "November 23rd, 2022",
			ts: 1669190400000,
            "description": "We went to Berkeley! We got some boba and stuffs, but the fun part of playing Po Go walking through UC Berkeley!",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136540646035963934/image0.jpg"
            ],
            "videos": [
                
            ]
        }, 
        {
            "title": "Revisiting our First Date Brunch Spot!",
            "date": "November 27th, 2022",
			ts: 1669536000000,
            "description": "Revisiting Cafe Jolie! Our first date brunch spot! Remastered!",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136542586966909018/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136542771973460049/image0.jpg"
            ],
            "videos": [
                
            ]
        }, 
        {
            "title": "~The Super Romantic Moments of Great America Christmas Night~",
            "date": "December 20th, 2022",
			ts: 1671523200000,
            "description": "Do you still remember? The romantic setting that night; the night time breeze with the christmas lights, the bravery in each ride we took, the carousel, and let's not forget the one small dance with the tip over we had~ Do you remember how doki doki it felt?",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136543796969091132/image0.jpg"
            ],
            "videos": [
                "carousel"
            ]
        }, 
        {
            "title": "First Time At My Grandparents'!",
            "date": "December 27th, 2022",
			ts: 1672128000000,
            "description": "Your first visit to my grandparents'! I think you made the greatest first impressions when u swept the floor with Majong! Go honey!!",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136549539743023117/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136550035421675631/image0.jpg"
            ],
            "videos": [
                
            ]
        }, 
        {
            "title": "First Meal Cooked For Honey!! And at Fresno",
            "date": "January 10th, 2023",
			ts: 1673337600000,
            "description": "First meal cooked for my honey! This was the first of many many more! Also first staying at Fresno with me~ and a bunch of faces you took on my phone -.-",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136550214233247814/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136550502767792168/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136550560124899438/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136550533075832893/image0.jpg"
                
            ],
            "videos": [
                
            ]
        },
        {
            "title": "First (I think) Time Having Dinner With Your Family!",
            "date": "January 14th, 2023",
			ts: 1673683200000,
            "description": "First time having dinner with your family! We had some crazy krab guts with rice and Kewpie mayo! Also got the rainbow cake for your fam.",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136558016829849610/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136558300574519316/image0.jpg"   
            ],
            "videos": [
                
            ]

        },
        {
            "title": "SF hangout Double Date!",
            "date": "February 5th, 2023",
			ts: 1675584000000,
            "description": "Double Date with Lawrence and Kristen! The origin of the K-drama kiss scene~ O-la-la~ Also Kristen meme vid >.>",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136562763565641758/image0.jpg",
                ""   
            ],
            "videos": [
                "kdramakiss"
            ]

        },
        {
            "title": "~❤️ Valentine's Day ❤️~",
            "date": "February 10th, 2023",
			ts: 1676016000000,
            "description": "Will you.. be my valentine..? Oh. you have been for a while now. Right! Our first Valentines Day together!",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136564660041158656/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136565188183736331/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136564871346004050/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136564912836067338/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136564950979055637/image0.jpg"

            ],
            "videos": [
                
            ]

        },
        {
            "title": "Cherry Blossom and Nature+ Sf Double Date!",
            "date": "March 30th, 2023",
			ts: 1680159600000,
            "description": "Another SF double date! This one's highlights have got to be pictures. Just look at em! Props to Kris for taking these.",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136566006106574890/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136565970958290954/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136565931892555826/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136565888011735092/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136565796311662643/image0.jpg"   
            ],
            "videos": [
                
            ]

        },
        {
            "title": "Fry Day!! in Fresno :3",
            "date": "April 8th, 2023",
			ts: 1680937200000,
            "description": "God damn, we fried a lot that day, it was so good too. Do you remember the yumminess?",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136567184999596042/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136567221418721301/image0.jpg"   
            ],
            "videos": [
                
            ]

        },

        {
            "title": "First FAAS Visit Together!",
            "date": "May 25th, 2023",
			ts: 1684998000000,
            "description": "I love kitten so much.. I love you more though~ <3 Rizz +100.",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136567834764378153/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136567863054966815/image0.jpg"   
            ],
            "videos": [
                "FAAS"
            ]

        },
        {
            "title": "Deeeeep South Day Date! Of many many..",
            "date": "June 16th, 2023",
			ts: 1686898800000,
            "description": "One of the many and many south bay dates we've had.",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136568941142089758/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136568959651549284/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136569021869850714/image0.jpg"   
            ],
            "videos": [
                
            ]

        },
        {
            "title": "Our First SF Trip Just Us!!",
            "date": "June 30th, 2023",
			ts: 1688108400000,
            "description": "Gosh.. The food was emaculate.. What a day. I hope you loved it as much as we love each other~",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136569728182267964/image0.jpg"
            ],
            "videos": [
                "tsukemen"
            ]

        },
        {
            "title": "Local day with Kristen visiting!",
            "date": "July 5th, 2023",
			ts: 1688540400000,
            "description": "This day was fun! Remember the poker? Also Kristen's QiQi fallen. Kek.",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136569811879608320/image0.jpg"
            ],
            "videos": [
                
            ]

        },
        {
            "title": "Group Hangout! HSR Sun Right + Badminton!",
            "date": "July 22nd, 2023",
			ts: 1690009200000,
            "description": "Arguably one of the most action packed, fun, and overall satifying group hangouts! It was so fun, we left sweating! (literally)",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136570749478502491/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136570725591941271/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136571543216988261/image0.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136571565279023104/image0.jpg"   
            ],
            "videos": [
                
            ]

        },
        {
            "title": "Alameda Fair!!",
            "date": "July 29th, 2023",
			ts: 1690614000000,
            "description": "Our first fair together! Damn, what a long fair it was! Down all the way to the bridge.",
            "images": [
                "https://cdn.discordapp.com/attachments/584882522211483754/1136572908995608606/IMG_2780.jpg",
                "https://cdn.discordapp.com/attachments/584882522211483754/1136572909339545720/IMG_2770.jpg"   
            ],
            "videos": [
                
            ]

        }
    ]

    

    const navigate = useNavigate();
    const [play, setPlay] = useState(false)

	const dateHelper = (date) => {
		const tempDate = new Date(date)
		return `${tempDate.getMonth() + 1}/${tempDate.getDate()}/${tempDate.getFullYear()}`
	}
	
	console.log(new Date('2023, 07, 29').getTime());

	const player = useRef();

    const pressedPlay = () => {
        player.current.play()
        setPlay(!play)
    }

    const pressedPause = () => {
        player.current.pause()
        setPlay(!play)
    }

    // useEffect(() => {
    //     pressedPlay()
    // }, [])

    


	// Getting the size of the root Div element (being the screen)
	const rootRef = useRef(HTMLDivElement | null);
	// getting the right size
	const size = useResize(rootRef);
	const drawTimelineEvents = (rootElement, windowSize, timelineEvents) => {
		const { width, height } = windowSize;
		console.log(width);

		const clickHandler = (d) => {
			console.log('<-- Inside Event Handler function --->');
			// console.log(d.title);
			navigate(`/event/${d.title}`);
		};

		const PADDING = width / 8;
		const scale = scaleLinear()
			.domain([
				timelineEvents[0].ts,
				timelineEvents[timelineEvents.length - 1].ts,
			])
			.range([0 + PADDING, width - PADDING]);

		select(rootElement)
			.select('svg')
			.append('g')
			.selectAll('.timeline-event')
			.data(timelineEvents)
			.enter()
			.append('circle')
			.attr('r', 8)
			.attr('class', 'timeline-event')
			.attr('cy', function (d) {
				return 0;
			})
			.attr('cx', function (d, i) {
				// console.log('---', scale(d.ts));
				return scale(d.ts);
			})
			.attr('transform', `translate(${0}, ${height * (1 / 2)})`)
			.attr('fill', function (d) {
				return 'pink';
			})
			.attr('stroke', 'rgba(0,0,0,1)')
			.on('mouseover', function (d, i) {
				select(rootElement)
					.select('svg')
					.append('text')
					.attr('class', 'timeline-event-text')
					.attr('font-family', 'Arial')
					.attr('font-size', '16px')
					.attr('y', height * (1 / 2) - 16 - 10)
					.attr('x', function (_d) {
						return scale(d.target.__data__.ts);
					})
					.attr('text-anchor', function (innerD) {
						if (scale(d.target.__data__.ts) > width * (3 / 4)) {
							return 'end';
						} else if (scale(d.target.__data__.ts) > width / 2) {
							return 'middle';
						} else {
							return 'start';
						}
					})
					.style('pointer-events', 'visible')
					.style('fill', '#004669')
					.style('font-weight', 'bold')
					.text(`${i.title}`)
					.append('tspan')
					.text(`${dateHelper(i.ts)}`)
					.attr('x', scale(d.target.__data__.ts))
					.attr('y', height * (1 / 2) - 32 - 10);
			})
			.on('click', (d, i) => {
				// console.log(i);
				clickHandler(i);
			})
			.on('mouseout', function (d, i) {
				select(rootElement).selectAll('text.timeline-event-text').remove();
			});
	};
	useEffect(() => {
		select(rootRef.current)?.select('svg').remove();

		if (size) {
			select(rootRef.current)
				.append('svg')
				.attr('width', size.width)
				.attr('height', size.height);
			timelineDrawing(rootRef.current, size, data);
			drawTimelineEvents(rootRef.current, size, data);
		}
	}, [size]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				// justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			
			<h1 className="sakura-h1" style={{marginTop: '8vw'}}> A Year of Us.</h1>
            {/* <button onClick={() => {
                setPlay(!play)
            }} >hi</button> */}
            <audio ref={player} src={ambience}/>
            {play ? <button className='pause-button' onClick={pressedPause}></button> : <button className='play-button' onClick={pressedPlay}></button>}
			<div
				ref={rootRef}
				className="timeline"
				style={{ margin: '5vw', marginTop: 100 }}
			>
				<img className="left-column" src={topLeftTimeline} />
				<img className="center-column" src={topTimeline} />

				<img className="right-column" src={topRightTimeline} />
			</div>
		</div>
	);
}

export default D3timeline;
