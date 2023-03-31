const { Post } = require('../models');

const postData = [
    {
        title: "I work in tech: Should I always be upskilling?",
        post_content: "If you work in tech, it is likely someone has told you that you should always be upskilling: earning a new certificate, learning a new language, or checking out new programs. But why is that the case? Mattias Andersson breaks down the logic behind the saying You should always be upskilling in tech.",
        user_id: 3
    },
    {
        title: "Wireless Charging: Pros and Cons",
        post_content: "Wireless charging has become a popular way to power up devices without the hassle of cords and cables. One of the biggest advantages of wireless charging is its convenience, as you can charge your device without having to plug it in. Additionally, wireless charging can extend the life of your device's battery by reducing wear and tear caused by plugging and unplugging it repeatedly. It also looks sleek and minimalist, making it a great addition to any workspace or home. However, wireless charging can also have downsides. It can be slower than wired charging and less compatible with some devices. It can also be disrupted by physical barriers such as walls or other devices.",
        user_id: 1
    },
    {
        title: "Protecting Your Privacy on Social Media",
        post_content: "Social media has become an integral part of daily life, but it also poses some privacy risks. To protect your personal information and keep your online activity private, adjust your privacy settings on social media platforms. Most platforms have privacy settings that allow you to control who can see your posts and information. You can also limit personal information shared on social media. Be cautious about sharing personal information such as your full name, home address, or phone number. Additionally, be careful when clicking on links or downloading attachments from unknown sources, as they may contain malware or other threats.",
        user_id: 2

    },
    {
        title: "Benefits of Virtual Reality",
        post_content: "Virtual reality (VR) is a technology that can create immersive experiences and has numerous applications in various industries. One of the main benefits of VR is its ability to create immersive experiences that can simulate real-life environments, which has applications in gaming, entertainment, and virtual tourism. It can also be used in training and education, as it allows users to practice skills and scenarios in a safe, controlled environment. In mental health therapy, VR can be used to help patients overcome phobias and anxiety disorders by exposing them to situations in a controlled environment. Overall, VR technology has the potential to improve the way we work, learn, and experience the world around us.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;