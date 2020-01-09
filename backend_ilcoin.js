

// Back-end for https://ilcoinexplorer.com/ API

var backend =
{
	host:      'ilcoinexplorer.com',
	home_page: 'https://ilcoinexplorer.com/',
	adr_page:  'https://ilcoinexplorer.com/address/',
	tx_page:   'https://ilcoinexplorer.com/tx/'
};//___________________________________________________________________________

function backend_balance_cb(data)
{
	console.log(data);
	
	try{ data = JSON.parse(data); } catch(e){ data = {}; }
	
	this.balance_cb(parseFloat(data.balance) + parseFloat(data.unconfirmedBalance));
}//____________________________________________________________________________

function backend_unspent_cb(data)
{
	var utxo = false; console.log(data);

	try{ data = JSON.parse(data); } catch(e){ data = {}; }

	if(data.length)
	{
		utxo = [];
	                               
		for(var i = 0; i < data.length; i++)
		{
			var u = data[i];

			utxo.push({txid: u.txid, n: u.vout, amount: u.amount, script: u.scriptPubKey});
		}
	}

	backend.unspent_cb(utxo);
}//____________________________________________________________________________

function backend_send_cb(data)
{
	console.log(data);

	var res = '';

	try{ data = JSON.parse(data); res = data.responseText; } catch(e){ data = {}; }

	backend.send_cb(data.txid ? '' : data);
}//____________________________________________________________________________

backend.get_balance = function(adr, cb)
{
	this.balance_cb = cb;
	
	js.ajax('GET', 'https://ilcoinexplorer.com/api/addr/' + adr, '', backend_balance_cb);
};//___________________________________________________________________________

backend.get_utxo = function(adr, cb)
{
	this.unspent_cb = cb;
	
	js.ajax('GET', 'https://ilcoinexplorer.com/api/addr/' + adr + '/utxo', '', backend_unspent_cb);

};//___________________________________________________________________________

backend.send = function(tx, cb)
{
	this.send_cb = cb;

	js.ajax('POST', 'https://ilcoinexplorer.com/api/tx/send', 'rawtx=' + tx, backend_send_cb);
};//___________________________________________________________________________
