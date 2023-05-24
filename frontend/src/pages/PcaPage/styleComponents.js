import styled from 'styled-components';

export const TD = styled.td`
    
    ${({correlation}) => {
        switch (correlation) {
            case "n01":
                return {
                        background: "white",
                        color: "white"
                        
                        };
            case "n02":
                return {
                        color: "white",
                        background: "#09386c",
                        
                    };
            case "p00":
                return "background: #5ba2cb  !important" ;
            case "p02":
                return "background: #e0edf2  !important";
            case "p04":
                return "background: #f8ba9d  !important";
            case "p06":
                return "background: #d05448  !important";
            case "p07":
                return "background: #790621  !important";
                
        }
    }}
    

`;