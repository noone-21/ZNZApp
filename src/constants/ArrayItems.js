import topQuality from '../components/pictures/topQuality.png'
import unlimitCustom from '../components/pictures/unlimitCustom.png'
import lowMin from '../components/pictures/lowMin.png'
import quickTurnaround from '../components/pictures/quickTurnaround.png'
import patch from '../components/pictures/patch.png'
import sublimatedPatch from '../components/pictures/sublimatedPatch.png'
import leatherPatch from '../components/pictures/leatherPatch.png'
import pvcPatch from '../components/pictures/pvcPatch.png'
import embrideKeychain from '../components/pictures/embrideKeychain.png'
import pvcKeychain from '../components/pictures/pvcKeychain.png'
import subPatch from '../components/pictures/subPatch.png'
import stickers from '../components/pictures/stickers.png'
import embKeychain1 from '../components/pictures/embKeychain1.png'
import embKeychain2 from '../components/pictures/embKeychain2.png'
import embKeychain3 from '../components/pictures/embKeychain3.png'
import embKeychain4 from '../components/pictures/embKeychain4.png'
import willSmith from '../components/pictures/willSmith.jpeg'
import alexandraDaddario from '../components/pictures/alexandraDaddario.jpg'
import mahiraKhan from '../components/pictures/mahiraKhan.jpg'
import customerTestimonials from '../components/pictures/customerTestimonials.png'
import Return365 from '../components/pictures/Return365.png'
import patchRewards from '../components/pictures/patchRewards.png'
import fb from '../components/pictures/fb.png'
import insta from '../components/pictures/insta.png'
import pinterest from '../components/pictures/pinterest.png'
import twitter from '../components/pictures/twitter.png'
import masterCard from '../components/pictures/masterCard.png'
import Visa from '../components/pictures/Visa.png'
import Paypal from '../components/pictures/Paypal.png'
import moneyGram from '../components/pictures/moneyGram.png'

const navItems =[
    {
        key:'1',
        title:'Home',
        isColor: true,
        isIcon:false
    },
    {
        key:'2',
        title:'Products',
        isColor: false,
        isIcon:true
    },
    {
        key:'3',
        title:'Our Company',
        isColor: false,
        isIcon:false
    },
    {
        key:'4',
        title:'Blog',
        isColor: false,
        isIcon:false
    },
    {
        key:'5',
        title:'Contact Us',
        isColor: false,
        isIcon:false
    },
    {
        key:'6',
        title:'FAQ',
        isColor: false,
        isIcon:false
    },
]

const featureItem =[
    {
        key:'1',
        img: topQuality,
        title: 'TopQuality',
        imgBg:false,
        bodyBg: false,
        description: 'Make stuff actually buy, create beautiful, retail ready custom products with the same QC standards as leading fashion brands'
    },
    {
        key:'2',
        img: unlimitCustom,
        title: 'Unlimited Customization',
        imgBg:false,
        bodyBg: false,
        description: 'Let your imagination run wild. We create  every product from scratch so you can  customize every last detail.'
    },
    {
        key:'3',
        img: lowMin,
        title: 'Low Minimum',
        imgBg:true,
        bodyBg: true,
        description: 'No more sticker shock. Get small-batch  custom manufacturing with low unfront  costs and eye-widening profit margins.'
    },
    {
        key:'4',
        img: quickTurnaround,
        title: 'Quick Turnaround',
        imgBg:false,
        bodyBg: false,
        description: `No timeline is too tight for our rapid small batch supply chain let us know whenyou'll need products and we'll make it happen!`
    },
]

const patchCategory =[
    {
        key: '1',
        title: 'Patches',
        img: patch
    },
    {
        key: '2',
        title: 'Leather Patches',
        img: leatherPatch
    },
    {
        key: '3',
        title: 'Sublimated Patches',
        img: sublimatedPatch
    },
    {
        key: '4',
        title: 'Pvc Patches',
        img: pvcPatch
    },
    {
        key: '5',
        title: 'Leather Patches',
        img: leatherPatch
    },
    {
        key: '6',
        title: 'Pvc Patches',
        img: pvcPatch
    },
    {
        key: '7',
        title: 'Patches',
        img: patch
    },
    {
        key: '8',
        title: 'Sublimated Patches',
        img: sublimatedPatch
    }
]

const apparelItems =[
    {
        key:'1',
        title: 'Embride Keychains',
        img: embrideKeychain     
    },
    {
        key:'2',
        title: 'Sublimated Patches',
        img: subPatch     
    },
    {
        key:'3',
        title: 'Pvc Keychains',
        img: pvcKeychain     
    },
    {
        key:'4',
        title: 'Stickers',
        img: stickers     
    },
]

const promotionalItems =[
    {
        key:'1',
        img: embKeychain1,
        titleColor: true
    },
    {
        key:'2',
        img: embKeychain2,
        titleColor: false
    },
    {
        key:'3',
        img: embKeychain3,
        titleColor: false
    },
    {
        key:'4',
        img: embKeychain4,
        titleColor: false
    },
]

const customerReviews =[
    {
        key: '1',
        customerName: 'Will Smith',
        tag: 'Triple',
        img: willSmith,
        date: '8 : 37 PM-Feb 15,2021',
        rating: '5'
    },
    {
        key: '2',
        customerName: 'Alexandra Daddario',
        tag: 'Double',
        img: alexandraDaddario,
        date: '7:14 AM-Dec 09,2022',
        rating: '3'
    },
    {
        key: '3',
        customerName: 'Mahira Khan',
        tag: 'Triple',
        img: mahiraKhan,
        date: '11 : 57 PM-May 26,2023',
        rating: '1'
    },
]

const PerksItems =[
    {
        key:'1',
        img: customerTestimonials,
        title: 'Customer Testimonials',
        description: "Hear about our customer experience, Veiw all"
    },
    {
        key:'2',
        img: Return365,
        title: '365-Day Returns',
        description: "Simple. we accept returns up to 365 days froms the delivery date."
    },
    {
        key:'3',
        img: patchRewards,
        title: 'Patch Rewards',
        description: "Patch Collection account holders earn rewards on every purchase"
    },
]

const FooterItems = [
    {
        key:'1',
        title: 'Contact Us',
        contents: [
            'The Patchio',
            'Call: + 1 270 775 0015',
            'Mail: designsthepatchio.com',
            'Address: 200 Stonefield Drive',
            'Waterbusy CT 06705'
        ],
        icons:[
            fb,
            insta,
            pinterest,
            twitter
        ]
    },
    {
        key: '2',
        title: 'Custom Patches',
        contents:[
            'Embroided Patches',
            'PVC Patches',
            'Chenille Patches',
            'Leather Patches',
            'Woven Patches',
            'PVC Keychains',
            'Custom Hats',
            'Metal Coins'
        ]
    },
    {
        key: '3',
        title: 'Apparel',
        contents:[
            'Custom T-shirts',
            'Hats',
            'Beanies',
            'Masks'
        ]
    },
    {
        key: '4',
        title: 'Feature Products',
        contents:[
            'PVC Key chains',
            'Uniform Patches',
            'Police Patches'
        ]
    },
    {
        key: '5',
        title: 'Customer Care',
        contents:[
            'Create My Account',
            'Privacy Policy',
            'Terms and Conditions',
            'Contact Us',
            'FAQ'
        ]
    },
]

export {featureItem,navItems,patchCategory,apparelItems,promotionalItems,customerReviews,PerksItems,FooterItems}