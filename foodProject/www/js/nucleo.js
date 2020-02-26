var config = {
	server:'http://localhost:3000/api/'
}
var appFitFood = {
	actionUrl:(url, meth, _d, callback)=>{
		$.ajax({
        	url: `${config.server}${url}`,
  			data: _d,
	    	async: true,
	    	headers: {
        		'x-access-token': localStorage.getItem('token')
        	},
	    	type:meth,
	    }).done((data) => { 
	       callback(data);
	    }).fail((data, textStatus, xhr)=>{
	    	alert(`#ERROR(${data.status}): ${data.responseJSON.validation[0].message}!`);
	    });	
	},
	auth:(login, password)=>{
		appFitFood.actionUrl('usuario/auth/', 'post', {email:login, senha:password}, (data)=>{
			localStorage.setItem('token', data.token);
			for(let i in data.usuario){
				localStorage.setItem(i, data.usuario[i]);
			}
			location.href = 'category.html';
		});
	},
	signUp:(json)=>{
		appFitFood.actionUrl('usuario/register', 'post', json, (data)=>{
			alert('Cadastro efetuado com sucesso!');
			setTimeout(()=>{
				location.href = 'login.html';
			},333);
		});
	},
	update:(json)=>{
		appFitFood.actionUrl(`usuario/${localStorage.getItem('_id')}`, 'put', json, (data)=>{
			alert('Atualização efetuada com sucesso!');
			setTimeout(()=>{
				location.href = 'profile.html';
			},333);
		});
	},
	delete:()=>{
		appFitFood.actionUrl(`usuario/${localStorage.getItem('_id')}`, 'delete', {}, (data)=>{
			alert('Conta deletada com sucesso!');
			setTimeout(()=>{
				location.href = 'index.html';
			},333);
		});
	},
	getUser:()=>{
		appFitFood.actionUrl(`usuario/${localStorage.getItem('_id')}`, 'get', {}, (data)=>{
			appFitFood.modelProfile(data.nome, data.email, data.endereco);
		});
	},
	getOrders:()=>{
		let data = JSON.parse(localStorage.getItem('order'));
		if(data){
			for(let i in data){
				appFitFood.modelOrders(data[i][0].nome, data[i][0].foto);
			}
		}else{
			document.getElementById('orders').innerHTML = '<h4 style="color:grey;"> Você não possui nenhum pedido! </h4>';
			document.getElementById('profBottom').style.paddingBottom = '31vh';
		}
	},
	getUserUpdate:()=>{
		appFitFood.actionUrl(`usuario/${localStorage.getItem('_id')}`, 'get', {}, (data)=>{
			appFitFood.modelProfileUpdate(data.nome, data.email, data.endereco);
		});
	},
	getCategories:()=>{
		appFitFood.actionUrl('categoria', 'get', {}, (data)=>{
			for(let i in data){
				appFitFood.modelCategory(data[i].titulo, data[i].foto, data[i]._id);
			}
		});
	},
	getProducts:()=>{
		appFitFood.actionUrl(`produto/idCateg/${sessionStorage.getItem('_idCateg')}`, 'get', {}, (data)=>{
			for(let i in data){
				appFitFood.modelProducts(data[i].nome, data[i].foto, data[i].peso, data[i].preco, data[i]._id);
			}
		});
	},
	getDetailProduct:(_id)=>{
		appFitFood.actionUrl(`produto/${_id}`, 'get', {}, (data)=>{
			appFitFood.modelDetailProduct(data.nome, data.foto, data.peso, data.preco, data.descricao, data._id);
			sessionStorage.setItem('tempCart', JSON.stringify(data));
		});
	},
	getCart:(type)=>{
		let _cart = JSON.parse(sessionStorage.getItem('cart'));
		if(_cart && _cart.length>0){
			document.getElementById('cart').style.display = 'flex';
			document.getElementById('products').style.borderBottomLeftRadius = '56px';
			document.getElementById('products').style.borderBottomRightRadius = '66px';
			if(type == 1){
				document.getElementById('tableCart').innerHTML = '';
				for(let i in _cart){
					appFitFood.modelDetailCart(_cart[i].nome, _cart[i].foto, _cart[i].preco, _cart[i].quantidade, i);
				}
			}else{
				let qtd = 0;
				document.getElementById('cartItens').innerHTML = '';
				for(let i in _cart){
					qtd += parseInt(_cart[i].quantidade);
					appFitFood.modelCart(_cart[i].foto);
				}
				document.getElementById('cartTotal').innerHTML = qtd;
			}
		}else{
			document.getElementById('cart').style.display = 'none';
			document.getElementById('products').style.borderBottomLeftRadius = '0px';
			document.getElementById('products').style.borderBottomRightRadius = '0px';
		}
	},
	modelProfileUpdate:(nome, email, endereco)=>{
		document.getElementById('nome').value = nome;
		document.getElementById('email').value = email;
		document.getElementById('endereco').value = endereco;
	},
	modelProfile:(nome, email, endereco)=>{
		document.getElementById('profileName').innerHTML = nome;
		document.getElementById('profileEmail').innerHTML = email;
		document.getElementById('profileEnd').innerHTML = endereco;
	},
	modelProducts:(nome, foto, peso, preco, _id)=>{
		let txt =`<div class="card" data-id="${_id}">`;
		txt+=`				<img class="imgCard" src="${foto}">`;
		txt+=`			<div class="cardPrice">`;
		txt+=`				<strong>R$ ${preco}</strong>`;
		txt+=`			</div>`;
		txt+=`			<div class="cardText">`;
		txt+=`				<p class="cardTitle">${nome}</p>`;
		txt+=`				<p class="cardSubTitle">${peso}</p>`;
		txt+=`			</div>`;
		txt+=`		</div>`;
		document.getElementById('products').innerHTML += txt;
	},
	modelDetailProduct:(nome, foto, peso, preco, descricao, _id)=>{
		document.getElementById('modalTitle').innerHTML = nome;
		document.getElementById('modalSubTitle').innerHTML = peso;
		document.getElementById('modalPriceValue').innerHTML = `R$ ${preco}`;
		document.getElementById('modalDesc').innerHTML = descricao;
		document.getElementById('modalImg').src = foto;
	},
	modelCategory:(titulo, foto, _id)=>{
		let txt= `<div class="bgCategory" style="background-image: url(${foto})">`;
		txt+=`	<div class="category" data-id="${_id}">`;
		txt+=`		<div class="catTitle">${titulo}</div>`;
		txt+=`	</div>`;
		txt+=`</div>`;
		document.getElementById('categories').innerHTML += txt;
	},
	modelCart:(foto)=>{
		let txt =`<div class="cartItens">`;
		txt+=`	<div id="cartItem">`;
		txt+=`		<img src="${foto}">`;
		txt+=`	</div>`;
		txt+=`</div>`;
		document.getElementById('cartItens').innerHTML += txt;
	},
	modelDetailCart:(nome, foto, preco, quantidade, i)=>{
		let txt= ``;
			txt+= `<tr class="trItemCart" data-pos="${i}">`;
			txt+= `	<td class="tdBg" id="tdBg"><div class="tdBgImg"><img src="${foto}"></div></td>`;
			txt+= `	<td class="tdModCartQuant"><p id="modCartQuant" > ${quantidade} &thinsp; X</p></td>`;
			txt+= `	<td id="modCartTitle" class="tdModCartTitle">${nome}</td>`;
			txt+= `	<td id="modCartPrice" class="tdModCartPrice">R$ ${preco}</td>`;
			txt+= `</tr>`;
			txt+= `<tr><td>&thinsp;</td></tr>`;
		document.getElementById('tableCart').innerHTML += txt;
	},
	modelOrders:(nome, img, situacao)=>{
		let txt= ``;
			txt+=`<div class="btnBloco">`;
			txt+=`	<img src="${img}">`;
			txt+=`	<div id="pedidoStatus" style="background-color: #43e241;">Em trânsito</div>`;
			txt+=`	<strong id="pedidoTitulo">${nome}</strong>`;
			txt+=`	<p id="pedidoDesc"></p>`;
			txt+=`</div>`;
		document.getElementById('orders').innerHTML += txt;
	},
	truckage:()=>{
		let _total = document.getElementById('total');
    	let _truckage = parseFloat(document.getElementById('truckage').getAttribute('data-truckage'));
    	let _priceTransp = parseFloat(_total.getAttribute('data-total')) + _truckage;
    	_total.innerHTML = `R$ ${_priceTransp.toFixed(2).replace('.',',')}`;
	},
	click:{
		product:(_this)=>{
			if(['card','imgCard', 'cardText', 'cardSubTitle', 'cardTitle'].includes(_this.className)){
			 	if(_this.getAttribute('data-id') == null){
			 		if(_this.parentNode.getAttribute('data-id') == null)
			    		appFitFood.getDetailProduct(_this.parentNode.parentNode.getAttribute('data-id'));
			    	else
			    		appFitFood.getDetailProduct(_this.parentNode.getAttribute('data-id'));
			 	}
			    else
			    	appFitFood.getDetailProduct(_this.getAttribute('data-id'));
			    setTimeout(()=>{
			    	document.getElementById('modalProduct').style.display = 'flex';
					document.body.style.overflow = 'hidden';
					location.href="#top";
			    }, 188);
		    }else if(_this.id == 'cart'){
		    	appFitFood.getCart(1);
		    	let _cart = JSON.parse(sessionStorage.getItem('cart'));
		    	document.getElementById('modalCart').style.display = 'flex';
				document.body.style.overflow = 'hidden';
				location.href='#modalCart';
				let total = _cart.map(x=> parseFloat(x.preco) * (parseInt(x.quantidade)))
                     .reduce((t,v) => t += v)
                     .toFixed(2);
             	document.getElementById('total').setAttribute('data-total', total);  
                document.getElementById('total').innerHTML = `R$ ${total.replace('.',',')}`;     
		    }else if(_this.id == 'rdo-1'){
		    	appFitFood.truckage();
		    	document.getElementById('anotherAddr').style.display = 'none';
		    }else if(_this.id == 'rdo-2'){
		    	appFitFood.truckage();
		    	document.getElementById('anotherAddr').style.display = 'block';
		    }else if(_this.className == 'fas fa-2x fa-chevron-left closeModal'){
				document.getElementById(_this.parentElement.getAttribute('id')).style.display = 'none';
				document.body.style.overflow = 'unset';
		    }else if(_this.className == 'addToCart'){
		    	if(!localStorage.getItem('token'))
		    		location.href='login.html';
		    	else{
			    	let _cart = JSON.parse(sessionStorage.getItem('cart'));
			    	let _tmp = JSON.parse(sessionStorage.getItem('tempCart'));
			    	let qtd = document.getElementById('modalQtd').value;
			    	if(qtd == 0){
			    		alert("Para adicionar ao carrinho é necessária uma quantidade maior que 0!");
			    	}else{
			    		_tmp.quantidade = qtd;
			    		if(_cart != null){
			    			let sameCart = 0;
			    			_cart.filter(x=> { 
			    				if(x.nome === _tmp.nome){
			    					x.quantidade = (parseInt(x.quantidade) + parseInt(_tmp.quantidade));
			    					sameCart++;
			    				}
			    			});
			    			if(sameCart == 0)
			    				_cart.push(_tmp);
				    		sessionStorage.setItem('cart', JSON.stringify(_cart));
				    	}else{
					    	_tmp = [_tmp];
				    		sessionStorage.setItem('cart', JSON.stringify(_tmp));
				    	}
				    	appFitFood.getCart();
				    	document.getElementById('modalProduct').style.display = 'none';
						document.body.style.overflow = 'unset';
						location.href='#cart';
			    	}
			    }
		    }else if(['tdModCartTitle', 'tdModCartPrice','tdModCartQuant', 'tdBg'].includes(_this.className)){	
		    	let _cart = JSON.parse(sessionStorage.getItem('cart'));
		    	let _item = parseInt(_this.parentNode.getAttribute('data-pos'));
		    	if (confirm('Deseja remover este item do carrinho?')) {
		    		if(_cart[_item].quantidade > 1){
		    			_cart[_item].quantidade -= 1;
		    		}else{
		    			console.log('else');
		    			if (_item > -1) {
					  		_cart.splice(_item, 1);
						}
		    		}
		    		sessionStorage.setItem('cart',JSON.stringify(_cart));
		    		appFitFood.getCart();
					document.getElementById('modalCart').style.display = 'none';
					document.body.style.overflow = 'unset';
				} else {
				   
				}
		    }else if(['finishCart', 'strongFinishCart'].includes(_this.className)){
		    	let _radio = document.getElementsByName('radio-grp');
		    	let _chck = 0;
		    	for(var i in _radio){
		    		if(_radio[i].checked)
		    			_chck++;
		    	}
		    	if(_chck == 0)
		    		alert('Selecione um endereço para a entrega!');
		    	else{
			    	let _cart = JSON.parse(sessionStorage.getItem('cart'));
			    	let _order = JSON.parse(localStorage.getItem('order'));
			    	if(_order != null){
			    		_order.push(_cart)
			    		localStorage.setItem('order', JSON.stringify(_order));
			    	}else{
				    	_cart = [_cart];
			    		localStorage.setItem('order', JSON.stringify(_cart));
			    	}
			    	alert('Pedido realizado com sucesso!');
			    	sessionStorage.removeItem('cart');
			    	appFitFood.getCart();
			    	for(var i in _radio)
      					_radio[i].checked = false;
			    	document.getElementById('modalCart').style.display = 'none';
					document.body.style.overflow = 'unset';
			    }
		    }
		}
	}
}