/**
 * Collects the images of the current board members and populates a 2 column 
 * grid with their portraits and introductions  
 */

// Utilize Vite.js glob bundling/hashing to import headshots as a object
// containing each image
const images = import.meta.glob<{default: string}>(
    // Specify the path to headshots and add all relevant file extensions
    '../img/board/2024-2025/*.{jpg,jpeg,JPG,png}', 
    { eager: true }
  );

// Converting the object into the array, boardHeadshots where each image is 
// accessed by the name of the original file 
const boardHeadshots = Object.fromEntries(
    Object.entries(images).map(([path, module]) => {
        const fileName = path.split('/').pop();
        return [fileName, module.default];
    })
);

function Board() {
    return(
        <div>
            <div className="container csa-board text-center">
                <h2>The CSA Board (2024 - 2025)</h2>

                <div className="row">
                    <hr />
                    
                    {/* President */}
                    <div className="row">
                    <div className="col-sm-6 animated fadeInUp csa-delay-2">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Keene Cheung.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Grace Carter - President</h4>
                    <div className="board-desc">
                        <p>
                        Hi! My name is Grace and I am a third year student in 
                        Marshall collage. I am a pharm chem major and plan on 
                        going to pharmacy school after I graduate. In my free 
                        time I love to go to the beach, try new coffee shops, 
                        and binge watch TV shows. I am so excited to serve as 
                        this year's CSA president and hope to put on a lot of 
                        cool events and foster a great community of scholars!
                        </p>
                    </div>
                    </div>

                    {/* Vice President */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['annie_tran.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Annie Tran - Vice President</h4>
                    <div className="board-desc">
                        <p>
                        Hi! I'm Annie, and I’m a third year studying human 
                        biology. I joined this org because I love meeting new 
                        people and helping plan events. Outside of school, I 
                        enjoy baking, watching movies, and exploring San Diego.
                        </p>
                    </div>
                    </div>
                    </div>
                    
                    {/* Vice President */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Kristilynn Effie.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Kristilynn Effie - Vice President</h4>
                    <div className="board-desc">
                        <p>
                        My name is KristiLynn Effie, and I am a junior in Sixth college
                        studying Visual Arts-Studio with a minor in Art History and
                        Criticism. Hence my major, in my free time you can find me
                        painting or illustrating – however I also love spending time with
                        family and friends, and catching up over coffee. My professional
                        journey includes roles as a Student Assistant at UCSD's Retirement
                        Resource Center, and Social Media Coordinator alongside serving as
                        this year’s Vice President of the CSA; a title I hold with great
                        pride.
                        </p>
                    </div>
                    </div>
                    </div>

                    {/* Secretary */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Justin_Phan.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Justin Phan - Secretary</h4>
                    <div className="board-desc">
                        <p>
                        Hi I'm Justin! I'm a second year Marine Biology major at 
                        Sixth College with plans to also major in Cognitive 
                        Behavioral Neuroscience. In my free time I like playing 
                        videogames, watching movies, going out with friends, and 
                        I love going to artist alleys to collect things and spend 
                        all my money. I also volunteer at the Birch Aquarium and 
                        you'll usually find me at the tidepool plaza some time 
                        every week!
                        </p>
                    </div>
                    </div>

                    {/* Treasurer */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Grace Carter.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Grace Carter - Treasurer</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Grace Carter and I am a second year chemistry
                        major in Marshall college. I plan to go to pharmacy school after
                        undergrad. In my free time I love to dance, go to the beach, sew,
                        and spend time with friends.
                        </p>
                    </div>
                    </div>

                    {/* Treasurer */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Sirajam Munira.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Sirajam Munira - Treasurer</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Sirajam Munira. I am a second-year Marshall
                        student, majoring in International Studies - International
                        Business. Fun fact about me: I love to play tennis and am a
                        perfectionist :)
                        </p>
                    </div>
                    </div>

                    {/* Peer Mentor Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Emily Park.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Phuong Nguyen - Peer Mentor Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hey, I'm Phuong! I'm a 3rd year, Human bio major at 
                        Eighth college. I love everything anatomy and am pre-PT!
                         This is my second year on board for CSA and I've seen 
                         so much growth within the org since - this year, I'm 
                         hoping we can make it an even better and more engaging 
                         community :) Fun fact, I grew up in the Bay Area and 
                         have a dog at home!
                        </p>
                    </div>
                    </div>

                    {/* Peer Mentor Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Jervic Aquino.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Jason Dinh - Peer Mentor Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hey, my name is Jason and I am an 2nd year at Warren 
                        College. I am majoring Business Economics and plan on 
                        minoring in accounting. I am here to make the best of 
                        my experience at UCSD. 
                        </p>
                    </div>
                    </div>

                    {/* Social Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Reynelle Aricheta.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Alondra Gutierrez - Social Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hi, I’m Alondra! I’m a second-year Pharmacological 
                        Chemistry major at UCSD and I’m excited to serve as 
                        CSA’s Social Co-Chair. In my free time, I enjoy 
                        volunteering, exploring San Diego, and spending time 
                        with friends. I can’t wait to help make this year full 
                        of great memories for everyone!
                        </p>
                    </div>
                    </div>

                    {/* Social Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Andrew Doan.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Andrew Doan - Social Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hi Everyone! My name is Andrew Doan and I am currently studying
                        Math-CS as a 2nd year in Eighth College. I typically play video
                        games, play sports, or watch shows in my free time but I am always
                        willing to try new things. Feel free to reach out!
                        </p>
                    </div>
                    </div>

                    {/* Volunteer Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Desiree Menjivar.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Desiree Menjivar - Volunteer Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Desiree and I am a third-year from Revelle
                        College. I am currently majoring in Marine Biology and planning to
                        minor in General Biology. I enjoy walking along the beach, baking,
                        writing, and going thrift shopping.
                        </p>
                    </div>
                    </div>

                    {/* Volunteer Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Annie Tran.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Annie Tran - Volunteer Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Annie, and I am a second-year Biochemistry major
                        in Marshall College. I'm from San Diego, and I enjoy watching
                        movies, collecting plants, and going out with friends and family.
                        </p>
                    </div>
                    </div>

                    {/* Webmaster */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Carlos Gomez.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Carlos Gomez - Webmaster</h4>
                    <div className="board-desc">
                        <p>
                        Hi, I'm Carlos, a third year Math-CS major from Sixth college, and
                        I joined CSA in order to contribute to fun events and to create a
                        more close-knit community.
                        </p>
                    </div>
                    </div>

                    {/* Webmaster */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Foster Dang.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Foster Dang - Webmaster</h4>
                    <div className="board-desc">
                        <p>
                        Hi guys! I'm Foster and I'm a third-year Computer Engineering
                        major in Sixth College. Outside of school I play an unhealthy
                        amount of Deep Rock Galactic and (try to) go to the gym. I also
                        like listening to older Chinese music and am currently trying to
                        enhance my Cantonese speaking abilities. As webmaster, I'm always
                        looking to improve the website so feel free to email me (or
                        Carlos) if you have any ideas or concerns!
                        </p>
                    </div>
                    </div>

                    {/* Publicity Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Karen_Lorenzo_Villegas.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Karen Lorenzo - Publicity Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hi my name is karen! I’m a second year CSP/CSA scholar 
                        and i’m really looking forward to meeting everyone! I’m 
                        from San Diego/Murrieta and I love to go get coffee and 
                        study ✨  I love listening to english rnb/pop music but 
                        also spanish pop/bachata! I plan to one day pursue a 
                        career in Speech Language Pathology/Audiology! Outside 
                        of academics, I have an on-campus job but still make 
                        time to go to the beach, museums, and amusement parks on 
                        weekends. 
                        </p>
                    </div>
                    </div>

                    {/* Publicity Chair */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Maria Habashy.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Hillary Chen - Publicity Chair</h4>
                    <div className="board-desc">
                        <p>
                        Hii!! I’m Hillary. I was born and raised in Sacramento, 
                        CA. Im a huge pet lover and I have a white Pomeranian of 
                        my own!  My hobbies are drawing, games, and experiencing 
                        different restaurants with my friends 
                        (I’m a huge foodie.) If I’m not doing classwork, I’m 
                        making artwork or working in a lab!
                        </p>
                    </div>
                    </div>

                    {/* Director-At-Large */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Felicia Gallardo.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Jervic Aquino - Director-At-Large</h4>
                    <div className="board-desc">
                        <p>
                        Hi guys! I'm Jervic, a third-year Revelle student 
                        majoring in General Biology and planning on minoring in 
                        Bioethics. I'm interested in forensics and hoping to 
                        eventually work for a government agency. In my free 
                        time, I like to watch shows on Netflix and go on walks 
                        while listening to music.
                        </p>
                    </div>
                    </div>

                    {/* Director-At-Large */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Annie Nguyen.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Annie Nguyen - Director-At-Large</h4>
                    <div className="board-desc">
                        <p>
                        Hello, my name is Annie and I am a third year at Sixth College,
                        double majoring in Political Science (Public Law) and Business
                        Economics, with a minor in Accounting! In my free time, I love to
                        try new foods and go shopping!
                        </p>
                    </div>
                    </div>

                    {/* Director-At-Large */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Kaitlyn Tan.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Kaitlyn Tan - Director-At-Large</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Kaitlyn and I am a second-year Marshall student
                        majoring in Chemistry. I am passionate about addressing health
                        disparities faced by minority groups, while enjoying webtoons and
                        crafts in my free time. If you are looking for someone to cafe hop
                        with, I'm your person!
                        </p>
                    </div>
                    </div>

                    {/* Freshman Ambassador */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Leyna Thai.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Leyna Thai - Freshman Ambassador</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Leyna, and I am a first year Revelle student
                        majoring in Biochemistry. I enjoy going outside, traveling and
                        volunteering whenever I can!
                        </p>
                    </div>
                    </div>

                    {/* Freshman Ambassador */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Leo Nunez.png']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Leo Nunez - Freshman Ambassador</h4>
                    <div className="board-desc">
                        <p>
                        Nice to meet you! I’m Leo, a first-year bioengineering undergrad
                        assigned to and living in Eighth college, specifically Sankofa. I
                        love slurpees, tacos, and more importantly animals! It’s a
                        pleasure to be at UCSD, and I’m very excited to see everyone!
                        </p>
                    </div>
                    </div>

                    {/* Board Intern */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Alondra Gutierrez.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Alondra Gutierrez - Board Intern</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Alondra and I am a first-year Pharmacological
                        Chemistry major. I am a part of seventh college and I enjoy
                        writing poetry, listening to music, and hanging out with my
                        friends.
                        </p>
                    </div>
                    </div>

                    {/* Board Intern */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Jenni Cruz.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Jenni Cruz - Board Intern</h4>
                    <div className="board-desc">
                        <p>
                        My name is Jenni, I am a freshman here at UCSD, I am majoring in
                        Psychology and I am in Seventh college!
                        </p>
                    </div>
                    </div>

                    {/* Board Intern */}
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Berleen Grewal.png']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Berleen Grewal - Board Intern</h4>
                    <div className="board-desc">
                        <p>
                        Hey! My name is Berleen Grewal, and I'm a first year Electrical
                        Engineering student living in Sixth College. Some of my hobbies
                        include crocheting, painting, and watching Netflix shows. My
                        favorite show this year is definitely Gilmore Girls!
                        </p>
                    </div>
                    </div>

                    {/* Board Intern */}
                    <div className="col-sm-6 animated fadeInUp">
                        <div className="board-image">
                            <img
                            alt="board picture"
                            className="lazy"
                            src={boardHeadshots['Mikey Nguyen.png']}
                            loading="lazy"
                            />
                        </div>
                        <h4>Mikey Nguyen - Board Intern</h4>
                        <div className="board-desc">
                            <p>
                            Hey y’all! I’m Mikey Nguyen, a first-year Computer Science major
                            from Eighth College. Fun fact about me is that I despise Seaside
                            now and don’t listen to Keshi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Board;