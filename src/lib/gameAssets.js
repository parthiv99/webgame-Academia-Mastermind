// This file contains images and styles for the website
import mathTheme from "$lib/assets/images/mathTheme.jpg"
import scienceTheme from "$lib/assets/images/scienceTheme.jpg"
import socialScienceTheme from "$lib/assets/images/socialScienceTheme.jpg"
import mathIcon from "$lib/assets/images/mathematics.png"
import scienceIcon from "$lib/assets/images/science.png"
import socialScienceIcon from "$lib/assets/images/social_science.png"
import defaultAvatar from "$lib/assets/images/defaultAvatar.png"
import defaultProfile from "$lib/assets/images/defaultProfile.png"
import lock from "$lib/assets/images/lock.png"
import star from "$lib/assets/images/star.png"
import heart from "$lib/assets/images/heart.png"
import goldCup from "$lib/assets/images/goldCup.png"
import silverCup from "$lib/assets/images/silverCup.png"
import bronzeCup from "$lib/assets/images/bronzeCup.png"
import backGroundImage from "$lib/assets/images/backGroundImage.jpg"
import starBackGround from "$lib/assets/images/starBackGround.jpg"

export const subjectStlyes = {
    mathematics: {
        color: "salmon",
        backgroundImage: mathTheme,
        icon: mathIcon
    },

    science: {
        color: "#2E8BC0",
        backgroundImage: scienceTheme,
        icon: scienceIcon
    },

    social_science: {
        color: "#61412D",
        backgroundImage: socialScienceTheme,
        icon: socialScienceIcon
    }
}

export const userDefaultImages = {
    profile: defaultProfile,
    avatar: defaultAvatar
}

export const levelPageImages = {
    lock: lock
}

export const questionPageImages = {
    star: star,
    heart: heart
}

export const RankPageImages = {
    star: star,
    goldCup: goldCup,
    silverCup: silverCup,
    bronzeCup: bronzeCup,
    starBackGround: starBackGround
}

export const pageBackGround = {
    img: backGroundImage
}

export const avatarIframe = {
    landingPage: 'https://my.spline.design/academia-d49ca2760b1130f2eb6f933610097c4f/',
    home: 'https://my.spline.design/mainlogohome-b32cfa2853bf47bc930b2f2ab5e8bbb2/',
    mathematics: {
        level1: 'https://my.spline.design/molang3dbluelevel1copy-24292e89f3fc84cdb5934c5df473d66b/',
        level2: 'https://my.spline.design/molang3dbluelevel2copy-a0cee76bd3642c67d61622caa90a3a73/',
        level3: 'https://my.spline.design/mathlevel3-82877b6fd999f9ae8afdfc81b58865e3/',
        level4: 'https://my.spline.design/molang3dcopy-553093042391808e9c43961b060064c5/',
        level5: 'https://my.spline.design/mathwinninglevel6-15bc171e98467820dd81d7ac78215799/'
    },
    science: {
        level1: 'https://my.spline.design/sciencelevel1-0a5add9571b101675ad12e3d86645e7c/',
        level2: 'https://my.spline.design/sciencelevel2-a4415c7f333c3ca442ad467ef8dd6b9e/',
        level3: 'https://my.spline.design/sciencelevel3-31371f33c6fa3931955a7b46db654a70/',
        level4: 'https://my.spline.design/sciencelevel4-eb261fb290f93e51ac884554594e4eab/',
        level5: 'https://my.spline.design/sciencewinning-0134625b0cb00c35fa23b724976d4e97/'
    },
    social_science: {
        level1: 'https://my.spline.design/sslevel1-1f548ec80e40ac2bc715b7815faa2139/',
        level2: 'https://my.spline.design/sslevel2-cd7e6467f178a1b4c25647eced6b7780/',
        level3: 'https://my.spline.design/sslvl3-c654a6d5ae3f3fcc69618ce6358fbbf8/',
        level4: 'https://my.spline.design/sslevel4-88928764f21802b9ad12938c097f49a2/',
        level5: 'https://my.spline.design/sswinning-ad46f99455efe4893fe90bc9c201207d/'
    }
}