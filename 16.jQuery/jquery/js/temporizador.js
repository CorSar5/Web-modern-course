(function ($){
    $.fn.temporizador = function (options){
        const FinalOptions = $.extend({
            message: 'Briefly!',
            schedule: '23:59:59'
        }, options)

        const hour2nd = $('<span class="digito">').html('0')
        const hour1st = $('<span class="digito">').html('0')
        const minute2nd = $('<span class="digito">').html('0')
        const minute1st = $('<span class="digito">').html('0')
        const second2nd = $('<span class="digito">').html('0')
        const second1st = $('<span class="digito">').html('0')

        const hourSpacer = $('<span class="separador>').html(':')
        const minuteSpacer = $('<span class="separador>').html(':')
        const message = $('<div class="mensagem">').html(FinalOptions.message)

        $(this).addClass('temporizador')
        $(this).append(hour2nd, hour1st, hourSpacer,minute2nd, minute1st ,minuteSpacer, second2nd, second1st, message)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const ScheduleP = regex.exec(FinalOptions.schedule)
        
        let timer = setInterval(() => {
            const now = new Date()
            const alve = new Date()
            alve.setHours(ScheduleP[1])
            alve.setMinutes(ScheduleP[2])
            alve.setSeconds(ScheduleP[3])

            const MiliDif = alve.getTime() - now.getTime()
            if (MiliDif>=0){
                const dif = regex.exec(new Date(MiliDif).toISOString())

                hour2nd.html(dif[1][0])
                hour1st.html(dif[1][1])
                minute2nd.html(dif[2][0])
                minute1st.html(dif[2][1])
                second2nd.html(dif[3][0])
                second1st.html(dif[3][1])
            }else{
                clearInterval(timer)
            }
        },1000)

        return this
    }
})(jQuery)