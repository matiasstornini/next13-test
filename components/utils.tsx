export const getFormattedTime = (props: any) => {
    const dta = [];
    const date = new Date(props.c[0].v * 1000);
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours.substr(-2) + ":" + minutes.substr(-2);
    dta.push(formattedTime);
    return dta;
  };
  