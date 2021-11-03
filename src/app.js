
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime(...params) {
    for (let i = 0; i < params.length; i++) {
        //console.log(params[i])
        let index=0;
        if(params[i]==2){
            console.log(params[i]+" asal sayıdır.")
        }
        for (let j =2 ; j < params[i]; j++){
            index=j;
            if (params[i]%j==0) {
                console.log(params[i]+" asal bir sayı değil")
                break
            }
           //console.log(index)
        }
        if(index+1==params[i]){
            console.log(params[i]+" asal sayıdır.")
        }
        
    }
}

findPrime(2,5,8,21,13,17,19)


//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan fonksiyon
function findFriendNumber(param1,param2) {
    let sum1=0
    let sum2=0

    for (let i = 1; i < param1; i++) {
        if(param1 % i== 0){
            sum1=sum1+i
        }
        
    }

    for (let j = 1; j < param2; j++) {
        if(param2 % j== 0){
            sum2=sum2+j
        }
        
    }

    if (param1==sum2 && param2==sum1) {
        console.log(param1+" ve "+param2+" sayılar arkadaş sayı")
    } else {
        console.log(param1+" ve "+param2+" sayılar arkadaş sayı değil")
    }
}

findFriendNumber(220,284)


//1000'e kadarki tüm mükemmel sayıları listeleyen fonksiyon
function findPerfectNumbers() {
    for (let i = 1; i <= 1000; i++) {
        let sum=0;
        let index
        for (index = 1; index <= i; index++) {
            if (i%index==0) {
                sum=sum+index
            }
            
        }

        if (sum==i*2) {
            console.log(i)
        }
    }
}

findPerfectNumbers()


//1000'e kadarki tüm asal sayıları listeleyen fonksiyon
function findPrimeBin() {
    console.log(2)
    for (let i = 3; i < 1000; i++) {
        let index=0
        for (let j = 2; j < i; j++) {
            index=j
            if(i%j==0){
                break
            }
            
        }
        //console.log(j)
        if(index+1==i){
            console.log(i)
        }
        
    }
}

findPrimeBin()