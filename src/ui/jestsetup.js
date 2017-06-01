// ---------------------------------------
// Test Environment Setup
// ---------------------------------------
import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiEnzyme from 'chai-enzyme'
import { mount, render, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

global.chai = chai
global.sinon = sinon
global.jespect = global.expect
global.expect = chai.expect
global.should = chai.should()
global.mount = mount
global.render = render
global.shallow = shallow
global.toJson = toJson
