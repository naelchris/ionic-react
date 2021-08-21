const calculateBtn = document.getElementById("calc_btn")
const resetBtn = document.getElementById("reset_btn")
const bmiCalculation = document.getElementById("bmi_calculation")
const bmiType = document.getElementById("bmi_type")

const height = document.getElementById("height")
const weight = document.getElementById("weight")

const typeBMI = (cal) => {
    if(cal < 8.5){
        return "Kurus"
    }
    if(cal < 24.9){
        return "Normal"
    }
    if(cal < 29.9){
        return "Gemuk"
    }
    if(cal >= 30){
        return "Obesitas"
    }
}


const calculateBMI = () => {
    if(height.value != "" & weight.value != ""){

        const calHeight = +height.value/100
        const calWeight = +weight.value

        const bmi = calWeight /(calHeight**2)

        bmiCalculation.innerHTML = bmi
        bmiType.innerHTML = typeBMI(bmi)
    } 
}

const reset = () => {

    if(height.value != "" || weight.value != ""){
        bmiCalculation.innerHTML = 0
        bmiType.innerHTML = "BMI Type"
        height.value = ""
        weight.value = ""
    }
}

resetBtn.onclick = () => { reset() }
calculateBtn.onclick = () => {calculateBMI()}
