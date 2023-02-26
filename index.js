//Question 1
function instagramPost(handleOfAuthor, content, imageLinks, numberOfLikes, numberOfViews) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLinks = imageLinks;
    this.numberOfLikes = numberOfLikes;
    this.numberOfViews = numberOfViews;
}

//Question 2
const instagramPost1 = new instagramPost('enioluwaofficial', 'I said its Election Drip, we are doing this for ourselves we are doing this for Nigeria, let Goooo!!NG', 'https://instagram.flos3-2.fna.fbcdn.net/v/t51.2885-15/333119265_527736826012741_1525093270738650393_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.flos3-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=XnaU2iaBMZYAX9Lo1Dc&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA0NTg3MzM3MDAxNjE1NzI5OQ%3D%3D.2-ccb7-5&oh=00_AfAZHMwRJMDQe0irw4NofQQD2SbOlu6YEl1v6t4Mc2QuhA&oe=63FF2234&_nc_sid=6136e7', 10, 302, 302);
const instagramPost2 = new instagramPost('_hemjay', 'Me, myself and I 🥰😍', 'https://instagram.flos3-2.fna.fbcdn.net/v/t51.2885-15/322775035_675472477401587_4265305493410403464_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.flos3-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=S_8ejj4cc5wAX-L7Zjg&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAwNTMxMzUyMzk5ODk3MzUxNg%3D%3D.2-ccb7-5&oh=00_AfDdGHu_V0YjbXqH6dgDWWypOA9DdU1P9tjowtFGgD45Wg&oe=63FEBDF8&_nc_sid=1527a3', 133, 30);

console.log(instagramPost1);
console.log(instagramPost2);

//Question 3a
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location
    }
};
const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos');
console.log(musa);

//Question 3b
function jambScores(ENG, GOVT, LIT, CRK) {
    return {
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK
    }
};
const musaJambScores = jambScores(70, 85, 82, 94);
musa.jambScores = musaJambScores;

//Question 4
//Option 1 - Using Oject.assign
const profile = {
    firsName: 'Busolami',
    lastName: 'Oluwabi',
    age: 20,
    courseOfStudy: 'Chemistry and Education',
    Year: '3rd Year'
}
const profile2 = Object.assign({}, profile)

profile2.firsName = "Fadekemi";
profile2.lastName = "Ajose";
profile2.courseOfStudy = 'Food Science And Technology';

console.log(profile);
console.log(profile2);

//4aii) Using spread Synax
const profile3 = {...profile };
profile3.courseOfStudy = 'Law';
profile3.Year = '500 Level';
profile3.firsName = 'Omolola';

console.log(profile3);

const profile4 = JSON.parse(JSON.stringify(profile));
profile4.firsName = 'Grace';
profile4.Year = '200 Level';
profile4.courseOfStudy = 'Nursing Science'
    //Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};

for (const property in presidentialCandidates) {
    //for..in enumeration
    let party = property;
    let candidate = presidentialCandidates[property];

    console.log(candidate + " is the presidential candidate of " + party);
}

for (const candidate of Object.keys(presidentialCandidates)) {
    //for..of enumeration
    console.log(presidentialCandidates[candidate] + " is the presidential candidate of " + candidate);
}