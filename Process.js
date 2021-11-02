var TongTien=0;
var TenSP=["nnn025","nnl030","dn 020"];
function Add(){
    var Decode=document.getElementById('NhapTenHang').value;
    var Soluong=Decode[0]*10+Decode[1]*1;
    var NameSP=Decode[2]+Decode[3]+Decode[4];

    for(var i=0;i<3;i++){
        var Check=TenSP[i][0]+TenSP[i][1]+TenSP[i][2];
        if(Check==NameSP){
            var Prize=TenSP[i][3]*100+TenSP[i][4]*10+TenSP[i][5]*1;
            document.getElementById('Ten_1').value=Check+' '+Soluong+'x'+Prize;
            break;
        }
    }
    document.getElementById('Gia_1').value=Soluong*Prize*1;
    
    
}
