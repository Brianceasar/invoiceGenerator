<?php
class TanzanianShilling {
    private $amount;
    private $shillings;
    private $hasSenti;
    private $senti;

    public function __construct($amount) {
        $this->amount = $amount;
        $this->hasSenti = false;
        $arr = explode(".", $this->amount);
        $this->shillings = isset($arr[0]) ? $arr[0] : 0;

        if (isset($arr[1]) && ((int)$arr[1]) > 0) {
            if (strlen($arr[1]) > 2) {
                $arr[1] = substr($arr[1], 0, 2);
            }
            $this->hasSenti = true;
            $this->senti = isset($arr[1]) ? $arr[1] : 0;
        }
    }

    public function get_words(){
        $w = "";
        $shillings = $this->shillings; // Create a local variable to store the original value
        
        $billion = (int)($shillings / 1000000000);
        $shillings = $shillings % 1000000000;
        $w .= $this->single_word($billion, "Billion ");
        
        $million = (int)($shillings / 1000000);
        $shillings = $shillings % 1000000;
        $w .= $this->single_word($million, "Million ");
        
        $thousand = (int)($shillings / 1000);
        $shillings = $shillings % 1000;
        $w .= $this->single_word($thousand, "Thousand ");
        
        $hundred = (int)($shillings / 100);
        $w .= $this->single_word($hundred, "Hundred ");
        
        $ten = $shillings % 100;
        $w .= $this->single_word($ten, "");
        
        $w .= "Shillings ";
        
        if($this->hasSenti){
            if($this->senti[0] == "0"){
            $this->senti = (int)$this->senti;
            }
            else if(strlen($this->senti) == 1){
            $this->senti = $this->senti * 10;
            }
            $w .= "and " . $this->single_word($this->senti, " Senti");
        }
        
        return $w . " Only";
    }




    private function single_word($n, $txt){
        $t = "";
        if($n <= 19){
        $t = $this->words_array($n);
        }else{
        $a = $n - ($n % 10);
        $b = $n % 10;
        $t = $this->words_array($a) . " " . $this->words_array($b);
        }
        if($n == 0){
        $txt = "";
        }
        return $t . " " . $txt;
    }

    private function words_array($num){
        $n = [0=>"", 1=>"One", 2=>"Two", 3=>"Three", 4=>"Four", 5=>"Five", 6=>"Six", 7=>"Seven", 8=>"Eight", 9=>"Nine", 10=>"Ten", 11=>"Eleven", 12=>"Twelve", 13=>"Thirteen", 14=>"Fourteen", 15=>"Fifteen", 16=>"Sixteen", 17=>"Seventeen", 18=>"Eighteen", 19=>"Nineteen", 20=>"Twenty", 30=>"Thirty", 40=>"Forty", 50=>"Fifty", 60=>"Sixty", 70=>"Seventy", 80=>"Eighty", 90=>"Ninety", 100=>"Hundred"];
        return $n[$num];
    }
}
