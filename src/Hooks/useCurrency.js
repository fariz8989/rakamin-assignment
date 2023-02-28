export default function useCurrency(currency,value){
    let formatter = new Intl.NumberFormat('en-US', {
        style:'currency',
        currency:currency
    })
    return formatter.format(value)
}